import type { Metadata } from 'next';
import Link from 'next/link';
import './pixi.css';
import PixiEventCalculatorWidget from './PixiEventCalculatorWidget';
import {
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  Mail,
  Check,
  ChevronRight,
  Star,
  ArrowRight,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';
const whatsappUrl = 'https://wa.me/6285842345332?text=Halo%20Pixi%20Creative%2C%20saya%20ingin%20konsultasi%20mengenai%20penyelenggaraan%20acara%20kami.';
const emailUrl = 'mailto:pixicreative01@gmail.com';
const phoneDisplay = '+62 8584 234 5332';
const instagramUrl = 'https://www.instagram.com/pixicreative.id/';

export const metadata: Metadata = {
  title: 'PIXI CREATIVE — Creating Memorable Experiences, Delivering Exceptional Events',
  description: 'Event Organizer & Travel Planner profesional di Yogyakarta dan seluruh Indonesia. Melayani MICE, gathering kantor, seminar kementerian, outbound, dan perjalanan wisata.',
  alternates: {
    canonical: '/demo/pixi-creative',
  },
  openGraph: {
    title: 'PIXI CREATIVE — Event Organizer & Planner',
    description: 'Kami Tidak Sekadar Merancang Acara, Kami Menciptakan Kenangan Yang Akan Selalu Dikenang.',
    images: [{ url: 'https://sites.google.com/sitesv-images-rt/AMxu72vTgcj-aTkWYUNQ4d9JlhQaLqT6DyGFe1lVDtlI0nmA4VPj22Knu1gVRtpLyAxVrLox8AJFS5CkcsnbAiN0ywglcXUDAa-aqH2He9lj0cAIGT_AeqyV_dNryLu2yK3INxjR-8m1JbtUU6Fr4RsLufXBXBgy31NxTlUxbCDWfyHnZlzchHPJwWLUI7TWkVMKSyLgHKfghUP-HOCHk0Jl8BW3HsB7PWAE0MO4MeaLKOc=w1280', width: 1200, height: 630, alt: 'PIXI CREATIVE' }],
  },
};

const pixiStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pixi Creative',
    alternateName: ['Pixi Creative Event Planner', 'Pixi EO'],
    description: 'Penyedia layanan Event Organizer (EO), MICE, dan Agen Perjalanan Wisata profesional terpercaya di Yogyakarta & seluruh Indonesia.',
    url: `${siteUrl}/demo/pixi-creative`,
    logo: 'https://sites.google.com/sitesv-images-rt/AMxu72vuP_QxcSy9OkRb7yZVRy9oLfpDvsJlR5Zxk01Elid6YgIX7vLgbLIoaBK0JcwvEqAIX5sUJREZNqPrkz9JqEcnCrta80661KL750VWYyi04AQgWfDaHERNzL7sbRxfgMDPY9YgD-2kwahndY5q0DeZTZFALkM9vSIKuwm25YqQmDufp7RA_e04RTNr-70=w16383',
    telephone: '+6285842345332',
    email: 'pixicreative01@gmail.com',
    priceRange: 'Rp5.000.000 - Rp250.000.000+',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Yogyakarta',
      addressCountry: 'ID',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Naltech Studio',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Portfolio',
        item: `${siteUrl}/#work`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Pixi Creative',
        item: `${siteUrl}/demo/pixi-creative`,
      },
    ],
  },
];

