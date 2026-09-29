import type { Metadata } from 'next';
import UmrahChecklistClient from './UmrahChecklistClient';
import './umrah-checklist.css';

export const metadata: Metadata = {
  title: 'Checklist Umrah 10 Hari | Persiapan Pribadi',
  description:
    'Checklist lengkap persiapan pribadi umrah 10 hari untuk pria dan wanita, mulai dari pakaian, perlengkapan ihram, obat, toiletries, hingga elektronik.',
  alternates: {
    canonical: '/umrah-checklist',
  },
  openGraph: {
    title: 'Checklist Umrah 10 Hari | Persiapan Pribadi',
    description:
      'Checklist praktis persiapan pribadi umrah 10 hari untuk pria dan wanita yang dapat disimpan dan dibagikan.',
    url: '/umrah-checklist',
    type: 'website',
  },
};

export default function UmrahChecklistPage() {
  return <UmrahChecklistClient />;
}
