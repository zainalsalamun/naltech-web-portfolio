# Naltech Portfolio

Website portfolio Naltech untuk menampilkan beberapa contoh landing page kepada calon klien dalam satu codebase. Setiap contoh dapat memiliki identitas visual dan konten berbeda, tetapi tetap memakai struktur serta komponen yang dapat digunakan kembali.

## Teknologi

- Next.js 16 dan React 19
- TypeScript
- Tailwind CSS 4
- Vinext dan OpenAI Sites

## Menjalankan project

Project membutuhkan Node.js versi 22.13 atau lebih baru. Jika menggunakan `nvm`, jalankan perintah berikut dari folder project:

```bash
nvm install
nvm use
npm install
npm run dev
```

Buka `http://localhost:3000` pada browser.

Perintah lain yang tersedia:

```bash
npm run build
npm run start
npm run lint
```

## Halaman yang tersedia

- `/` — landing page dan katalog utama Naltech
- `/demo/senja-coffee` — contoh website coffee shop
- `/demo/ruang-arsitek` — contoh website studio arsitektur
- `/demo/lumiere-skincare` — contoh website skincare
- `/demo/naltech-pay` — contoh website fintech
- `/demo/nalaride` — contoh website rental kendaraan
- `/demo/karsa-coffee` — contoh website specialty coffee shop

## Dokumentasi desain

- [`docs/SENJA-COFFEE-DESIGN-GUIDE.md`](docs/SENJA-COFFEE-DESIGN-GUIDE.md) — konsep, palet warna, tipografi, hierarki teks, komposisi layout, fotografi, animasi, dan daftar file Senja Coffee.

## Menambahkan contoh website

Konfigurasi contoh berada di `app/demo/[slug]/page.tsx`. Tambahkan data baru pada object `demos`, lalu tambahkan kartu yang sesuai pada array `projects` di `app/page.tsx`.

Gunakan slug yang pendek dan mudah dibaca, misalnya `klinik-dental` atau `hotel-boutique`. URL demo kemudian tersedia dalam format:

```text
/demo/nama-slug
```

Styling bersama dan variasi tema berada di `app/globals.css`. Jika jumlah contoh bertambah banyak, konfigurasi demo sebaiknya dipindahkan ke satu file data terpisah agar kartu katalog dan halaman demo memakai sumber data yang sama.

## Environment variables

Project ini belum membutuhkan environment variable. Jika nanti diperlukan, simpan nilai lokal di `.env.local` dan buat `.env.example` sebagai dokumentasi nama variabel tanpa memasukkan nilai rahasia.

Jangan pernah menaruh API key, token, password, atau credential asli di `.env.example`, source code, maupun dokumentasi.

## File yang tidak boleh masuk Git

`.gitignore` sudah dikonfigurasi untuk mengabaikan:

- Dependensi: `node_modules/`
- Hasil build: `.next/`, `.vinext/`, `dist/`, dan `out/`
- Data lokal deployment: `.wrangler/`, `.vercel/`, `outputs/`, dan `work/`
- Rahasia lokal: `.env*` dan `.dev.vars*`
- Cache dan log: `.cache/`, `.turbo/`, `.npm/`, `.pnpm-store/`, dan `*.log`
- Laporan test: `coverage/`, `playwright-report/`, dan `test-results/`
- File editor atau OS lokal seperti `.idea/`, sebagian `.vscode/`, dan `.DS_Store`

File `.env.example` dan `.dev.vars.example` boleh di-commit selama hanya berisi placeholder. File `.openai/hosting.json` juga tetap di-commit karena menyimpan identitas project hosting dan tidak berisi credential rahasia.

Sebelum melakukan commit, selalu periksa:

```bash
git status
git diff --staged
```

## Deployment

Build produksi dapat diperiksa dengan:

```bash
npm run build
```

Website saat ini dipublikasikan melalui OpenAI Sites. Jangan mengubah atau menghapus `.openai/hosting.json` karena file tersebut menghubungkan source lokal dengan project hosting Naltech.

## Struktur utama

```text
app/
├── demo/[slug]/page.tsx       # Data dan halaman demo generik
├── demo/senja-coffee/         # Halaman dan styling khusus Senja Coffee
├── demo/karsa-coffee/         # Halaman dan styling khusus Karsa Coffee
├── demo/nalaride/             # Halaman khusus rental kendaraan
├── demo/naltech-pay/          # Halaman khusus fintech
├── globals.css           # Styling katalog dan seluruh tema demo
├── layout.tsx            # Metadata serta layout global
└── page.tsx              # Landing page dan katalog Naltech
docs/
└── SENJA-COFFEE-DESIGN-GUIDE.md # Dokumentasi visual Senja Coffee
public/
├── naltech-logo.png      # Logo utama yang juga digunakan sebagai favicon
├── senja/                # Foto yang digunakan Senja Coffee
└── og.png                # Gambar social preview
```

## Lisensi dan penggunaan

Project ini merupakan aset internal Naltech. Jangan menyalin, mendistribusikan, atau menggunakan source dan asetnya di luar kebutuhan Naltech tanpa izin.
