# Naltech Main Website — Design Guide

Dokumen ini menjelaskan konsep visual, warna, tipografi, komposisi, komponen, dan struktur yang digunakan pada landing page utama **Naltech**.

Website:

- Lokal: `http://localhost:3000`
- Online: `https://naltech-portfolio.embulpillow.chatgpt.site`

## Konsep utama

Landing page Naltech menggunakan gaya **Modern Digital Studio Editorial**. Pendekatan ini menggabungkan tampilan studio kreatif, komunikasi bisnis yang jelas, dan elemen visual produk digital.

Karakter brand yang dibangun:

- Modern dan relevan dengan bisnis digital.
- Profesional tanpa terasa kaku.
- Kreatif, optimistis, dan mudah didekati.
- Berorientasi pada hasil bisnis, bukan hanya estetika.
- Cocok menjadi katalog berbagai contoh website dengan identitas yang berbeda.

Visualnya menggunakan layout editorial, headline besar, mockup browser, kartu modular, warna aksen cerah, dan banyak ruang kosong agar informasi mudah dipindai.

## Tujuan komunikasi

Halaman utama memiliki tiga tujuan utama:

1. Menjelaskan bahwa Naltech menyediakan jasa web design dan development.
2. Menunjukkan kualitas melalui katalog contoh landing page.
3. Mengarahkan calon klien untuk memulai konsultasi atau project.

Pesan utama yang digunakan adalah:

> Website keren. Bisnis makin jalan.

Kalimat ini menggabungkan manfaat emosional berupa tampilan yang menarik dengan manfaat bisnis berupa pertumbuhan.

## Palet warna

| Peran | Warna | Hex | Penggunaan |
| --- | --- | --- | --- |
| Background utama | Warm off-white | `#F8F5EF` | Hero, portfolio, hasil, FAQ, dan footer |
| Teks utama | Dark navy | `#17182A` | Headline, navigasi, process section, dan CTA |
| Aksen utama | Electric blue | `#2657FF` | Kata penting, tombol, link, angka, dan ikon |
| Background sekunder | Pale blue | `#DCE6FF` | Services section dan CTA penutup |
| Aksen hangat | Amber | `#FFB52D` | Testimonial dan penyeimbang warna biru |
| Aksen hijau | Mint green | `#87DBBB` | Variasi ikon proses |
| Aksen merah muda | Soft pink | `#EF8DA0` | Variasi ikon dan elemen dekoratif |
| Garis pembatas | Warm gray | `#D5D1C8` | Divider, border kartu, FAQ, dan footer |

Komposisi warna yang disarankan:

- 55% warm off-white.
- 20% dark navy.
- 15% pale blue dan electric blue.
- 10% amber, mint, serta pink sebagai aksen.

Warna cerah digunakan untuk membangun kesan optimistis sekaligus mengarahkan perhatian ke CTA dan informasi penting.

## Tipografi

### Font utama

Konten utama secara visual menggunakan font sans-serif sistem:

```css
font-family: Arial, Helvetica, sans-serif;
```

Font ini digunakan untuk:

- Headline utama.
- Navigasi.
- Paragraf dan informasi layanan.
- Tombol dan CTA.
- Data performa.
- Kartu project dan footer.

Karakter sans-serif membuat website terasa modern, tegas, dan mudah dibaca.

Project juga memuat **Geist Sans** dan **Geist Mono** melalui layout global. Variabel font tersebut tersedia apabila nanti diperlukan untuk komponen atau pengembangan berikutnya.

### Font aksen

Font serif menggunakan:

```css
font-family: Georgia, serif;
```

Georgia dipakai untuk kata-kata yang ingin terasa lebih ekspresif atau manusiawi, contohnya:

- *meyakinkan*
- *beda cerita*
- *berdampak*
- *ditanyakan*

Kombinasi sans-serif tebal dan serif reguler menciptakan gaya editorial modern.

## Hierarki teks

### Hero headline

Headline hero memiliki karakter:

- Ukuran responsif sekitar `62px–98px`.
- Line-height `0.91`.
- Letter spacing `-0.07em`.
- Font weight sekitar `850`.
- Kata manfaat bisnis diberi warna electric blue.

