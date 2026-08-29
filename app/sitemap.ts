import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';
const routes = ['', '/demo/senja-coffee', '/demo/ruang-arsitek', '/demo/lumiere-skincare', '/demo/naltech-pay', '/demo/nalaride', '/demo/karsa-coffee', '/demo/nara-atelier', '/demo/nalatix', '/demo/nalafood', '/demo/nalahijab', '/demo/nalasablon', '/demo/nalajewels', '/demo/nalacatering'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date('2026-08-29'),
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : 0.8,
  }));
}
