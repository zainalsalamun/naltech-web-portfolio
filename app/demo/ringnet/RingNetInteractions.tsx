'use client';

import { FormEvent, useMemo, useState } from 'react';

export function PackageFinder() {
  const [people, setPeople] = useState('1-3');
  const [activity, setActivity] = useState('streaming');
  const [gaming, setGaming] = useState('tidak');
  const result = useMemo(() => {
    if (people === '8+' || activity === 'creator') return 'Ring Home 100';
    if (people === '4-7' || gaming === 'ya' || activity === 'meeting') return 'Ring Home 50';
    return 'Ring Home 20';
  }, [people, activity, gaming]);

  return <div className="rn-finder-card"><label><span>Jumlah pengguna</span><select value={people} onChange={e=>setPeople(e.target.value)}><option>1-3</option><option>4-7</option><option>8+</option></select></label><label><span>Aktivitas utama</span><select value={activity} onChange={e=>setActivity(e.target.value)}><option value="streaming">Streaming &amp; belajar</option><option value="meeting">Kerja &amp; meeting</option><option value="creator">Content creator</option></select></label><label><span>Digunakan untuk gaming?</span><select value={gaming} onChange={e=>setGaming(e.target.value)}><option value="tidak">Tidak</option><option value="ya">Ya</option></select></label><div><small>Rekomendasi awal</small><strong>{result}</strong><p>Rekomendasi bukan konfirmasi ketersediaan atau jaminan performa.</p><a href="#coverage">Cek coverage paket ini <b>↗</b></a></div></div>;
}

export function CoverageChecker({ whatsappUrl }: { whatsappUrl: string }) {
  const [state, setState] = useState<'idle'|'review'>('idle');
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState('review');
  };

  return <form className="rn-coverage-form" onSubmit={submit}><div><span>Coverage checker</span><b>Area pemasangan</b></div><label><span>Provinsi</span><input placeholder="Contoh: DI Yogyakarta" required /></label><label><span>Kabupaten / Kota</span><input placeholder="Masukkan kota" required /></label><label><span>Kecamatan / Kelurahan</span><input placeholder="Masukkan area" required /></label><button type="submit">Minta pemeriksaan <b>↗</b></button>{state==='review'&&<div className="rn-coverage-result"><strong>Lokasi perlu dikonfirmasi tim jaringan.</strong><p>Website tidak menyatakan coverage tersedia secara otomatis. Hubungi RingNet dan kirim lokasi yang ingin Anda bagikan.</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Lanjut ke WhatsApp ↗</a></div>}<small>Isian tetap di perangkat ini dan tidak otomatis diteruskan ke WhatsApp.</small></form>;
}