### Section headline

Judul section menggunakan ukuran sekitar `48px–88px`, line-height rapat, dan letter spacing negatif. Beberapa kata menggunakan Georgia untuk menghasilkan kontras.

### Eyebrow

Eyebrow menggunakan huruf uppercase kecil dengan letter spacing lebar, misalnya:

```text
WEB DESIGN & DEVELOPMENT STUDIO
```

Eyebrow berfungsi sebagai kategori, konteks section, atau penanda nomor.

### Body copy

Paragraf utama menggunakan ukuran sekitar `13px–17px` dengan line-height `1.6–1.7`. Lebar paragraf dibatasi agar lebih nyaman dibaca.

### Microcopy

Microcopy menggunakan ukuran sekitar `8px–12px`. Digunakan untuk:

- Jenis project.
- Hasil atau metrik.
- Label layanan.
- Keterangan proses.
- Copyright.

## Sistem layout

Container utama menggunakan kelas `.shell` dengan lebar maksimal sekitar `1280px` dan margin otomatis.

| Bagian | Komposisi |
| --- | --- |
| Header | Logo, navigasi tengah, dan CTA di kanan |
| Hero | Sekitar 45% copy dan 55% visual mockup |
| Trust indicators | Baris lima manfaat utama |
| Services | Empat kartu dalam satu baris |
| Portfolio | Grid 12 kolom dengan dua kartu per baris |
| Process | Empat tahap dalam satu baris |
| Results | Copy di kiri dan grid metrik 2×2 di kanan |
| Brand statement | Pernyataan prinsip kerja yang besar dan terpusat |
| FAQ | Intro di kiri dan accordion di kanan |
| Final CTA | Copy besar dengan elemen orb di kanan |
| Footer | Empat kelompok informasi |

Layout berubah menjadi dua kolom atau satu kolom pada tablet dan mobile.

## Hero composition

Hero terdiri dari dua bagian:

### Copy area

- Eyebrow sebagai konteks layanan.
- Headline besar sebagai pesan utama.
- Paragraf yang menjelaskan manfaat.
- Primary dan secondary CTA.
- Trust statement untuk mengurangi keraguan calon klien.

### Visual area

Visual hero dibuat menggunakan CSS, bukan screenshot biasa. Komponennya meliputi:

- Mockup browser dengan sedikit rotasi.
- Radial glow biru di belakang browser.
- Floating card untuk prinsip mobile-first.
- Floating card untuk struktur SEO-ready.
- Badge support setelah website diluncurkan.

Komposisi ini menunjukkan fokus Naltech pada kualitas pengalaman, struktur website, dan pendampingan tanpa memakai klaim performa yang belum diverifikasi.

## Sistem kartu

### Service card

Kartu layanan menggunakan:

- Background putih transparan.
- Border tipis berwarna biru.
- Border radius sekitar `22px`.
- Ikon berwarna electric blue.
- Animasi naik saat hover.
- Link yang dipisahkan divider pada bagian bawah.

### Portfolio card

Kartu portfolio memiliki:

- Area visual setinggi sekitar `430px`.
- Warna background yang mengikuti identitas masing-masing demo.
- Browser mockup yang berotasi ringan.
- Jenis project, nama, deskripsi konsep, dan ikon panah.
- Gerakan mockup saat hover.

Setiap kartu boleh memiliki identitas berbeda, tetapi struktur informasinya tetap konsisten.

### Process card

Tahapan proses tidak menggunakan kartu terpisah. Semuanya disusun dalam satu grid dengan divider vertikal agar terasa seperti timeline kerja.

## Bentuk dan elemen grafis

Elemen visual utama:

- Lingkaran dan orb dengan radial gradient.
- Browser mockup.
- Floating stat cards.
- Tombol kapsul.
- Ikon dalam rounded square.
- Divider tipis.
- Penomoran section.
- Kombinasi warna pastel dan warna kontras.

Orb pada CTA penutup juga menggunakan huruf `N` untuk memperkuat identitas Naltech tanpa menampilkan logo penuh berulang kali.

## Fotografi dan mockup

