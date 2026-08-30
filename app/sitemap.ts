import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

interface RouteConfig {
  path: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  images?: string[];
}

const siteRoutes: RouteConfig[] = [
  {
    path: '',
    changeFrequency: 'weekly',
    priority: 1.0,
    images: [`${siteUrl}/og.png`, `${siteUrl}/naltech-logo.png`],
  },
  {
    path: '/demo/senja-coffee',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/senja/hero.jpg`, `${siteUrl}/senja/sunset-drink.jpg`, `${siteUrl}/senja/brew.jpg`],
  },
  {
    path: '/demo/ruang-arsitek',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/architecture/hero-villa.jpg`, `${siteUrl}/architecture/project-concrete.jpg`, `${siteUrl}/architecture/project-interior.jpg`],
  },
  {
    path: '/demo/lumiere-skincare',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/og.png`],
  },
  {
    path: '/demo/naltech-pay',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/og.png`],
  },
  {
    path: '/demo/nalaride',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/rental/hero-suv.jpg`, `${siteUrl}/rental/city-suv.jpg`, `${siteUrl}/rental/scooter.jpg`],
  },
  {
    path: '/demo/karsa-coffee',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/coffee/hero-cafe.jpg`],
  },
  {
    path: '/demo/nara-atelier',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/fashion/hero.jpg`],
  },
  {
    path: '/demo/nalatix',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/travel/flight-sky.jpg`, `${siteUrl}/travel/hotel-resort.jpg`, `${siteUrl}/travel/themepark.jpg`],
  },
  {
    path: '/demo/nalafood',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/food/hero-spread.jpg`],
  },
  {
    path: '/demo/nalahijab',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/hijab/hero-model.jpg`],
  },
  {
    path: '/demo/nalasablon',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/sablon/hero-workshop.jpg`],
  },
  {
    path: '/demo/nalajewels',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/jewelry/hero-mother-child.jpg`],
  },
  {
    path: '/demo/nalacatering',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/catering/hero-ballroom.jpg`],
  },
  {
    path: '/demo/nalacandi',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/candi/candi-prambanan.jpg`, `${siteUrl}/candi/candi-plaosan.jpg`, `${siteUrl}/candi/candi-kalasan.jpg`],
  },
  {
    path: '/demo/nalaedu',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/learning/hero-student.jpg`],
  },
  {
    path: '/demo/nalainvest',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/invest/hero-chart.jpg`],
  },
  {
    path: '/demo/nalacode',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/code/hero-developer.jpg`],
  },
  {
    path: '/demo/nalastay',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/stay/hero-villa.jpg`],
  },
  {
    path: '/demo/nalalaundry',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/laundry/hero-laundry.jpg`],
  },
  {
    path: '/demo/nalafarm',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/farm/hero-farm.jpg`],
  },
  {
    path: '/demo/laundro',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/laundro/hero-laundro.jpg`],
  },
  {
    path: '/demo/motocare',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/motocare/hero-workshop.jpg`],
  },
  {
    path: '/demo/acfix',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/acfix/hero-ac.jpg`],
  },
  {
    path: '/demo/naltech-digital',
    changeFrequency: 'weekly',
    priority: 0.95,
    images: [`${siteUrl}/tech/hero-dev.jpg`, `${siteUrl}/tech/banking-app.jpg`, `${siteUrl}/tech/pos-system.jpg`],
  },
  {
    path: '/demo/nalcut',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/barber/hero-barber.jpg`, `${siteUrl}/barber/style-fade.jpg`, `${siteUrl}/barber/style-crop.jpg`],
  },
  {
    path: '/demo/seraya-wedding',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/wedding/hero-wedding.jpg`, `${siteUrl}/wedding/case-ballroom.jpg`, `${siteUrl}/wedding/case-garden.jpg`],
  },
  {
    path: '/demo/lensa-cerita',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/photo/hero-photo.jpg`, `${siteUrl}/photo/portfolio-grad-1.jpg`, `${siteUrl}/photo/portfolio-wedding-1.jpg`],
  },
  {
    path: '/demo/rasa-nusantara',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/food-local/hero-food-spread.jpg`, `${siteUrl}/food-local/product-sambal.jpg`, `${siteUrl}/food-local/product-chips.jpg`],
  },
  {
    path: '/demo/lumiera-clinic',
    changeFrequency: 'monthly',
    priority: 0.85,
    images: [`${siteUrl}/lumiera/hero-consultation.webp`, `${siteUrl}/lumiera/doctor-alya.webp`, `${siteUrl}/lumiera/clinic-interior.webp`],
  },
  {
    path: '/demo/ringnet',
    changeFrequency: 'monthly',
    priority: 0.85,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-08-29');

  return siteRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.images ? { images: route.images } : {}),
  }));
}

