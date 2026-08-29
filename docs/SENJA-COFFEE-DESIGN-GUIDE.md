# Senja Coffee — Design Guide

Dokumen ini menjelaskan arah visual, komposisi, tipografi, warna, tata letak, gambar, dan animasi yang digunakan pada landing page **Senja Coffee**.

Demo:

- Lokal: `http://localhost:3000/demo/senja-coffee`
- Online: `https://naltech-portfolio.embulpillow.chatgpt.site/demo/senja-coffee`

## Konsep utama

Senja Coffee menggunakan gaya **Tropical Editorial Coffee Shop**. Konsep ini menggabungkan suasana coffee shop tropis Indonesia dengan komposisi editorial seperti majalah modern.

Karakter yang ingin dibangun:

- Hangat, santai, dan ramah.
- Premium tanpa terasa terlalu formal.
- Dekat dengan kopi lokal dan komunitas kreatif.
- Memiliki suasana dari pagi yang pelan sampai matahari terbenam.
- Terlihat modern tanpa menghilangkan karakter lokal.

Senja Coffee dibuat lebih kasual, tropis, dan ekspresif. Hal ini membedakannya dari Karsa Coffee yang memiliki karakter lebih elegan, tenang, dan refined.

## Palet warna

| Peran | Warna | Hex | Penggunaan |
| --- | --- | --- | --- |
| Background utama | Cream | `#F4EAD7` | Hero, menu, origin, dan footer |
| Warna teks | Cokelat gelap | `#30231C` | Teks utama, navigasi, serta elemen kontras |
| Warna aksen | Oranye senja | `#D25E36` | CTA, headline, ticker, ikon, dan penanda penting |
| Warna pendukung | Hijau daun | `#53634D` | Cerita brand dan kartu informasi kunjungan |
| Warna section | Beige | `#DDC8A8` | Agenda komunitas dan variasi kartu |

Komposisi warna yang disarankan:

- 60% cream atau warna netral hangat.
- 20% cokelat gelap dan hijau.
- 20% oranye senja atau beige.

Oranye digunakan secara selektif agar tetap efektif sebagai penarik perhatian.

## Tipografi

### Sans-serif

Font utama menggunakan fallback berikut:

```css
font-family: Arial, Helvetica, sans-serif;
```

Digunakan untuk:

- Navigasi.
- Paragraf.
- Informasi menu dan harga.
- Tombol dan CTA.
- Nomor section.
- Lokasi, jadwal, dan microcopy.

Karakter sans-serif memberikan tampilan modern, bersih, dan mudah dibaca.

### Serif italic

Font aksen menggunakan:

```css
font-family: Georgia, serif;
font-style: italic;
```

Digunakan pada kata-kata emosional seperti:

- *tinggal*
- *harimu*
- *kota*
- *asal yang jelas*

Serif italic memberikan kesan personal, hangat, serta editorial.

## Hierarki teks

### Eyebrow

Teks kecil uppercase dengan letter spacing lebar, misalnya:

```text
COFFEE · EATERY · COMMUNITY
```

Ukuran sekitar `7px–9px` pada desktop. Eyebrow digunakan untuk kategori, nomor section, waktu acara, dan informasi pendek.

### Display headline

Headline dibuat sangat besar dengan karakter berikut:

- Ukuran responsif sekitar `50px–116px`.
- Line-height rapat sekitar `0.82–0.92`.
- Letter spacing negatif sekitar `-0.07em`.
- Beberapa kata penting menggunakan Georgia italic dan warna oranye.

### Body text

Paragraf menggunakan ukuran sekitar `10px–13px` pada desktop dengan line-height `1.6–1.75`. Lebar paragraf dibatasi agar tetap nyaman dibaca.

### CTA

CTA menggunakan teks pendek, tebal, dan langsung, contohnya:

- Lihat menu
- Reservasi
- Buka di peta
- Info acara

## Sistem layout

Layout utama menggunakan grid dua kolom dan tiga kolom.

| Bagian | Komposisi |
| --- | --- |
| Hero | Sekitar 55% teks dan 45% gambar |
| Menu | Satu gambar unggulan dan grid empat kartu |
| Cerita brand | 50% elemen grafis dan 50% teks |
| Origin kopi | 50% foto dan 50% daftar origin |
| Agenda komunitas | Tiga kolom dengan tinggi sejajar |
| Galeri | Satu foto besar dan dua foto pendamping |
| Informasi kunjungan | Teks pengantar dan kartu informasi besar |

Container utama menggunakan lebar maksimal sekitar `1240px` dengan margin samping responsif.

## Bentuk visual

Elemen bentuk yang digunakan:

- Foto berbentuk lengkungan atau arch.
- Lingkaran besar sebagai simbol matahari senja.
- Garis tipis sebagai pemisah informasi.
- Tombol berbentuk kapsul.
- Kartu geometris dengan variasi warna beige.
- Penomoran section seperti `01`, `02`, dan `03`.
- Ticker horizontal untuk memisahkan hero dan konten.

Kombinasi sisi kotak dan lengkungan membuat desain terasa modern tetapi tetap organik.

## Gaya fotografi

Foto yang dipilih memiliki karakter:

- Cahaya alami dan hangat.
- Interior tropis dengan tanaman, rotan, dan kayu.
- Close-up proses penyeduhan.
- Kopi dan makanan dalam suasana santai.
- Warna golden hour atau matahari terbenam.

Foto digunakan untuk membangun cerita perjalanan pelanggan: masuk ke kedai, memilih menu, memahami proses kopi, mengikuti komunitas, lalu berkunjung.

## Animasi dan interaksi

Animasi dibuat lembut agar sesuai dengan konsep slow living:

- Foto hero melakukan zoom perlahan.
- Foto galeri membesar sedikit ketika diarahkan kursor.
- Kartu menu bergerak naik secara halus.
- Navigasi menggunakan smooth scrolling dari stylesheet global.
- Tombol dan link memiliki respons visual sederhana.

Animasi tidak dibuat terlalu cepat atau ramai agar pengalaman tetap tenang.

## Struktur konten

Urutan konten Senja Coffee:

1. Announcement dan navigasi.
2. Hero serta jam buka.
3. Ticker identitas brand.
4. Menu unggulan.
5. Cerita dan filosofi kedai.
6. Origin biji kopi.
7. Agenda komunitas.
8. Galeri suasana.
9. Testimoni pelanggan.
10. Lokasi, jam buka, kontak, dan reservasi.
11. Footer serta keterangan concept project.

## File terkait

| File | Fungsi |
| --- | --- |
| `app/demo/senja-coffee/page.tsx` | Struktur halaman, konten, dan metadata Senja Coffee |
| `app/demo/senja-coffee/senja.css` | Seluruh styling khusus Senja Coffee |
| `public/senja/hero.jpg` | Foto utama hero dan galeri |
| `public/senja/sunset-drink.jpg` | Foto signature drink |
| `public/senja/brew.jpg` | Foto proses seduh |
| `public/senja/pastry.jpg` | Foto kopi dan pastry |
| `app/page.tsx` | Kartu Senja Coffee pada katalog utama Naltech |

## Formula desain

Formula utama yang digunakan adalah:

> Editorial typography + warna tropis + foto hangat + bentuk matahari + layout asimetris + interaksi lembut.

Formula ini cocok digunakan untuk coffee shop, artisan café, eatery, bakery, creative space, atau bisnis hospitality yang ingin terlihat hangat, lokal, dan profesional.
