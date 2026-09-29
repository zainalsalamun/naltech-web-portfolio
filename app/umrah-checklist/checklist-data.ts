export type Gender = 'male' | 'female';

export interface ChecklistItem {
  id: string;
  name: string;
  quantity?: string;
  note?: string;
}

export interface ChecklistCategory {
  id: string;
  title: string;
  description: string;
  items: ChecklistItem[];
}

const item = (id: string, name: string, quantity?: string): ChecklistItem => ({ id, name, quantity });

const sharedHealth = [
  item('obat-pribadi', 'Obat pribadi / rutin'),
  item('obat-demam', 'Obat demam / sakit kepala'),
  item('obat-flu', 'Obat flu / batuk'),
  item('obat-maag', 'Obat maag'),
  item('obat-diare', 'Obat diare'),
  item('oralit', 'Oralit'),
  item('obat-alergi', 'Obat alergi'),
  item('obat-mual', 'Obat mual'),
  item('plester-luka', 'Plester luka'),
  item('antiseptik', 'Antiseptik'),
  item('salep-lecet', 'Salep lecet'),
  item('minyak-angin', 'Minyak angin / balsem'),
  item('masker', 'Masker'),
  item('hand-sanitizer', 'Hand sanitizer'),
];

const sharedToiletries = [
  item('sikat-gigi', 'Sikat gigi'),
  item('pasta-gigi', 'Pasta gigi'),
  item('sabun', 'Sabun'),
  item('shampoo', 'Shampoo'),
  item('face-wash', 'Face wash'),
  item('sunscreen', 'Sunscreen'),
  item('pelembap', 'Pelembap'),
  item('lip-balm', 'Lip balm'),
  item('deodorant', 'Deodorant'),
  item('sisir', 'Sisir'),
  item('gunting-kuku', 'Gunting kuku'),
  item('tissue-kering', 'Tissue kering'),
  item('tissue-basah', 'Tissue basah'),
];

const sharedFootwear = [
  item('sepatu', 'Sepatu / sneakers nyaman', '1 pasang'),
  item('sandal-nyaman', 'Sandal nyaman', '1 pasang'),
  item('sandal-hotel', 'Sandal hotel', '1 pasang'),
];

const sharedElectronics = [
  item('hp', 'HP'),
  item('charger', 'Charger'),
  item('kabel-charger', 'Kabel charger'),
  item('power-bank', 'Power bank'),
  item('earphone', 'Earphone'),
  item('travel-adapter', 'Travel adapter bila diperlukan'),
];

const sharedOther = [
  item('tas-kecil', 'Tas kecil / daypack'),
  item('tas-sandal', 'Tas sandal'),
  item('laundry-bag', 'Laundry bag'),
  item('ziplock', 'Ziplock'),
  item('kantong-plastik', 'Kantong plastik'),
  item('botol-minum', 'Botol minum'),
  item('kacamata-hitam', 'Kacamata hitam'),
  item('pulpen', 'Pulpen'),
];