const clientLogos = [
  { name: 'Kementerian Perumahan & Kawasan Permukiman', src: 'https://sites.google.com/sitesv-images-rt/AMxu72tNsc_GohSpPwlt1-da0iQKez4h-EsO6hZ1hG5ibdJJCdbEdCejCaybizsaIma_252LAcOXFmfXvn7vWiDRflyQvovl54SiJ-iM_YKQlsNLY5GmVQURPUAwg-bqOvPScv-tZ0Dxa2eHug6rw2YQqVCqSzcwFRt0qgw6SSqr4DTR_UuqScTzRK7DPLyTj1XGTISQJ0sh4poxt9lq2lhG7HWUdtybGqg8KvO0n6xyaoc=w1280' },
  { name: 'Dinas Kesehatan Kota Yogyakarta', src: 'https://sites.google.com/sitesv-images-rt/AMxu72uXP47Oyr-Uag6SFkDROFDnrvo8YhhVdDvURp_iduOeY8L7alDGaivA6p63oH4NE2lc4PuojJTey4voWqJgno1wUN9g-oBebQbztuleKBz4exKVdyn38BHcW708VZ54osAFNBFit_5zpZLYeKTuizqhPX368NQqei9Z2U08UH8iTN5-sLlyusNum9653iQ=w1280' },
  { name: 'Puskesmas Kotagede Yogyakarta', src: 'https://sites.google.com/sitesv-images-rt/AMxu72vkKIFqiygYUxSSxRSVkBPFFUgsjlDW1awabyoCCIAhLdMe9FDS0AzIKAnx5dmEPqANsNecTOM8Bu-73uOHiiuHV5CZ0X68jAwvsfW4CR096gI3WzUdjbj4OIH5GRA0WTX4fBGYJk6kKmA6SMdO-iiDQf5_acl_Bi2n1m9mTz7cJSpO4NZyBTHrcdjeCd2yKrehhKveQAKFFyTNc9pDu8Jqom4YBX0g58KlKCB23RQ=w1280' },
  { name: 'Puskesmas Ngaglik 2 Sleman', src: 'https://sites.google.com/sitesv-images-rt/AMxu72vOIblbxFltJSII_L9FcZSGf9XmJmyAHzZb-JHzLQKGTZ0ko4YQfbcI-0Khtv4cr9KvsB4l-TX-zE9KynW6t5QL6dvycJ_gHOaSBpI0IPXVDGlJjASPOMVtBH3ALRZii0RNbzK3PcS_yBDJLrnC4NNEUEwUmc4GXKJgfdyEnLwAwj25mybNcl9tueC7=w1280' },
  { name: 'Kementerian Hukum dan HAM RI', src: 'https://sites.google.com/sitesv-images-rt/AMxu72tDtWkiT5wA8FtCr8-9u-HC_-ycSUzzYKN8Ob21EPrQebfFd4WtOJSWCM7r6ymEAUvEK7XPRo_4ZGVgxNjNzWsI3IfhYuTpDbZX6frixFKgooaywfLs9d4mf15T4DTHOAzaLx8yNL4HVc4dU44t3STu0mQ5n_RRC45gxIvyn8r7E5f_veL4a6Gpa_27aE7jXOX_22-6ffT1d_-M5zSr4f4cPfdFYWzqC6zoPzT4=w1280' },
  { name: 'Program BSPS Kementerian PUPR', src: 'https://sites.google.com/sitesv-images-rt/AMxu72vlSQsctuW46R8ScksPzniQp6tORJJJfBHX6x-7BXqHvoLMP6fHE3aizU_4YLtKbHxKfm6Mde81bSF3Se8Y0LUgrSfqdrsAoBVMGksn23v8NnXHHhB6NDlMSjhZJC5LVQKPDUAruKxDEwY0dArMWdfhcz2mSlVI3dCkqRRj0pkovNcmKPqZX0K2-GJUu_KQPEDXaz_p3oRcMkV4OdHw2PQealmorx228dNDV-iMK-Q=w1280' },
  { name: 'Instansi & Korporat Mitra', src: 'https://sites.google.com/sitesv-images-rt/AMxu72taua1JOOFCDJWkVBGRD2ao-qk8Su-wQ2YJhUu2h0fAPVzP0TxH1P_wYo_Lt1coGv54sFSB9GAuVoz5TiiF-_7hOIKqCbmurLjCIS28f55XeB1HI7bxIN_O8v7sp3BZjdygaF49jidVOGLQYurEcOAclNOeo3NW21NLD5wJR6Y1K6Uqztn-r-c8a8mnuhK71971nTI0kyw5yB7WSgUaWis8z8Lf8VzCIQOPNrlhPFU=w1280' },
];

