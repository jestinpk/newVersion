"use client";

import { useState } from "react";

export default function SubpageShell({ eyebrow, title, intro, children }) {
  const [open, setOpen] = useState(false);
  return (
    <main className="subpage">
      <div className="utility-bar"><span>Wholesale enquiries</span><span>South India delivery</span><span>Mon–Sat · 10am–6pm</span></div>
      <header className="topbar subpage-nav">
        <a className="brand" href="/" aria-label="PK LIGHTS home">
          <img src="/images/pk-lights-logo.png" alt="PK LIGHTS" />
          <span className="brand-copy"><b>PK LIGHTS</b><small>Lighting a brighter tomorrow</small></span>
        </a>
        <nav id="main-navigation" className={open ? "desktop-nav open" : "desktop-nav"} aria-label="Main navigation">
          <a href="/" onClick={() => setOpen(false)}>Home</a><a href="/#categories" onClick={() => setOpen(false)}>Products</a><a href="/downloads" onClick={() => setOpen(false)}>Downloads</a>
          <a href="/help" onClick={() => setOpen(false)}>How We Work</a><a href="/help#languages" onClick={() => setOpen(false)}>Languages</a><a href="/contact" onClick={() => setOpen(false)}>Contact</a><a className="mobile-nav-quote" href="/quote" onClick={() => setOpen(false)}>Detailed quote form</a>
        </nav>
        <div className="header-actions"><a className="call-btn" href="tel:+919947089167">Call</a><a className="enquiry-nav simple" href="/quote">Get Quote</a><button className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="main-navigation">{open ? "Close" : "Menu"}</button></div>
      </header>
      <section className="subpage-hero"><span className="kicker">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></section>
      {children}
      <footer className="site-footer">
        <div className="footer-brand"><img src="/images/pk-lights-logo.png" alt="" /><div><b>PK LIGHTS</b><span>Wholesale Distributor in Electronic Lights</span></div></div>
        <div><small>Call / WhatsApp</small><a href="tel:+919947089167">+91 99470 89167</a></div>
        <div><small>Email</small><a href="mailto:pklights2017@gmail.com">pklights2017@gmail.com</a></div>
        <div><small>Business hours</small><span>Mon–Sat · 10am–6pm</span></div>
      </footer>
      <div className="mobile-contact-bar"><a href="tel:+919947089167">Call</a><a href="/quote">Get Quote</a></div>
    </main>
  );
}
