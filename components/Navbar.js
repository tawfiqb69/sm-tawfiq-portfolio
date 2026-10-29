"use client";

import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar section-shell" aria-label="Main navigation">
        <a className="brand-mark" href="#home" aria-label="ST. — SM Tawfiq home">ST<span>.</span></a>
        <div className="desktop-nav">
          {links.slice(0, 4).map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </div>
        <div className="nav-actions">
          <a className="nav-cta" href="#contact"><MessageCircle size={16} /><span>Let&apos;s Talk</span></a>
          <button className="menu-toggle" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <div className={`mobile-nav ${open ? "mobile-nav-open" : ""}`} id="mobile-navigation" aria-hidden={!open}>
          {links.map((link) => <a href={link.href} key={link.href} tabIndex={open ? 0 : -1} onClick={closeMenu}>{link.label}</a>)}
        </div>
      </nav>
    </header>
  );
}