export const checklistData: Record<Gender, ChecklistCategory[]> = {
  male: [
    {
      id: 'pakaian',
      title: 'Pakaian',
      description: 'Pakaian harian yang nyaman untuk perjalanan 10 hari.',
      items: [
        item('baju-muslim', 'Baju muslim / gamis / terusan', '4–5 pcs'),
        item('kaos', 'Kaos', '3–4 pcs'),
        item('celana-panjang', 'Celana panjang', '2–3 pcs'),
        item('sarung', 'Sarung', '1–2 pcs'),
        item('baju-tidur', 'Baju tidur', '2 set'),
        item('celana-dalam', 'Celana dalam', '10–12 pcs'),
        item('kaos-kaki', 'Kaos kaki', '6–8 pasang'),
        item('jaket', 'Jaket / sweater', '1 pcs'),
      ],
    },
    {
      id: 'ihram',
      title: 'Perlengkapan Ihram',
      description: 'Perlengkapan utama untuk rangkaian ibadah umrah.',
      items: [
        item('kain-ihram', 'Kain ihram', '2 set'),
        item('sabuk-ihram', 'Sabuk ihram', '1'),
        item('peniti', 'Peniti', 'Secukupnya'),
        item('sandal-ihram', 'Sandal ihram', '1 pasang'),
        item('kantong-ihram', 'Kantong ihram / sandal', '1'),
      ],
    },
    { id: 'alas-kaki', title: 'Alas Kaki', description: 'Pilihan alas kaki untuk aktivitas harian.', items: sharedFootwear },
    { id: 'kesehatan', title: 'Obat & Kesehatan', description: 'Kebutuhan kesehatan dasar dan obat pribadi.', items: sharedHealth },
    { id: 'toiletries', title: 'Toiletries', description: 'Perawatan dan kebersihan pribadi.', items: sharedToiletries },
    {
      id: 'ibadah',
      title: 'Ibadah',
      description: 'Perlengkapan ibadah yang praktis dibawa.',
      items: [
        item('sajadah', 'Sajadah travel'),
        item('quran', "Al-Qur'an / aplikasi Al-Qur'an"),
        item('buku-doa', 'Buku doa / manasik'),
        item('tasbih', 'Tasbih'),
      ],
    },
    { id: 'elektronik', title: 'Elektronik', description: 'Perangkat dan pengisi daya yang diperlukan.', items: sharedElectronics },
    { id: 'lainnya', title: 'Lainnya', description: 'Pelengkap kecil yang berguna selama perjalanan.', items: sharedOther },
  ],
  female: [
    {
      id: 'pakaian',
      title: 'Pakaian',
      description: 'Pakaian harian yang nyaman untuk perjalanan 10 hari.',
      items: [
        item('gamis', 'Gamis / dress panjang', '5–6 pcs'),
        item('atasan', 'Atasan / blouse', '2–3 pcs'),
        item('celana-rok', 'Celana / rok', '2–3 pcs'),
        item('baju-tidur', 'Baju tidur', '2 set'),
        item('pakaian-dalam', 'Pakaian dalam', '10–12 pcs'),
        item('bra', 'Bra', '4–5 pcs'),
        item('kaos-kaki', 'Kaos kaki', '6–8 pasang'),
        item('manset-inner', 'Manset / inner', '3–4 pcs'),
        item('jaket', 'Jaket / cardigan', '1 pcs'),
      ],
    },
    {
      id: 'hijab',
      title: 'Hijab',
      description: 'Hijab dan perlengkapan pendukung untuk aktivitas harian.',
      items: [
        item('hijab', 'Hijab', '5–7 pcs'),
        item('hijab-instan', 'Hijab instan / bergo', '2–3 pcs'),
        item('ciput', 'Ciput / inner', '5–7 pcs'),
        item('peniti', 'Peniti / jarum hijab'),
        item('manset', 'Manset jika diperlukan'),
      ],
    },
    { id: 'alas-kaki', title: 'Alas Kaki', description: 'Pilihan alas kaki untuk aktivitas harian.', items: sharedFootwear },
    { id: 'kesehatan', title: 'Obat & Kesehatan', description: 'Kebutuhan kesehatan dasar dan obat pribadi.', items: sharedHealth },
    { id: 'toiletries', title: 'Toiletries', description: 'Perawatan dan kebersihan pribadi.', items: sharedToiletries },
    {
      id: 'ibadah',
      title: 'Ibadah',
      description: 'Perlengkapan ibadah yang praktis dibawa.',
      items: [
        item('mukena', 'Mukena'),
        item('sajadah', 'Sajadah travel'),
        item('quran', "Al-Qur'an / aplikasi Al-Qur'an"),
        item('buku-doa', 'Buku doa / manasik'),
        item('tasbih', 'Tasbih'),
      ],
    },
    { id: 'elektronik', title: 'Elektronik', description: 'Perangkat dan pengisi daya yang diperlukan.', items: sharedElectronics },
    { id: 'lainnya', title: 'Lainnya', description: 'Pelengkap kecil yang berguna selama perjalanan.', items: sharedOther },
  ],
};

export const getItemId = (gender: Gender, categoryId: string, itemId: string) =>
  `${gender}-${categoryId}-${itemId}`;
