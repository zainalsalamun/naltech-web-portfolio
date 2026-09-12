'use client';

import './nala-soda.css';
import { ArrowUpRight, ChevronRight, Circle, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type Flavor = 'classic' | 'lime';

const flavors = {
  classic: { name: 'Classic', note: 'Citrus cola · zero sugar', accent: '#fbcfe8', inner: '#0b8a78', mid: '#044e3b', outer: '#011411', can: 'Cherry cola' },
  lime: { name: 'Zero Lime', note: 'Lime sparkle · zero sugar', accent: '#d9ff55', inner: '#0b4f8a', mid: '#04294e', outer: '#010c14', can: 'Bright lime' },
} satisfies Record<Flavor, { name: string; note: string; accent: string; inner: string; mid: string; outer: string; can: string }>;

export default function NalaSodaPage() {
  const [flavor, setFlavor] = useState<Flavor>('classic');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLElement>(null);
  const current = flavors[flavor];

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const rect = stageRef.current?.getBoundingClientRect();
      if (!rect) return;
      setTilt({ x: ((event.clientY - rect.top) / rect.height - 0.5) * -10, y: ((event.clientX - rect.left) / rect.width - 0.5) * 14 });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <main className="ns-page" style={{ '--ns-inner': current.inner, '--ns-mid': current.mid, '--ns-outer': current.outer, '--ns-accent': current.accent } as React.CSSProperties}>
      <div className="ns-bubbles" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <i key={i} style={{ '--i': i } as React.CSSProperties} />)}</div>
      <header className="ns-header"><a className="ns-brand" href="#top"><span><Circle size={22} /><b>+</b></span><strong>NALA <em>SODA</em></strong></a><nav><a className="active" href="#top">Home</a><a href="#flavors">Flavors</a><a href="#story">Our story</a><a href="#contact">Contact</a></nav><a className="ns-header-cta" href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20dengan%20konsep%20Nala%20Soda." target="_blank" rel="noreferrer">Let's talk <ArrowUpRight size={16} /></a></header>

      <section className="ns-hero" id="top" ref={stageRef}>
        <div className="ns-copy"><p className="ns-eyebrow"><Sparkles size={14} /> PURE ZERO REFRESHMENT</p><h1>Open a little<br /><em>possibility.</em></h1><p className="ns-lead">A crisp, clean soda made for the moments between plans. Zero sugar, bright flavor, and nothing to compromise.</p><a className="ns-primary" href="#flavors">Find your flavor <ArrowUpRight size={18} /></a><div className="ns-award"><span>✦</span><div><b>GOOD TASTE, LESS SUGAR</b><small>Crafted for everyday escapes</small></div></div></div>
        <div className="ns-product-wrap"><div className="ns-orbit ns-orbit-one" /><div className="ns-orbit ns-orbit-two" /><div className="ns-orb ns-orb-pink" /><div className="ns-orb ns-orb-yellow" /><div className="ns-can-shadow" /><div className="ns-can" style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) rotateZ(-7deg)` }}><div className="ns-can-top" /><div className="ns-can-label"><small>DIET</small><strong>NALA</strong><em>{current.can}</em><span>ZERO<br />SUGAR</span></div><div className="ns-can-bottom" /></div><div className="ns-float-note ns-note-one">No sugar<br /><b>100% sparkle</b></div><div className="ns-float-note ns-note-two">EST. 2026<br /><b>Jakarta</b></div></div>
      </section>

      <section className="ns-flavors" id="flavors"><div className="ns-section-label">01 / CHOOSE YOUR MOOD</div><div className="ns-flavor-head"><h2>Two ways to<br /><em>feel refreshed.</em></h2><p>Start with the familiar. Stay for the unexpected. Switch flavors and watch the whole scene change.</p></div><div className="ns-flavor-grid">{(['classic', 'lime'] as Flavor[]).map((key, index) => <button key={key} className={`ns-flavor-card ${flavor === key ? 'selected' : ''} ns-${key}`} onClick={() => setFlavor(key)}><span>0{index + 1}</span><div className="ns-mini-can"><i /></div><div><b>{flavors[key].name}</b><small>{flavors[key].note}</small></div><ChevronRight size={21} /></button>)}</div></section>
      <section className="ns-story" id="story"><div><div className="ns-section-label">02 / THE NALA IDEA</div><h2>Make room for<br /><em>small escapes.</em></h2></div><p>We believe refreshment should feel like a reset button. Nala Soda pairs a familiar fizz with a brighter point of view—so every sip leaves a little more room for whatever comes next.</p><div className="ns-stats"><div><strong>0g</strong><span>added sugar</span></div><div><strong>2</strong><span>signature flavors</span></div><div><strong>∞</strong><span>ways to enjoy</span></div></div></section>
      <footer className="ns-footer" id="contact"><a className="ns-brand" href="#top"><span><Circle size={22} /><b>+</b></span><strong>NALA <em>SODA</em></strong></a><p>Good taste for the in-between moments.</p><div><a href="#flavors">Flavors</a><a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="#top">Back to top ↑</a></div><small>Concept website independently created by Naltech Studio.</small></footer>
    </main>
  );
}
