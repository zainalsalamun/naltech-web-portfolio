'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Check,
  ChevronDown,
  Clipboard,
  Plus,
  RotateCcw,
  Share2,
  Sparkles,
  Trash2,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState, type CSSProperties, type FormEvent } from 'react';
import { checklistData, getItemId, type ChecklistItem, type Gender } from './checklist-data';

const STORAGE_KEY = 'umrah-checklist-10-days';
const whatsappContact = 'https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20ingin%20konsultasi%20tentang%20website.';

interface StoredChecklist {
  gender: Gender;
  checkedItems: string[];
  customItems: CustomChecklistItems;
  removedItems: Record<Gender, string[]>;
}

type CustomChecklistItems = Record<Gender, Record<string, ChecklistItem[]>>;

const emptyCustomItems = (): CustomChecklistItems => ({ male: {}, female: {} });
const emptyRemovedItems = (): Record<Gender, string[]> => ({ male: [], female: [] });

function isGender(value: unknown): value is Gender {
  return value === 'male' || value === 'female';
}

export function calculateProgress(completed: number, total: number) {
  return total === 0 ? 0 : Math.round((completed / total) * 100);
}

export default function UmrahChecklistClient() {
  const [gender, setGender] = useState<Gender>('male');
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [customItems, setCustomItems] = useState<CustomChecklistItems>(emptyCustomItems);
  const [removedItems, setRemovedItems] = useState<Record<Gender, string[]>>(emptyRemovedItems);
  const [itemDrafts, setItemDrafts] = useState<Record<string, string>>({});
  const [storageReady, setStorageReady] = useState(false);
  const [openCategories, setOpenCategories] = useState<Record<Gender, string[]>>({
    male: ['pakaian'],
    female: ['pakaian'],
  });
  const [toast, setToast] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const toastTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let storedGender: Gender = 'male';
    let storedItems: string[] = [];
    let storedCustomItems = emptyCustomItems();
    let storedRemovedItems = emptyRemovedItems();
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<StoredChecklist>;
        if (isGender(parsed.gender)) storedGender = parsed.gender;
        if (Array.isArray(parsed.checkedItems)) {
          storedItems = parsed.checkedItems.filter((id): id is string => typeof id === 'string');
        }
        if (parsed.customItems && typeof parsed.customItems === 'object') {
          storedCustomItems = { ...storedCustomItems, ...parsed.customItems };
        }
        if (parsed.removedItems && typeof parsed.removedItems === 'object') {
          storedRemovedItems = { ...storedRemovedItems, ...parsed.removedItems };
        }
      }
    } catch {
      // The checklist remains usable in memory when storage is unavailable.
    }

    const storageTimer = window.setTimeout(() => {
      setGender(storedGender);
      setCheckedItems(storedItems);
      setCustomItems(storedCustomItems);
      setRemovedItems(storedRemovedItems);
      setStorageReady(true);
    }, 0);

    return () => window.clearTimeout(storageTimer);
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ gender, checkedItems, customItems, removedItems }));
    } catch {
      // Browsers may block storage; state still works for the current session.
    }
  }, [checkedItems, customItems, gender, removedItems, storageReady]);

  useEffect(() => () => window.clearTimeout(toastTimerRef.current), []);

  const categories = useMemo(() => {
    const removedSet = new Set(removedItems[gender]);
    return checklistData[gender].map((category) => ({
      ...category,
      items: [
        ...category.items.filter((entry) => !removedSet.has(getItemId(gender, category.id, entry.id))),
        ...(customItems[gender][category.id] ?? []),
      ],
    }));
  }, [customItems, gender, removedItems]);
  const checkedSet = useMemo(() => new Set(checkedItems), [checkedItems]);
  const totalItems = useMemo(
    () => categories.reduce((total, category) => total + category.items.length, 0),
    [categories],
  );
  const completedItems = useMemo(
    () =>
      categories.reduce(
        (total, category) =>
          total + category.items.filter((item) => checkedSet.has(getItemId(gender, category.id, item.id))).length,
        0,
      ),
    [categories, checkedSet, gender],
  );
  const progress = calculateProgress(completedItems, totalItems);

  const showToast = (message: string) => {
    setToast(message);
    window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToast(''), 2800);
  };

  const toggleItem = (id: string) => {
    setCheckedItems((current) =>
      current.includes(id) ? current.filter((itemId) => itemId !== id) : [...current, id],
    );
  };

  const toggleCategory = (categoryId: string, open: boolean) => {
    setOpenCategories((current) => ({
      ...current,
      [gender]: open
        ? Array.from(new Set([...current[gender], categoryId]))
        : current[gender].filter((id) => id !== categoryId),
    }));
  };

  const addItem = (event: FormEvent<HTMLFormElement>, categoryId: string) => {
    event.preventDefault();
    const draftKey = `${gender}-${categoryId}`;
    const name = itemDrafts[draftKey]?.trim();
    if (!name) return;

    setCustomItems((current) => {
      const categoryItems = current[gender][categoryId] ?? [];
      let sequence = categoryItems.length + 1;
      while (categoryItems.some((item) => item.id === `custom-${sequence}`)) sequence += 1;

      return {
        ...current,
        [gender]: {
          ...current[gender],
          [categoryId]: [...categoryItems, { id: `custom-${sequence}`, name }],
        },
      };
    });
    setItemDrafts((current) => ({ ...current, [draftKey]: '' }));
    showToast('Item baru ditambahkan.');
  };

  const removeItem = (categoryId: string, entry: ChecklistItem) => {
    const id = getItemId(gender, categoryId, entry.id);
    const isCustomItem = entry.id.startsWith('custom-');

    setCheckedItems((current) => current.filter((itemId) => itemId !== id));
    if (isCustomItem) {
      setCustomItems((current) => ({
        ...current,
        [gender]: {
          ...current[gender],
          [categoryId]: (current[gender][categoryId] ?? []).filter((item) => item.id !== entry.id),
        },
      }));
    } else {
      setRemovedItems((current) => ({
        ...current,
        [gender]: Array.from(new Set([...current[gender], id])),
      }));
    }
    showToast('Item dihapus dari checklist.');
  };

  const restoreCategoryItems = (categoryId: string) => {
    const prefix = `${gender}-${categoryId}-`;
    setRemovedItems((current) => ({
      ...current,
      [gender]: current[gender].filter((id) => !id.startsWith(prefix)),
    }));
    showToast('Item bawaan berhasil dipulihkan.');
  };

  const buildShareText = () => {
    const lines = [
      'CHECKLIST UMRAH 10 HARI',
      '',
      gender === 'male' ? 'PRIA' : 'WANITA',
      '',
    ];

    categories.forEach((category) => {
      lines.push(category.title.toUpperCase());
      category.items.forEach((item) => {
        const id = getItemId(gender, category.id, item.id);
        lines.push(`${checkedSet.has(id) ? '☑' : '☐'} ${item.name}${item.quantity ? ` — ${item.quantity}` : ''}`);
      });
      lines.push('');
    });

    lines.push(`Progress: ${progress}% (${completedItems}/${totalItems})`);
    lines.push('');
    lines.push('Checklist ini dibuat untuk persiapan pribadi umrah 10 hari.');
    return lines.join('\n');
  };

  const copyChecklist = async () => {
    const text = buildShareText();
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      showToast('Checklist berhasil disalin.');
    } catch {
      showToast('Checklist belum berhasil disalin.');
    }
  };

  const shareChecklist = async () => {
    const text = buildShareText();
    const popup = window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    if (popup) popup.opener = null;

    if (!popup && navigator.share) {
      try {
        await navigator.share({ title: 'Checklist Umrah 10 Hari', text });
      } catch {
        // Closing the native share sheet is not an error that needs surfacing.
      }
    }
  };

  const resetChecklist = () => {
    setCheckedItems([]);
    dialogRef.current?.close();
    showToast('Progress checklist berhasil direset.');
  };

  const ringStyle = { '--progress': `${progress * 3.6}deg` } as CSSProperties;

  return (
    <main className="um-page" id="top">
      <header className="nl-header shell um-site-header">
        <Link className="nl-logo" href="/" aria-label="Kembali ke beranda Naltech">
          <Image src="/naltech-logo.webp" alt="Logo Naltech Studio" width={256} height={259} priority />
          NALTECH
        </Link>
        <nav className="nl-nav" aria-label="Navigasi utama">
          <Link href="/#services">Layanan</Link>
          <Link href="/#about">Tentang</Link>
          <Link href="/#work">Portfolio</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>
        <a className="nl-contact" href={whatsappContact} target="_blank" rel="noreferrer">
          Konsultasi gratis <b>↗</b>
        </a>
      </header>

      <section className="um-hero shell" aria-labelledby="umrah-title">
        <div className="um-hero-copy">
          <p className="um-eyebrow"><Sparkles size={14} aria-hidden="true" /> Personal preparation</p>
          <h1 id="umrah-title">Checklist Umrah <em>10 Hari</em></h1>
          <p>Persiapkan kebutuhan pribadi sebelum berangkat agar tidak ada yang tertinggal.</p>
        </div>

        <article className="um-progress-card" aria-label={`Progress persiapan ${progress}%`}>
          <div className="um-progress-ring" style={ringStyle}>
            <div><strong>{progress}%</strong><span>selesai</span></div>
          </div>
          <div className="um-progress-copy">
            <span>Persiapan kamu</span>
            <h2>{completedItems} dari {totalItems} barang sudah disiapkan</h2>
            <div className="um-progress-track" aria-hidden="true">
              <i style={{ width: `${progress}%` }} />
            </div>
            <p>{progress === 100 ? 'Kamu sudah siap untuk perjalanan umrah.' : 'Perubahan tersimpan otomatis di perangkat ini.'}</p>
          </div>
        </article>
      </section>

      <section className="um-checklist-shell shell" aria-labelledby="checklist-title">
        <div className="um-checklist-intro">
          <div>
            <p className="um-section-label">Checklist pribadi</p>
            <h2 id="checklist-title">Siapkan satu per satu,<br /><em>berangkat lebih tenang.</em></h2>
          </div>
          <div className="um-gender-control" role="group" aria-label="Pilih checklist">
            <button type="button" className={gender === 'male' ? 'active' : ''} onClick={() => setGender('male')} aria-pressed={gender === 'male'}>
              Pria
            </button>
            <button type="button" className={gender === 'female' ? 'active' : ''} onClick={() => setGender('female')} aria-pressed={gender === 'female'}>
              Wanita
            </button>
          </div>
        </div>

        <div className="um-categories">
          {categories.map((category, categoryIndex) => {
            const categoryCompleted = category.items.filter((entry) =>
              checkedSet.has(getItemId(gender, category.id, entry.id)),
            ).length;
            const isComplete = category.items.length > 0 && categoryCompleted === category.items.length;
            const removedCount = removedItems[gender].filter((id) => id.startsWith(`${gender}-${category.id}-`)).length;
            const draftKey = `${gender}-${category.id}`;

            return (
              <details
                className="um-category"
                key={`${gender}-${category.id}`}
                open={openCategories[gender].includes(category.id)}
              >
                <summary
                  aria-expanded={openCategories[gender].includes(category.id)}
                  onClick={(event) => {
                    event.preventDefault();
                    toggleCategory(category.id, !openCategories[gender].includes(category.id));
                  }}
                >
                  <span className="um-category-icon">{isComplete ? <Check size={20} /> : String(categoryIndex + 1).padStart(2, '0')}</span>
                  <span className="um-category-title">
                    <strong>{category.title}</strong>
                    <small>{category.description}</small>
                  </span>
                  <span className={`um-category-count${isComplete ? ' complete' : ''}`}>
                    {isComplete ? <><Check size={14} /> Selesai</> : `${categoryCompleted} / ${category.items.length} selesai`}
                  </span>
                  <ChevronDown className="um-chevron" size={21} aria-hidden="true" />
                </summary>
                <div className="um-category-content">
                  {category.items.map((entry) => {
                    const id = getItemId(gender, category.id, entry.id);
                    const checked = checkedSet.has(id);
                    return (
                      <div className={`um-item${checked ? ' checked' : ''}`} key={id}>
                        <label className="um-item-check">
                          <input type="checkbox" checked={checked} onChange={() => toggleItem(id)} />
                          <span className="um-checkbox" aria-hidden="true"><Check size={16} /></span>
                          <span className="um-item-name">{entry.name}</span>
                        </label>
                        {entry.quantity && <span className="um-quantity">{entry.quantity}</span>}
                        <button
                          className="um-item-delete"
                          type="button"
                          onClick={() => removeItem(category.id, entry)}
                          aria-label={`Hapus ${entry.name}`}
                          title={`Hapus ${entry.name}`}
                        >
                          <Trash2 size={16} aria-hidden="true" />
                        </button>
                      </div>
                    );
                  })}
                  {category.items.length === 0 && (
                    <p className="um-category-empty">Belum ada item di kategori ini.</p>
                  )}
                  <form className="um-add-item" onSubmit={(event) => addItem(event, category.id)}>
                    <input
                      value={itemDrafts[draftKey] ?? ''}
                      onChange={(event) => setItemDrafts((current) => ({ ...current, [draftKey]: event.target.value }))}
                      placeholder="Tambah item baru…"
                      aria-label={`Tambah item ke kategori ${category.title}`}
                    />
                    <button type="submit"><Plus size={17} aria-hidden="true" /> Tambah</button>
                  </form>
                  {removedCount > 0 && (
                    <button className="um-restore-items" type="button" onClick={() => restoreCategoryItems(category.id)}>
                      <RotateCcw size={14} aria-hidden="true" /> Pulihkan {removedCount} item bawaan
                    </button>
                  )}
                </div>
              </details>
            );
          })}
        </div>

        <aside className="um-note">
          <Sparkles size={18} aria-hidden="true" />
          <p>Jumlah pakaian dapat disesuaikan dengan kebutuhan pribadi dan fasilitas laundry. Untuk perlengkapan ihram dan penggunaan produk tertentu selama ihram, ikuti arahan pembimbing/travel.</p>
        </aside>

        <section className={`um-summary${progress === 100 ? ' complete' : ''}`} aria-live="polite">
          <div className="um-summary-mark">{progress === 100 ? <Check size={28} /> : <span>{progress}%</span>}</div>
          <div>
            <p>{progress === 100 ? 'Semua checklist sudah selesai.' : `${completedItems} / ${totalItems} selesai`}</p>
            <span>{progress === 100 ? 'Kamu sudah siap untuk perjalanan umrah.' : 'Lanjutkan persiapan sesuai kebutuhanmu.'}</span>
          </div>
        </section>

        <div className="um-actions" aria-label="Aksi checklist">
          <div className="um-actions-progress"><strong>{progress}%</strong><span>selesai</span></div>
          <button className="um-button um-button-reset" type="button" onClick={() => dialogRef.current?.showModal()}>
            <RotateCcw size={18} /> <span>Reset</span>
          </button>
          <button className="um-button um-button-copy" type="button" onClick={copyChecklist}>
            <Clipboard size={18} /> <span>Salin Checklist</span>
          </button>
          <button className="um-button um-button-share" type="button" onClick={shareChecklist}>
            <Share2 size={18} /> <span>Share ke WhatsApp</span>
          </button>
        </div>
      </section>

      <footer className="nl-footer shell um-footer">
        <div className="nl-footer-brand">
          <Link className="nl-logo" href="/">
            <Image src="/naltech-logo.webp" alt="Logo Naltech Studio" width={256} height={259} />
            NALTECH
          </Link>
          <p>Web design & development studio untuk bisnis yang ingin tumbuh lebih percaya diri.</p>
          <span><i /> Tersedia untuk project baru</span>
        </div>
        <nav className="nl-footer-nav" aria-label="Navigasi footer">
          <small>Jelajahi</small>
          <Link href="/#services">Layanan</Link>
          <Link href="/#about">Tentang</Link>
          <Link href="/#work">Portfolio</Link>
          <Link href="/#process">Proses</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>
        <div className="um-footer-contact">
          <small>Mari terhubung</small>
          <strong>Punya rencana website?</strong>
          <p>Ceritakan kebutuhan bisnis Anda dan mulai project bersama Naltech.</p>
          <a href={whatsappContact} target="_blank" rel="noreferrer">Hubungi via WhatsApp <span>↗</span></a>
        </div>
        <small>© 2026 Naltech Studio. All rights reserved. <span>Made with intention in Jakarta.</span></small>
      </footer>

      <dialog className="um-dialog" ref={dialogRef} onCancel={() => dialogRef.current?.close()}>
        <button className="um-dialog-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Tutup dialog">
          <X size={20} />
        </button>
        <span className="um-dialog-icon"><RotateCcw size={23} /></span>
        <h2>Reset checklist?</h2>
        <p>Semua progress checklist akan dikembalikan ke kondisi awal.</p>
        <div>
          <button type="button" onClick={() => dialogRef.current?.close()}>Batal</button>
          <button type="button" onClick={resetChecklist}>Reset</button>
        </div>
      </dialog>

      <div className={`um-toast${toast ? ' visible' : ''}`} role="status" aria-live="polite">
        <Check size={17} aria-hidden="true" /> {toast}
      </div>
    </main>
  );
}
