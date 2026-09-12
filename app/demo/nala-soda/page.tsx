'use client';
import './nala-soda.css';
import { ArrowUpRight, ChevronLeft, ChevronRight, Circle, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

type Flavor = 'classic' | 'lime';
const flavors = { classic: { label: 'Diet Classic', title: 'Pure Zero', accent: '#fbcfe8', inner: '#174d83', mid: '#0b2d55', outer: '#061321', can: 'CLASSIC' }, lime: { label: 'Zero Lime', title: 'Bright Zero', accent: '#dcff63', inner: '#0c8c78', mid: '#064b44', outer: '#031c1b', can: 'LIME' } } as const;

export default function NalaSodaPage() {
  const [active, setActive] = useState<Flavor>('classic'); const [tilt, setTilt] = useState({ x: 0, y: 0 }); const current = flavors[active];
  useEffect(() => { const move = (e: MouseEvent) => setTilt({ x: (e.clientY / window.innerHeight - .5) * -9, y: (e.clientX / window.innerWidth - .5) * 12 }); window.addEventListener('mousemove', move); return () => window.removeEventListener('mousemove', move); }, []);
  const swap = () => setActive(active === 'classic' ? 'lime' : 'classic');
  return <main className="soda-page" style={{ '--soda-inner': current.inner, '--soda-mid': current.mid, '--soda-outer': current.outer, '--soda-accent': current.accent } as React.CSSProperties}>
    <div className="soda-noise" aria-hidden="true" />
    <header className="soda-header"><a className="soda-logo" href="#"><span><Circle size={20}/><Plus size={10}/></span><b>Nala</b></a><nav><a className="active" href="#">Home</a><a href="#flavors">Ingredients</a><a href="#flavors">Taste</a><a href="#story">Eco</a><a href="#story">Reviews</a></nav><a className="soda-contact" href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">Contact us</a></header>
    <section className="soda-hero"><div className="soda-left"><h1>{current.title.split(' ').map(word => <span key={word}>{word}</span>)}</h1><p>Unleash the crisp taste of zero sugar. Refreshment redefined in every bubble — all in one sleek design.</p><a className="soda-shop" href="#flavors">Shop now <span><Plus size={17}/></span></a><div className="soda-award"><span>✦</span><small>DESIGN AWARDS<br/><b>PREMIUM BEVERAGE 2026</b></small></div></div><div className="soda-stage"><div className="soda-orbit orbit-a"/><div className="soda-orbit orbit-b"/>{['a','b','c','d','e'].map(x => <div key={x} className={`soda-berry berry-${x}`}/>)}<div className="soda-leaf leaf-a"/><div className="soda-leaf leaf-b"/><div className="soda-can-shadow"/><div className="soda-can" style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) rotateZ(-16deg)` }}><div className="soda-can-lid"/><div className="soda-can-art"><small>NALA</small><strong>ZERO</strong><em>{current.can}</em><i>0<br/><b>CAL</b></i></div><div className="soda-can-foot"/></div><div className="soda-heading-script">Refreshingly<br/><em>Clean</em></div></div><aside className="soda-picker" id="flavors"><div className="soda-picker-top"><small>CHOOSE YOUR FLAVOR</small><div><button aria-label="Previous flavor" onClick={swap}><ChevronLeft size={14}/></button><button aria-label="Next flavor" onClick={swap}><ChevronRight size={14}/></button></div></div><div className="soda-flavor-list">{(['classic','lime'] as Flavor[]).map(key => <button key={key} className={`soda-flavor ${active === key ? 'selected' : ''}`} onClick={() => setActive(key)}><div className={`soda-mini-can mini-${key}`}><span/></div><small>{flavors[key].label}<b>$2.99</b></small></button>)}</div></aside></section>
  </main>;
}