Website utama tidak bergantung pada satu gaya fotografi karena fungsinya sebagai katalog multi-industri. Visual utama menggunakan mockup abstrak agar tidak mengunci Naltech pada satu jenis bisnis.

Pada section portfolio, setiap demo membawa gaya gambar dan paletnya sendiri. Hal ini menunjukkan fleksibilitas Naltech dalam mengembangkan identitas yang berbeda dari satu codebase.

## Animasi dan interaksi

Interaksi dibuat ringan dan fungsional:

- Smooth scrolling untuk navigasi antar-section.
- Kartu layanan bergerak ke atas ketika hover.
- Browser mockup portfolio bergerak dan kembali lurus ketika hover.
- Tombol FAQ berputar ketika accordion dibuka.
- Link navigasi berubah menjadi biru ketika hover.
- Tombol CTA menggunakan perubahan warna atau kontras yang jelas.

Animasi dipakai untuk memberikan respons, bukan sebagai dekorasi yang berlebihan.

## Responsiveness

Pada tablet dan mobile:

- Navigasi utama disederhanakan.
- Hero berubah menjadi satu kolom.
- Mockup browser dipindahkan ke bawah copy.
- Service cards berubah dari empat menjadi dua lalu satu kolom.
- Portfolio berubah menjadi carousel horizontal yang dapat digeser dan memakai scroll snap.
- Process berubah dari empat menjadi dua lalu satu kolom.
- Results dan FAQ berubah menjadi satu kolom.
- Final CTA mempertahankan orb tetapi diposisikan sebagai elemen background.
- Footer disusun menjadi dua atau satu kolom.

## Kepercayaan dan informasi kontak

Website utama hanya memakai pernyataan yang dapat dipertanggungjawabkan. Contoh portfolio ditandai sebagai concept project dan tidak memakai angka peningkatan bisnis atau testimonial klien yang belum diverifikasi.

Kontak utama diarahkan ke:

- WhatsApp: `081573550017`
- Email: `naltechai@gmail.com`
- Instagram: `@naltech.ai`
- TikTok: `@naltech.ai`
- Facebook: halaman sosial Naltech

Section **Tentang Naltech** menjelaskan profil studio dan prinsip kerja tanpa mencantumkan identitas founder yang belum tersedia.

## SEO dasar

Website menyediakan metadata judul dan deskripsi, canonical URL, Open Graph, Twitter Card, aturan robots, sitemap untuk seluruh halaman demo, serta structured data `ProfessionalService`. Konfigurasi ini menjadi fondasi agar website lebih mudah dipahami mesin pencari dan tampil konsisten ketika dibagikan.

## Struktur konten

Urutan landing page utama:

1. Announcement bar.
2. Header dan navigasi.
3. Hero serta CTA.
4. Trust indicators.
5. Layanan Naltech.
6. Portfolio pilihan.
7. Proses kerja.
8. Hasil dan metrik.
9. Testimonial.
10. FAQ.
11. Final CTA.
12. Footer, media sosial, dan informasi kontak.

## File terkait

| File | Fungsi |
| --- | --- |
| `app/page.tsx` | Struktur, copy, katalog project, layanan, proses, FAQ, dan footer |
| `app/globals.css` | Styling global dan seluruh komponen landing page utama |
| `app/layout.tsx` | Metadata, favicon, social preview, Geist Sans, dan Geist Mono |
| `public/naltech-logo.png` | Logo Naltech serta favicon |
| `public/og.png` | Social preview website utama |
| `README.md` | Dokumentasi setup dan struktur project |

## Naming convention

Komponen landing page utama menggunakan prefix class `.nl-`, contohnya:

```text
.nl-header
.nl-hero
.nl-services
.nl-projects
.nl-process
.nl-results
.nl-faq
.nl-footer
```

Prefix ini memisahkan styling website utama dari styling setiap halaman demo.

## Formula desain

Formula visual Naltech adalah:

> Bold sans-serif typography + editorial serif accent + electric blue + modular cards + product mockups + conversion-focused copy.

Formula ini cocok untuk digital studio, software house, creative agency, konsultan teknologi, maupun portfolio bisnis berbasis layanan.