const services = [
  {
    id: 'mice',
    title: 'MICE',
    subtitle: 'Meeting, Incentive, Conference & Exhibition',
    image: 'https://sites.google.com/sitesv-images-rt/AMxu72slzUDaD4GcJy3SOvR4plypwdW-LWzq5zokjBUMGOE4TRMOA-mc50eGI8ZkFpy5xL80Z3AMlpARzNhtLPMrvDIldwsSKL8AhX39WSCJ6zJesEE1ORisrfUe5b_iLBMrZxAJaziH8iB8MxlBaF-LZYvZTABBdFk7iSoxr-Lhan9Bn1YHpiCbDIGI_ealinkQFt9fA4znHz5pW6xGAa2fzv2dJT81uSYOX4vsMjD-ckA=w1280',
    desc: 'Solusi profesional untuk meeting, incentive, conference, dan exhibition yang mengutamakan kreativitas, kualitas layanan, dan pengalaman peserta yang berkesan.',
    points: [
      'Rapat kerja, seminar, simposium, & konferensi nasional',
      'Kurasi venue hotel berbintang & convention center',
      'Manajemen registrasi peserta, akomodasi & transportasi VIP',
      'Penyediaan audio visual, backdrop panggung, & LED videotron',
    ],
  },
  {
    id: 'event-organizer',
    title: 'EVENT ORGANIZER',
    subtitle: 'Professional On-Site Event Execution',
    image: 'https://sites.google.com/sitesv-images-rt/AMxu72uvvSnnDp1XvpOBDJqwvgeUeUd0owRbmZD9fjKsjJwgqNoCdTVcZPhn8n3_ZQt3VwO7PDV4w53yspyQV3-32CNVYQN9-WMR5uRaOwRBLeVi9VV1tE_uHM369DDnADvxvviH0n_OjRzcjqStGyA78LPMlQ0gSgszNMv7HrYa0SLBEvgO8v8pMbyM3pW_V4Fm3kRfaTBsG8IwlL_1_ZpiM6Y98CGL1uksT6xUsFLHxJ0=w1280',
    desc: 'Mengubah ide menjadi pengalaman yang berkesan melalui perencanaan yang matang, koordinasi yang profesional, dan pelaksanaan acara yang berkualitas.',
    points: [
      'Eksekusi hari H dengan minute-by-minute rundown yang presisi',
      'Pengadaan MC profesional, live talent, & pengisi acara',
      'Dokumentasi cinematic photo & video aftermovie kualitas 4K',
      'Tim crew & field coordinator standby penanganan kendala',
    ],
  },
  {
    id: 'private-company-trip',
    title: 'PRIVATE & COMPANY TRIP',
    subtitle: 'Tour & Travel Management',
    image: 'https://sites.google.com/sitesv-images-rt/AMxu72tlezTLfsdrCEgXaAn62NbUBoQ59RjA0LohWpoKrTav0uvc3Cyq46KNM8d7AlIk3IUt2E1g47ATfCUvcsFrQNxg-gLLJiKSWlvvzhS-WKMj1AzU_xZmifh55pvRk5lHvR8C9YbnK5kP5tBDvTLGlIDjq4Gf5mvptGv6pWaBhhP-E74DsDOm3SGCgXbwETB2iDcoa_1W1P9QwRjncXc0GrSgULl_OGMiAMxPDBFLk3g=w1280',
    desc: 'Melalui layanan Tour & Travel, Pixi Creative membantu perusahaan dan instansi menyelenggarakan perjalanan dinas, incentive trip, gathering, maupun wisata kelompok dengan pengelolaan yang terorganisir.',
    points: [
      'Itinerary fleksibel & disesuaikan preferensi instansi',
      'Armada bus pariwisata executive, HiAce, & driver berpengalaman',
      'Outbound team building trainer & fun team bonding games',
      'Konsumsi kuliner khas nusantara & tiket objek wisata lengkap',
    ],
  },
  {
    id: 'event-planner',
    title: 'EVENT PLANNER',
    subtitle: 'Concept, Budgeting & Vendor Sourcing',
    image: 'https://sites.google.com/sitesv-images-rt/AMxu72uwKo5ajtzJLeNrGunqWPPCl7Mif83g4XsU3z2DO29hCIFtRBzxU7vAJlTZhdHedWKdvG2h66HG5XOJNX_c3jIQrztLC7B42GJSef7Wtzoj5m7LlDLrO4c9J4hrxktNX9viZqh7Jl-gOVy5lwL1jfqTgUi5YIbee2_clHZrN2dhf5aG6m1iar0vlJXAOvPGhnVV4n3ecxU4IbMj0zkPe0Z4Et6u1qRduQ4-PcmumgU=w1280',
    desc: 'Mewujudkan ide menjadi pengalaman yang berkesan melalui perencanaan yang kreatif, terstruktur, dan profesional. Pixi Creative siap mendampingi setiap tahap acara, mulai dari konsep hingga pelaksanaan.',
    points: [
      'Pengembangan konsep kreatif, tema visual & moodboard',
      'Pemetaan alokasi anggaran yang efisien & transparan',
      'Koordinasi dan negosiasi multi-vendor rekanan terpercaya',
      'Konsultasi intensif bersama PIC khusus yang responsif',
    ],
  },
];

const pillars = [
  'Pengalaman dan Profesionalisme',
  'Kreativitas dan Inovasi',
  'Manajemen yang Efisien',
  'Kualitas Layanan',
  'Detail-Oriented',
  'Kesiapan Menghadapi Masalah',
  'Pendekatan Personal',
  'Harga yang Bersaing',
];

const reviews = [
  {
    image: 'https://sites.google.com/sitesv-images-rt/AMxu72v1tTokJ8JBHHYkacbf9Cd0uCYC18GTpog0Rnb4mPP9DkU5mf59aY14CDLpubZ5yFPndbLQEA7UeacC5VJkNoRiAxSyN0GqfoqbBKJS6i9adrwIIuP2nxGm9kkf8zkD09pWGUFXvlkD8eX2NdMyDOOv_pgtzP0xwiVP4OOFDLfJG-1crph1OLi_cvKagGCqbvN03Vzmmdp1DTUqYKSWiCIEPUMGRoa4dRM0_2_EUsY=w1280',
    name: 'Kementerian Perumahan & Kawasan Permukiman (PKP)',
    event: 'Sosialisasi Program Nasional & FLPP',
    feedback: 'Pelaksanaan acara berjalan sangat lancar, khidmat, dan koordinasi protokoler menteri tertata sangat rapi. Terima kasih Pixi Creative!',
  },
  {
    image: 'https://sites.google.com/sitesv-images-rt/AMxu72uJ49wd4K8-x6mSRXSrGgnA4tiGpnbONQEcevOv2NkmGUKxc-MBekKffI5pxX7eMg2OC8wgWc-Hm3sb77QSWNMxoeJ4k-1KRz_nvRx6KgGefLgD-B5DsKxEMwYAtSItxP9NF7s-74SQh1wxq5SdWYZqRMmJkD2JXOlcw4M2CeLLlZFOCVNqlTJVr3ZGWFYoOVJCq9U5gapyRshE6-kv-wNxKffoGTRM5Lm6RSJxDNw=w1280',
    name: 'Puskesmas Kotagede Yogyakarta',
    event: 'Penggalangan Komitmen Pelayanan Kesehatan',
    feedback: 'Acara penggalangan komitmen kami menjadi sangat dinamis, berkesan, dan seluruh peserta termotivasi dengan baik.',
  },
  {
    image: 'https://sites.google.com/sitesv-images-rt/AMxu72sc7Ob45V4ZeiXKlYf8VRNb-YBOPZdsOKLOKalRE4yz57pkfujNm_HsmZzFqH1tcOk-a1eL60XUMJKzyQTxdBgOTLoiln4-6Kin52hGwweMbAeAe7jVkz3JGTiItUqowJyo6o-OwymLat0UZfDcTz8HPpFi-6ynRPqeOcrenTTln5TovxskIUVSIqXQrqkdej6KobKqRAIEc8i9DOdKK8ZPwb8prCVgA3o0dYqZcAY=w1280',
    name: 'Puskesmas Ngaglik 2 Yogyakarta',
    event: 'Employee Outing & Gathering Trip',
    feedback: 'Konsep Small Group, Big Fun benar-benar terbukti! Kru Pixi sangat helpful dan ramah melayani semua staf kami.',
  },
  {
    image: 'https://sites.google.com/sitesv-images-rt/AMxu72u47qMvK8fH4DQoF4nzPBYyEJG-81d2NfKAdlLrwZYIi1qcODClgD4dwmdeB2evPC5QnVAmriFlBGifJlewbtGQekyb1Jf6hB-NOYD8iHNIhp2R1hXAaOHPluTcDDTUuLQ9NoEmr1QM_ehWO-q88SVLyPEQbqJnC6OJJW_xPuX-zEb-4dYgxcPyMpemYFAi76-VBxvVjTuU3yDbaNqjAY9MKPZCTWMNN1z-feOOqCs=w1280',
    name: 'Penyelenggara Lokakarya Nasional',
    event: 'Lokakarya Pembaruan Hukum Pidana',
    feedback: 'Manajemen venue convention hall, audio panggung, registrasi peserta sangat profesional. Rekomendasi EO terbaik di Jogja!',
  },
];

