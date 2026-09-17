'use client';

import React, { useState } from 'react';

const NAV_ITEMS = [
  { label: 'BERANDA', href: '#beranda' },
  { label: 'TENTANG KAMI', href: '#tentang-kami' },
  { label: 'LAYANAN', href: '#layanan' },
  { label: 'SIMULASI BIAYA', href: '#simulasi' },
  { label: 'KEUNGGULAN', href: '#keunggulan' },
  { label: 'PORTOFOLIO', href: '#portofolio' },
  { label: 'KONTAK', href: '#kontak' },
];

export default function PixiHeaderNav() {
  const [activeItem, setActiveItem] = useState('BERANDA');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string, href: string) => {
    e.preventDefault();
    setActiveItem(label);
    if (href === '#beranda') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="pxc-nav">
      {NAV_ITEMS.map((item) => {
        const isActive = activeItem === item.label;
        return (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.label, item.href)}
            className={`pxc-nav-link ${isActive ? 'active' : ''}`}
            aria-label={`Navigasi ${item.label}`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
