'use client';

import type { FormEvent } from 'react';

export default function BookingForm() {
  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Halo Lumiera, saya ingin membuat permintaan booking.',
      `Nama: ${data.get('name')}`,
      `Kebutuhan: ${data.get('need')}`,
      `Cabang: ${data.get('branch')}`,
      `Jadwal pilihan: ${data.get('schedule')}`,
      '',
      'Saya memahami bahwa form ini bukan diagnosis dan jadwal perlu dikonfirmasi oleh tim klinik.',
    ].join('\n');
    window.open(`https://wa.me/6281573550017?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="la-book-form" onSubmit={submitBooking}>
      <label><span>Nama lengkap</span><input name="name" placeholder="Nama Anda" required /></label>
      <label><span>Kebutuhan utama</span><select name="need" defaultValue=""><option value="" disabled>Pilih kebutuhan</option><option>Konsultasi terlebih dahulu</option><option>Perawatan jerawat</option><option>Hydrating facial</option><option>Brightening treatment</option><option>Anti-aging treatment</option><option>Hair &amp; scalp treatment</option></select></label>
      <label><span>Cabang pilihan</span><select name="branch" defaultValue="Jakarta Selatan"><option>Jakarta Selatan</option><option>Bandung Dago</option><option>Siapa saja yang tersedia</option></select></label>
      <label><span>Jadwal pilihan</span><input name="schedule" type="datetime-local" required /></label>
      <label className="la-consent"><input type="checkbox" required /><span>Saya setuju dihubungi untuk konfirmasi. Informasi ini merupakan data awal dan bukan diagnosis medis.</span></label>
      <button type="submit">Kirim permintaan booking <b>↗</b></button>
    </form>
  );
}