const portfolioProjects = [
  {
    title: 'Sosialisasi Kredit Program Perumahan (KPP) & FLPP',
    subtitle: 'Dihadiri langsung oleh Menteri PKP RI, Bapak Maruarar Sirait',
    date: 'November 2025',
    category: 'MICE / Agenda Kementerian',
    images: [
      'https://sites.google.com/sitesv-images-rt/AMxu72uy199yiUhVItM1g-1-vl7bdTp57vTi_Eqne2yFGewe2kHu_r5Z1uMlu33fU6FfYPV6OCliqojnxKZ-GuiOq_xGedsMwKN_5Ma2wLBARIYpzPoXFYa5VY723CfE-JegJ3PpWKhXqr0RFQArcdN6v-uhcNC5zRMNm-eRE-RXrMbvgzbSRGQDwd3YY5KTuQw=w1280',
      'https://sites.google.com/sitesv-images-rt/AMxu72trhygX3wjFqlOGeRMWjzZROMJHAA_Z6-C0MuWGglQ0DdD_4CRDJC_4QaZ3TNgyWhuQMQO_utKqHbrRSGuNk0OsEOrT89UflYMzAH965cgKGh-8ufHzuF1NHPCgRu8oeTz_1Pf4bspEd1McRxM5x1wx5lKu8fAepSmjb3991PFvMiXi2ngzR6JKaSeXeJ4lHDBiUMDtvdn41T0EF35wB2KNqzNGOVkQr2IGN6vU=w1280',
    ],
  },
  {
    title: 'Penggalangan Komitmen Puskesmas Kotagede Yogyakarta',
    subtitle: 'Penggalangan komitmen pelayanan & workshop mutu kesehatan',
    date: 'Mei 2026',
    category: 'Workshop & Institusi Kesehatan',
    images: [
      'https://sites.google.com/sitesv-images-rt/AMxu72veVyFrDcCITELFMwsivaVlQVsOBIpqwksLIAcwbrbWUmsytTRQElCLFtbWa3QMM7MY5FxRSk4crTtrr68KQAaAC3L_NenS46y6dubIp-WqU9RrVfSwHX7jyjMoUCF5qMvrgS4J5hzk0QrwqZMhhmZp-UkE9lO2m-cwTrCQhWhj7G6t_BsMFLkOURv5vYo-qoGcvtm5ZEH4wYd3Q6tywq-8601IhT5O-v8qLU_ht6g=w1280',
      'https://sites.google.com/sitesv-images-rt/AMxu72vwhXxaE_XXDGoywnhi2X0nnc-ZioFkhcCh0Fo6fed8q5gSwYbT-yRRiIXyT9wLBHvnQ04fi6V069IAq34AhlV6SoFDt_4G4fv4_aSiC3UI2EKSxSD9VWzBATpcUsmq0DrnAH805l3G2J0Su5jeRPb6IHHLsWvGFnTJc_2Hr41uabLlwq1Tw9qFsR88hFU=w1280',
    ],
  },
  {
    title: 'Puskesmas Ngaglik 2 Yogyakarta',
    subtitle: 'Small Group, Big Fun — Gathering & Outbound Tour',
    date: 'Mei 2026',
    category: 'Private & Company Trip',
    images: [
      'https://sites.google.com/sitesv-images-rt/AMxu72tumUEQ_mudiCKtb84MLTNiwPZ9FTQ0LiqQl49rOn725kvqMRWW83OrscBDDoXhFZgBfVYVeOq6b76kvhnqNx1FkNlBhymvu22kIFxbFTgfmyXPJ2UzUc-znLgzzs0yJVuXkLfoPjyVP9sNYYJPieiXLrm2uFoOZM6X4AsOHe8uB0fP_dmGJqjaxECEtCo=w1280',
      'https://sites.google.com/sitesv-images-rt/AMxu72t1RePFBrGa7TjBIH35yG0PlLQqKqtpuWkL9ksSjjYVJ6gGHsgG0uOQQCiI53QQ4sbMKjmN7PcZt6i2qrms_mafOdKsOjDgj9cVXqeyq26fdaro05XN37JbhY0Ex9wmCJWYFZiZlhm18B2jZ4_2fjD_P4REk_hCXfG4AtEXvXMMTmjbUnPyEaBJDv6jUb0=w1280',
    ],
  },
  {
    title: 'Lokakarya Nasional Pembaruan Hukum Pidana',
    subtitle: 'Langkah strategis dalam menyosialisasikan pembaruan hukum pidana nasional',
    date: 'Februari 2026',
    category: 'MICE / Seminar Nasional',
    images: [
      'https://sites.google.com/sitesv-images-rt/AMxu72vgc4SEHW-vu1-PYi9UIreq85WrJp7WsrYWzVQYb7G9G5O3KBuwpHxFALTpCACoSDeBQEzBM0DlV--04ER-WVF4UL9toztDh4DufQmsnF_MDVvaPBuNadvh7-i8swSVdrvc8oI9W9V9Ps29599qH0FxskEG6XU3L1iCHihkZuHcI5_0q52SYxX_XgoO=w1280',
      'https://sites.google.com/sitesv-images-rt/AMxu72uDdnl0TJUK43egnIfSb0dYdIfxq709URVqiZl7ZM2cN50f9a_9J3y3Tf1RkYdOAEI-ci4hc5TxWA0Mfx8cYl3EYjhoQHMJGD3_44FQQeSRY6d_XTRaUpvEQZy8b6BRYMJN05f0O9kMrtKriYYLzYqPtR2qbY7dx20NU_xmCCgACkr1EzTs_qK9pbN7jqpfqrf7pnQ-1roJxBFkslbYlzmGZI4oZcYS38oA-PkOhOI=w1280',
    ],
  },
  {
    title: 'Monitoring Progress Pelaksanaan BSPS',
    subtitle: 'Monitoring progres Bantuan Stimulan Perumahan Swadaya',
    date: 'November 2025',
    category: 'Government Evaluation Meeting',
    images: [
      'https://sites.google.com/sitesv-images-rt/AMxu72vOGy0LXYbVzfw1ReRI3nVTfWzr3Zx7sE45U8Sv8HGyv8j3VtU3AXEdFySazk8HFZoqVX2Nesf3yWSGPkf7vfM98ow8j-UiEjCAvuXCb9GJw_RMf4GpCf9c8EKtsKfWDhmBdYGLT8RptBGycU81Nc_6VTOmEiIXcJCP8QTp6A6QlPH8O681X5VUA6bZfUWqkbgSgSRxdVbIPKn2Hw9Fu4KR3Qbcblss7UzkKg=w1280',
      'https://sites.google.com/sitesv-images-rt/AMxu72ug0Rnm0MIEEDRk5p-npK8e9fTgEXDVHL2KwjtiXVPwuQwLfibS0uAeZ6EncgBVD-c9HEyZjSxCoeTBa-IOUI1d-zyqhGFqtP0hACZAk1eBBqpfVWuiFE-T-oQQHFYQV5PHSX_o3p-iaTjlYA3BDFAgaa0jUKdui5Fse-Cb84kH4E-JiMxu7BMq8BiL=w1280',
    ],
  },
];

export default function PixiCreativePage() {
  return (
    <div className="pixi-page min-h-screen">
      {/* Schema Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pixiStructuredData) }}
      />

      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-50 pixi-navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors border border-slate-200"
            >
              <span>← Showcase</span>
            </Link>
            <div className="h-5 w-px bg-slate-200 hidden sm:block" />
            <a href="#beranda" className="flex items-center gap-2.5">
              {/* Official Pixi Creative Logo */}
              <img
                src="https://sites.google.com/sitesv-images-rt/AMxu72vuP_QxcSy9OkRb7yZVRy9oLfpDvsJlR5Zxk01Elid6YgIX7vLgbLIoaBK0JcwvEqAIX5sUJREZNqPrkz9JqEcnCrta80661KL750VWYyi04AQgWfDaHERNzL7sbRxfgMDPY9YgD-2kwahndY5q0DeZTZFALkM9vSIKuwm25YqQmDufp7RA_e04RTNr-70=w16383"
                alt="PIXI CREATIVE"
                className="h-10 sm:h-11 w-auto object-contain rounded-lg"
              />
              <span className="font-black text-slate-900 tracking-tight text-lg hidden md:inline">
                PIXI <span className="text-orange-600 font-semibold">CREATIVE</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-700">
            <a href="#beranda" className="hover:text-orange-600 transition-colors">BERANDA</a>
            <a href="#tentang-kami" className="hover:text-orange-600 transition-colors">TENTANG KAMI</a>
            <a href="#layanan" className="hover:text-orange-600 transition-colors">LAYANAN</a>
            <a href="#simulasi" className="hover:text-orange-600 transition-colors text-orange-600 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              SIMULASI BIAYA
            </a>
            <a href="#keunggulan" className="hover:text-orange-600 transition-colors">KEUNGGULAN</a>
            <a href="#portofolio" className="hover:text-orange-600 transition-colors">PORTOFOLIO</a>
            <a href="#kontak" className="hover:text-orange-600 transition-colors">KONTAK</a>
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>FREE CONSULTATION</span>
            </a>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION WITH REAL BANNER PHOTOGRAPHY & DIRECT QUOTE */}
      <section id="beranda" className="pixi-hero-banner py-24 sm:py-32 lg:py-40 text-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-orange-500 pixi-pulse-ring" />
            <span>Event Organizer & Travel Planner</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto text-white">
            &quot;Kami Tidak Sekadar Merancang Acara, <br className="hidden sm:inline" />
            Kami Menciptakan Kenangan Yang Akan Selalu Dikenang&quot;
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
            Solusi Acara yang Lengkap dan Profesional dengan <strong className="text-white font-semibold">Pixi Creative Event Planner</strong>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm sm:text-base shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wide"
            >
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>FREE EVENT CONSULTATION</span>
            </a>
            <a
              href="#simulasi"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-orange-600/90 hover:bg-orange-600 text-white font-bold text-sm sm:text-base backdrop-blur-md border border-orange-500/50 transition-colors uppercase tracking-wide"
            >
              <span>Hitung Simulasi Anggaran</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. TENTANG KAMI (ABOUT SECTION WITH REAL PHOTOGRAPHY) */}
      <section id="tentang-kami" className="py-20 sm:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="pixi-pill pixi-pill-orange">
                TENTANG KAMI
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                &quot;Creating Memorable Experiences, Delivering Exceptional Events.&quot;
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-semibold">Pixi Creative Planner</strong> adalah penyedia layanan event planner profesional yang menghadirkan solusi kreatif untuk kebutuhan meeting, training, gathering, corporate event, dan perjalanan wisata.
                </p>
                <p>
                  Dengan tim yang berpengalaman dan penuh dedikasi, kami berkomitmen menciptakan acara yang terencana dengan baik, berkesan, dan sesuai dengan kebutuhan setiap klien.
                </p>
                <p>
                  Kami bangga telah dipercaya oleh ratusan kantor, instansi pemerintah, BUMN, rumah sakit, puskesmas, dan korporat swasta di seluruh Indonesia untuk mengatur dan menyelenggarakan berbagai acara serta perjalanan wisata berstandar tinggi.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#layanan"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors"
                >
                  <span>Jelajahi Layanan Kami</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Photo Frame */}
            <div className="lg:col-span-6">
              <div className="pixi-img-zoom rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative">
                <img
                  src="https://sites.google.com/sitesv-images-rt/AMxu72sys7az6FcULelSEE69RkJcKG4GArykX80PZwx2v3mOKtp4PA1GnjAYjAAYGwAsc8pVLjE61Id_rYZOlvIudeRFUHor-9C3IXvhIYNTcM7lbcUY7j4oJ87bj4O6APzcgrjGVumZcU86eEcRO8XjfJSrZADPXUMQARp3b39fCD9T5voYxoau6pVrTnNnp58a-wpe-J89oGejrnzetF_mrm9wLuyoWqKP6XM5plE6=w1280"
                  alt="Pixi Creative Team & Hospitality"
                  className="w-full h-[360px] sm:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-xs uppercase tracking-widest text-orange-400 font-bold">PIXI CREATIVE PRODUCTION</div>
                    <div className="text-lg font-bold">Professional Team & Reliable Hospitality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LAYANAN KAMI (4 PHOTO CARDS) */}
      <section id="layanan" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="pixi-pill pixi-pill-orange">
              OUR SERVICES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Layanan Kami
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Solusi terpadu penyelenggaraan acara dan perjalanan wisata dengan standar mutu terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((srv) => (
              <div
                key={srv.id}
                className="pixi-card flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div className="pixi-img-zoom h-48 w-full bg-slate-200 relative">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {srv.title}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs font-semibold text-orange-600 mt-0.5">
                        {srv.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {srv.desc}
                    </p>

                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      {srv.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-700">
                          <Check className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/6285842345332?text=Halo%20Pixi%20Creative%2C%20saya%20tertarik%20konsultasi%20layanan%20${encodeURIComponent(srv.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-orange-50 hover:bg-orange-600 text-orange-700 hover:text-white font-bold text-xs transition-colors border border-orange-200"
                  >
                    <span>Konsultasikan Acara</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KENAPA HARUS PILIH KAMI ? (KEUNGGULAN KAMI WITH TEAM PHOTO) */}
      <section id="keunggulan" className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo of Team Production */}
            <div className="lg:col-span-5">
              <div className="pixi-img-zoom rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
                <img
                  src="https://sites.google.com/sitesv-images-rt/AMxu72tPj0qY3j8s4cynCPN0rVc3QS-bASsCGW-kOLm_mktGC9APF7-QFpivgr0voVqIiNTETXUg0054m0-n8SCVd7-iz24SCq-cJrrM2c8DbT0kLsUpRTcT-A6dGAuv4CXhxZQOdxyt2ddiYgsLmw6qRC6UwZYNz-Wiafn4H0f0_u2cdv9F7HNMk3y8GO-xUa-nrs1lot20QjSpGmcnE-81oqBtDERZu14FnrQXWA=w1280"
                  alt="Pixi Creative Event Execution"
                  className="w-full h-[480px] object-cover"
                />
              </div>
            </div>

            {/* Right Pillars List */}
            <div className="lg:col-span-7 space-y-6">
              <div className="pixi-pill pixi-pill-orange">
                KEUNGGULAN KAMI
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Kenapa Harus Pilih Kami ?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Pixi Creative selalu memprioritaskan ketepatan waktu, kualitas teknis panggung, keramahan kru, dan transparansi anggaran demi kenyamanan penuh pihak penyelenggara.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {pillars.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 hover:border-orange-400 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-orange-600 text-white flex items-center justify-center font-black text-xs shrink-0">
                      {idx + 1}
                    </div>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-600/25 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Diskusikan Kebutuhan Acara Anda</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KREATIF & INOVATIF QUOTE BANNER */}
      <section className="pixi-quote-banner py-20 sm:py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
            KREATIF & INOVATIF
          </div>
          <blockquote className="text-xl sm:text-3xl font-extrabold leading-snug tracking-tight text-white max-w-3xl mx-auto">
            &quot;Kami percaya bahwa setiap acara memiliki cerita yang unik. Karena itu, tim Pixi Creative selalu menghadirkan gagasan kreatif dan solusi inovatif yang mampu mengubah sebuah kegiatan menjadi pengalaman yang inspiratif dan tak terlupakan.&quot;
          </blockquote>
          <div className="text-xs text-orange-200 font-semibold tracking-wider uppercase">
            — PIXI CREATIVE EVENT & TRAVEL PLANNER
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE EVENT BUDGET SIMULATOR WIDGET */}
      <section id="simulasi" className="py-20 sm:py-28 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              SIMULASI INTERAKTIF
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Hitung Estimasi Anggaran Acara Anda
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Pilih jenis kegiatan, kapasitas peserta, durasi, destinasi, dan fasilitas pendukung untuk mendapatkan simulasi biaya secara instan dan mengirimkannya ke WhatsApp Pixi Creative.
            </p>
          </div>

          <PixiEventCalculatorWidget />
        </div>
      </section>

      {/* 7. PELANGGAN UNGGULAN (CLIENT LOGOS GRID) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="pixi-pill pixi-pill-orange">
              PELANGGAN UNGGULAN
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Beberapa Customer Yang Menggunakan Layanan Kami
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Telah dipercaya oleh berbagai kementerian negara, dinas kesehatan, rumah sakit, puskesmas, dan korporat.
            </p>
          </div>

          {/* Grid of Client Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
            {clientLogos.map((logo, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center hover:shadow-md transition-all h-28"
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-14 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CUSTOMERS REVIEWS (TESTIMONIALS WITH SCREENSHOT CARDS) */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <div className="pixi-pill pixi-pill-orange">
              CUSTOMERS REVIEWS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Temukan Pendapat Klien Tentang Layanan Kami
            </h2>
            <p className="text-slate-600 text-sm">
              Ulasan otentik dari para penanggung jawab acara dan pimpinan instansi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="pixi-card overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="pixi-img-zoom h-44 w-full bg-slate-100 relative border-b border-slate-100">
                    <img
                      src={rev.image}
                      alt={rev.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-3.5 h-3.5 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-700 italic leading-relaxed">
                      &quot;{rev.feedback}&quot;
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 mt-3">
                  <div className="font-bold text-slate-900 text-xs">
                    {rev.name}
                  </div>
                  <div className="text-[11px] text-orange-600 font-medium">
                    {rev.event}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PORTOFOLIO SECTION (COMPLETE WITH REAL DOCUMENTATION PHOTOS) */}
      <section id="portofolio" className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="pixi-pill pixi-pill-orange">
              PORTOFOLIO ACARA
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Dokumentasi & Rekam Jejak Acara
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Rangkaian momen penting dari berbagai kegiatan kementerian, lokakarya nasional, penggalangan komitmen, dan gathering yang sukses kami selenggarakan.
            </p>
          </div>

          {/* Projects Gallery */}
          <div className="space-y-16">
            {portfolioProjects.map((proj, pIdx) => (
              <div
                key={pIdx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                      {proj.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      {proj.subtitle}
                    </p>
                  </div>
                  <div className="text-xs font-mono font-bold text-slate-500 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 self-start sm:self-auto">
                    {proj.date}
                  </div>
                </div>

                {/* 2-Column Photo Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {proj.images.map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="pixi-img-zoom rounded-2xl overflow-hidden shadow-md bg-slate-200 h-64 sm:h-80"
                    >
                      <img
                        src={imgSrc}
                        alt={`${proj.title} - Dokumentasi ${imgIdx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center p-8 rounded-3xl bg-orange-50 border border-orange-200">
            <h3 className="text-xl font-bold text-slate-900">
              KONSULTASI GRATIS BERSAMA PIXI CREATIVE
            </h3>
            <p className="text-slate-600 text-sm mt-1 max-w-xl mx-auto">
              “Butuh EO profesional? Hubungi kami sekarang untuk diskusi lebih lanjut.”
            </p>
            <div className="mt-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi Kami via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. YOUR EVENT, OUR MASTERPIECE (FOOTER CTA WITH REAL BANNER) */}
      <section id="kontak" className="pixi-masterpiece-banner py-20 sm:py-28 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/30 border border-orange-500/50 text-orange-400 text-xs font-bold uppercase tracking-wider">
                YOUR EVENT, OUR MASTERPIECE
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Pixi Creative
              </h2>
              <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                <p>
                  <strong className="text-white font-semibold">Pixi Creative</strong> adalah Event Organizer (EO) dan Agen Perjalanan Wisata yang sangat profesional dan telah membangun reputasi yang solid dalam industri ini.
                </p>
                <p>
                  Kami bangga telah dipercaya oleh ratusan kantor, instansi, dan pemerintahan untuk mengatur dan menyelenggarakan berbagai acara dan perjalanan wisata.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm sm:text-base shadow-2xl transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat WhatsApp (+62 8584 234 5332)</span>
                </a>
                <a
                  href={emailUrl}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-md border border-white/20 transition-colors"
                >
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span>Kirim Email</span>
                </a>
              </div>
            </div>

            {/* Right Contact Card */}
            <div className="lg:col-span-5 bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl space-y-6 shadow-2xl">
              <div className="text-xs font-bold uppercase tracking-widest text-orange-400 border-b border-slate-800 pb-3">
                CONTACT INFORMATION
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-xs text-slate-400 font-semibold">Call / Message:</div>
                  <div className="font-extrabold text-white text-base mt-0.5">{phoneDisplay}</div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-semibold">Whatsapp:</div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-extrabold text-emerald-400 text-base mt-0.5 hover:underline block"
                  >
                    {phoneDisplay}
                  </a>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-semibold">Email:</div>
                  <a
                    href={emailUrl}
                    className="font-extrabold text-orange-400 text-base mt-0.5 hover:underline block"
                  >
                    pixicreative01@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs text-slate-400 mb-2 font-semibold">Follow Our Social Media:</div>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs hover:opacity-90 transition-opacity"
                >
                  <img
                    src="https://sites.google.com/sitesv-images-rt/AMxu72tmfJ9sTKJWBSbqYcFDSfmbDIC33zDRPd1YeeJKYO9fukc15hitS_2d0d-yWrew2a03PiqQ_OEiUeqHjrn7bpr1Su4sw60aQfJg8URO3NCnzdlIvkb0Fbvq8mMzGA3bGw-i1_HBtWzhzO0ltwiBLp2kCMgrbz4QnJGNO0wBrXbpBmBJlrWhabUem_htQd5R_9hwpSa054oAgdDsbQGl"
                    alt="Instagram"
                    className="w-5 h-5 object-contain"
                  />
                  <span>@pixicreative.id</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER OVERVIEW & SITEMAP */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 space-y-3">
              <div className="flex items-center gap-2">
                <img
                  src="https://sites.google.com/sitesv-images-rt/AMxu72vuP_QxcSy9OkRb7yZVRy9oLfpDvsJlR5Zxk01Elid6YgIX7vLgbLIoaBK0JcwvEqAIX5sUJREZNqPrkz9JqEcnCrta80661KL750VWYyi04AQgWfDaHERNzL7sbRxfgMDPY9YgD-2kwahndY5q0DeZTZFALkM9vSIKuwm25YqQmDufp7RA_e04RTNr-70=w16383"
                  alt="PIXI CREATIVE"
                  className="h-9 w-auto object-contain rounded"
                />
                <span className="font-bold text-white text-sm">PIXI CREATIVE</span>
              </div>
              <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
                Event Organizer (EO) dan Agen Perjalanan Wisata profesional. Dipercaya ratusan instansi, pemerintahan, dan perusahaan.
              </p>
            </div>

            <div>
              <div className="font-bold text-white text-xs uppercase tracking-wider mb-3">
                Overview
              </div>
              <ul className="space-y-2">
                <li><a href="#beranda" className="hover:text-white transition-colors">HOME</a></li>
                <li><a href="#tentang-kami" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#portofolio" className="hover:text-white transition-colors">Portofolio</a></li>
                <li><a href="#simulasi" className="hover:text-white transition-colors">Simulasi Biaya</a></li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-white text-xs uppercase tracking-wider mb-3">
                Our Services
              </div>
              <ul className="space-y-2">
                <li><a href="#layanan" className="hover:text-white transition-colors">MICE</a></li>
                <li><a href="#layanan" className="hover:text-white transition-colors">Event Organizer</a></li>
                <li><a href="#layanan" className="hover:text-white transition-colors">Private & Company Trip</a></li>
                <li><a href="#layanan" className="hover:text-white transition-colors">Event Planner</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              © {new Date().getFullYear()} PIXI CREATIVE. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="hover:text-slate-300 transition-colors">
                Naltech Studio Portfolio Showcase
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION BUTTON */}
      <aside aria-label="Aksi Cepat WhatsApp" className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-2xl shadow-emerald-950/60 transition-all transform hover:scale-105 active:scale-95"
        >
          <span className="w-2 h-2 rounded-full bg-white pixi-pulse-ring" />
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Pixi Creative</span>
        </a>
      </aside>
    </div>
  );
}
