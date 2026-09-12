"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export const dynamic = "force-static";

const products = [
  {
    id: "toran-20",
    name: "20 ft Pixel LED Toran",
    category: "Decorative",
    eyebrow: "Custom pattern lighting",
    moq: null,
    moqLabel: "Confirm on enquiry",
    unit: "sets",
    featured: true,
    accent: "warm",
    image: "/newVersion/images/pixel-led-toran.webp",
    specs: ["21 hanging strings", "1 ft fixed spacing", "12V pixel system", "Custom colour patterns"],
  },
  {
    id: "running-tube",
    name: "Warm White Running Tube",
    category: "Decorative",
    eyebrow: "Max LED · sunlight effect",
    moq: 100,
    moqLabel: "100 pcs",
    unit: "pcs",
    featured: true,
    accent: "amber",
    image: "/newVersion/images/running-led-tube-cutout.webp",
    specs: ["Warm white output", "Running light effect", "Outdoor décor use", "Bulk carton supply"],
  },
  {
    id: "neon-roll",
    name: "SUXUS PRO Neon Roll",
    category: "Decorative",
    eyebrow: "Double-side warm white",
    moq: 5,
    moqLabel: "5 pcs",
    unit: "pcs",
    featured: false,
    accent: "peach",
    image: "/newVersion/images/neon-roll-warm-white.webp",
    specs: ["220V AC direct input", "Driver-less design", "Double-side illumination", "Flexible and durable"],
  },
  {
    id: "pixel-strip",
    name: "12V Pixel LED Strip",
    category: "Pixel LED",
    eyebrow: "6 metre · single colour",
    moq: 60,
    moqLabel: "60 rolls",
    unit: "rolls",
    featured: true,
    accent: "cyan",
    image: "/newVersion/images/pixel-led-strip.webp",
    specs: ["6 metre length", "7 single colours", "12V pixel system", "Controller compatible"],
  },
  {
    id: "pixel-belt",
    name: "KKDN RGB Pixel LED Belt",
    category: "Pixel LED",
    eyebrow: "50 bulbs · 20 ft",
    moq: null,
    moqLabel: "Confirm on enquiry",
    unit: "pcs",
    featured: false,
    accent: "violet",
    image: "/newVersion/images/kkdn-rgb-pixel-led.webp",
    specs: ["5V RGB multicolour", "50 waterproof pixels", "5 inch bulb gap", "Controller sold separately"],
  },
  {
    id: "flood-100",
    name: "Varshhaa Simbha 100W Flood Light",
    category: "Outdoor",
    eyebrow: "IP65 commercial outdoor lighting",
    moq: null,
    moqLabel: "Confirm on enquiry",
    unit: "pcs",
    featured: false,
    accent: "green",
    image: "/newVersion/images/varshhaa-100w-flood-light.webp",
    specs: ["100W rated power", "IP65 outdoor body", "Warm white / green", "1-year warranty"],
  },
  {
    id: "par-can",
    name: "BigDipper LPC007-h Par Can",
    category: "Stage",
    eyebrow: "Original emboss · RGBW 4-in-1",
    moq: 16,
    moqLabel: "16 pcs set",
    unit: "pcs",
    featured: true,
    accent: "magenta",
    image: "/newVersion/images/par-can-led-cutout.webp",
    specs: ["54 × 4W RGBW LEDs", "DMX512 / Auto / Sound", "4 / 8 channels", "190W rated power"],
  },
  {
    id: "power-supply",
    name: "LED Power Supplies",
    category: "Accessories",
    eyebrow: "For pixel and decorative lights",
    moq: null,
    moqLabel: "Confirm on enquiry",
    unit: "pcs",
    featured: false,
    accent: "steel",
    image: "/newVersion/images/led-power-supplies-cutout.webp",
    specs: ["Multiple wattages", "12V options", "Bulk availability", "Match to your load"],
  },
];

const categories = ["All", ...new Set(products.map((product) => product.category))];

function categoryTabId(category) {
  return `product-tab-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function productImage(product) {
  return product.image;
}

function ProductArt({ product, priority = false }) {
  return (
    <div className={`product-art art-${product.accent}`} aria-hidden="true">
      <img
        src={productImage(product)}
        alt=""
        width="1000"
        height="1000"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
      <small>{product.category}</small>
    </div>
  );
}

function Header({ cartCount, openCart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = event => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  return (
    <>
      <div className="utility-bar"><span>Wholesale enquiries</span><span>South India delivery</span><span>Mon–Sat · 10am–6pm</span></div>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="PK LIGHTS home">
          <img src="/newVersion/images/pk-lights-logo.png" alt="PK LIGHTS" />
          <span className="brand-copy"><b>PK LIGHTS</b><small>Lighting a brighter tomorrow</small></span>
        </a>
        <nav id="main-navigation" className={menuOpen ? "desktop-nav open" : "desktop-nav"} aria-label="Main navigation">
          <a href="#categories" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="/newVersion/downloads.html" onClick={() => setMenuOpen(false)}>Downloads</a>
          <a href="/newVersion/help.html" onClick={() => setMenuOpen(false)}>How We Work</a>
          <a href="/newVersion/help.html#languages" onClick={() => setMenuOpen(false)}>Languages</a>
          <a href="/newVersion/contact.html" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="mobile-nav-quote" href="/newVersion/quote.html" onClick={() => setMenuOpen(false)}>Detailed quote form</a>
        </nav>
        <div className="header-actions">
          <a className="call-btn" href="/newVersion/quote.html">Detailed quote</a>
          <button className="enquiry-nav" onClick={openCart}>WhatsApp Enquiry <span>{cartCount}</span></button>
          <button ref={menuButtonRef} className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="main-navigation">{menuOpen ? "Close" : "Menu"}</button>
        </div>
      </header>
    </>
  );
}

export default function HomePage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [copied, setCopied] = useState(false);
  const [buyer, setBuyer] = useState({ business: "", city: "", note: "" });
  const modalRef = useRef(null);
  const drawerRef = useRef(null);
  const dialogTriggerRef = useRef(null);

  function rememberDialogTrigger() {
    if (document.activeElement instanceof HTMLElement) dialogTriggerRef.current = document.activeElement;
  }

  function openDrawer() {
    rememberDialogTrigger();
    setDrawerOpen(true);
  }

  function openProduct(product) {
    rememberDialogTrigger();
    setSelected(product);
  }

  useEffect(() => {
    const dialog = selected ? modalRef.current : drawerOpen ? drawerRef.current : null;
    if (!dialog) return undefined;

    const previouslyFocused = dialogTriggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusable = () => Array.from(dialog.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ));

    window.requestAnimationFrame(() => {
      const firstControl = getFocusable()[0];
      (firstControl || dialog).focus();
    });

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        setSelected(null);
        setDrawerOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (!focusable.length) {
        event.preventDefault();
        dialog.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [selected, drawerOpen]);

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesSearch = !query || `${product.name} ${product.category} ${product.specs.join(" ")}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const cartItems = products.filter((product) => cart[product.id]);
  const cartCount = cartItems.length;

  function changeCategory(nextCategory) {
    setCategory(nextCategory);
  }

  function handleCategoryKey(event, index) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === "ArrowLeft") next = (index - 1 + categories.length) % categories.length;
    if (event.key === "ArrowRight") next = (index + 1) % categories.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = categories.length - 1;
    changeCategory(categories[next]);
    document.getElementById(categoryTabId(categories[next]))?.focus();
  }

  function addProduct(product) {
    setCart((current) => ({
      ...current,
      [product.id]: current[product.id] || product.moq || 1,
    }));
  }

  function updateQty(product, value) {
    const numeric = Math.max(product.moq || 1, Number(value) || product.moq || 1);
    setCart((current) => ({ ...current, [product.id]: numeric }));
  }

  function removeProduct(id) {
    setCart((current) => {
      const next = { ...current };
      delete next[id];
      return next;
    });
  }

  const summary = useMemo(() => {
    const lines = ["Hello PK LIGHTS, I would like a wholesale quote:"];
    if (buyer.business.trim()) lines.push(`Business: ${buyer.business.trim()}`);
    if (buyer.city.trim()) lines.push(`Location: ${buyer.city.trim()}`);
    lines.push("");
    cartItems.forEach((product, index) => {
      lines.push(`${index + 1}. ${product.name} — ${cart[product.id]} ${product.unit}`);
    });
    if (buyer.note.trim()) lines.push("", `Requirement: ${buyer.note.trim()}`);
    lines.push("", "Please share availability, wholesale rate, tax and delivery details.");
    return lines.join("\n");
  }, [buyer, cart, cartItems]);

  function openWhatsApp() {
    window.open(`https://wa.me/919947089167?text=${encodeURIComponent(summary)}`, "_blank", "noopener,noreferrer");
  }

  async function copySummary() {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main id="top">
      <Header cartCount={cartCount} openCart={openDrawer} />

      <section className="hero">
        <picture>
          <source media="(max-width: 760px)" srcSet="/newVersion/images/hero-warehouse-960.webp" />
          <img className="hero-image" src="/newVersion/images/hero-warehouse-1600.webp" alt="Organized wholesale lighting distribution warehouse with dispatch-ready stock" width="1600" height="900" loading="eager" fetchPriority="high" decoding="async" />
        </picture>
        <div className="hero-scrim" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> Wholesale LED &amp; electrical supply</div>
          <h1>Lighting solutions<br />for every project.</h1>
          <p>Reliable stock, trade pricing and daily dispatch for shops, contractors and project buyers across South India.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#categories">Explore products <span>→</span></a>
            <button className="secondary-btn" onClick={openDrawer}>Build WhatsApp enquiry</button>
          </div>
          <div className="hero-meta">
            <div><b>Wholesale only</b><span>For trade and bulk buyers</span></div>
            <div><b>MOQ applies</b><span>Volume-based supply</span></div>
            <div><b>Daily dispatch</b><span>Across South India</span></div>
          </div>
        </div>
      </section>

      <section className="category-showcase" id="categories">
        <div className="section-heading compact">
          <div><span className="kicker">Shop by category</span><h2>Explore our wholesale range.</h2></div>
          <p>Four focused categories make it easy to find the right products without unnecessary retail clutter.</p>
        </div>
        <div className="category-grid">
          {[
            ["LED & Commercial", "Bulbs, panels, flood and project lighting", "/newVersion/images/commercial-range-720.webp", "All"],
            ["Decorative Lighting", "Pendant, festive and architectural décor", "/newVersion/images/decorative-range-720.webp", "Decorative"],
            ["Technical Lighting", "Pixel, programmable, track and stage lighting", "/newVersion/images/commercial-range-720.webp", "Pixel LED"],
            ["Drivers & Electrical", "Power supplies, controllers and accessories", "/newVersion/images/decorative-range-720.webp", "Accessories"],
          ].map(([title, copy, image, filter], index) => (
            <a className={`category-card crop-${index + 1}`} href="#catalogue" key={title} onClick={() => setCategory(filter)}>
              <img src={image} alt="" width="720" height="540" loading="lazy" decoding="async" />
              <div><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><b>View products →</b></div>
            </a>
          ))}
        </div>
      </section>

      <section className="catalogue" id="catalogue">
        <div className="section-heading">
          <div>
            <span className="kicker">Selected products</span>
            <h2>Build your enquiry.</h2>
          </div>
          <p>Select the products you need. We’ll prepare one clear WhatsApp enquiry with quantities and MOQ.</p>
        </div>

        <div className="catalogue-tools">
          <div className="category-tabs" role="tablist" aria-label="Product categories">
            {categories.map((item, index) => (
              <button
                key={item}
                id={categoryTabId(item)}
                type="button"
                role="tab"
                aria-selected={category === item}
                aria-controls="product-grid-panel"
                tabIndex={category === item ? 0 : -1}
                className={category === item ? "active" : ""}
                onClick={() => changeCategory(item)}
                onKeyDown={event => handleCategoryKey(event, index)}
              >{item}</button>
            ))}
          </div>
          <span className="filter-hint" aria-hidden="true">Swipe categories →</span>
          <label className="search-box">
            <span className="sr-only">Search products or specifications</span>
            <input type="search" autoComplete="off" aria-label="Search products or specifications" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products or specs" />
          </label>
        </div>

        <div id="product-grid-panel" className="product-grid" role="tabpanel" aria-labelledby={categoryTabId(category)}>
          {visibleProducts.map((product) => {
            const inCart = Boolean(cart[product.id]);
            return (
              <article className="product-card" key={product.id}>
                <button className="art-button" onClick={() => openProduct(product)} aria-label={`View ${product.name} details`}>
                  <ProductArt product={product} />
                  {product.featured && <span className="popular-chip">Popular</span>}
                </button>
                <div className="product-content">
                  <span className="product-category">{product.eyebrow}</span>
                  <h3>{product.name}</h3>
                  <div className="moq-row"><span>MOQ</span><b>{product.moqLabel}</b></div>
                  <ul>
                    {product.specs.slice(0, 3).map((spec) => <li key={spec}>{spec}</li>)}
                  </ul>
                  <div className="card-actions">
                    <button className={inCart ? "add-btn added" : "add-btn"} onClick={() => { addProduct(product); openDrawer(); }}>
                      {inCart ? "Added ✓" : "Add to enquiry"}
                    </button>
                    <button className="details-btn" onClick={() => openProduct(product)}>Details</button>
                  </div>
                </div>
              </article>
            );
          })}
          {visibleProducts.length === 0 && (
            <div className="empty-state"><h3>No exact match</h3><p>Try another category or a shorter search term.</p></div>
          )}
        </div>
      </section>

      <section className="wholesale" id="wholesale">
        <div className="wholesale-copy">
          <span className="kicker">Built for trade</span>
          <h2>A lighting partner you can rely on.</h2>
          <p>PK LIGHTS supports electrical shops, resellers, contractors and event professionals with practical product guidance and dependable dispatch.</p>
          <button className="primary-btn" onClick={openDrawer}>Create wholesale enquiry <span>→</span></button>
        </div>
        <div className="service-list">
          <div><span>01</span><section><b>Reliable supply</b><p>Clear MOQ, availability and dispatch guidance for bulk buyers.</p></section></div>
          <div><span>02</span><section><b>Multi-category range</b><p>Commercial, decorative, programmable and electrical products.</p></section></div>
          <div><span>03</span><section><b>Direct WhatsApp support</b><p>Share requirements and receive product and quotation assistance.</p></section></div>
        </div>
      </section>

      <section className="before-order">
        <div>
          <span className="kicker">Before you order</span>
          <h2>Answers to the questions customers ask most.</h2>
          <p>Understand wholesale eligibility, MOQ, payment, dispatch, delivery area, returns and product confirmation before contacting us.</p>
        </div>
        <div className="answer-links">
          <a href="/newVersion/help.html#ordering"><span>01</span><b>How ordering works</b><small>From enquiry to dispatch</small></a>
          <a href="/newVersion/help.html#conditions"><span>02</span><b>Order conditions</b><small>MOQ, payment and returns</small></a>
          <a href="/newVersion/help.html#supplier-area"><span>03</span><b>Supplier & service area</b><small>South India delivery and India sourcing</small></a>
          <a href="/newVersion/help.html#languages"><span>04</span><b>Language assistance</b><small>English + 4 South Indian languages</small></a>
        </div>
      </section>

      <section className="cta-strip">
        <div><span className="kicker">Ready to source?</span><h2>Send your product list. We’ll handle the rest.</h2></div>
        <button className="whatsapp-btn large" onClick={openDrawer}>Start WhatsApp enquiry <span>→</span></button>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-brand"><img src="/newVersion/images/pk-lights-logo.png" alt="" /><div><b>PK LIGHTS</b><span>Wholesale Distributor in Electronic Lights</span></div></div>
        <div><small>Call / WhatsApp</small><a href="tel:+919947089167">+91 99470 89167</a></div>
        <div><small>Email</small><a href="mailto:pklights2017@gmail.com">pklights2017@gmail.com</a></div>
        <div><small>Business hours</small><span>Mon–Sat · 10am–6pm</span></div>
      </footer>

      {selected && (
        <div className="modal-backdrop" onMouseDown={() => setSelected(null)}>
          <div ref={modalRef} className="product-modal" role="dialog" aria-modal="true" aria-label={`${selected.name} details`} tabIndex="-1" onMouseDown={(event) => event.stopPropagation()}>
            <button className="close-btn" autoFocus onClick={() => setSelected(null)} aria-label="Close">×</button>
            <ProductArt product={selected} priority />
            <span className="product-category">{selected.category}</span>
            <h2>{selected.name}</h2>
            <p>{selected.eyebrow}</p>
            <div className="modal-moq"><span>Minimum order</span><b>{selected.moqLabel}</b></div>
            <div className="spec-list">
              {selected.specs.map((spec) => <div key={spec}><span>✓</span>{spec}</div>)}
            </div>
            <button className="primary-btn wide" onClick={() => { addProduct(selected); setSelected(null); setDrawerOpen(true); }}>Add to enquiry <span>→</span></button>
          </div>
        </div>
      )}

      {drawerOpen && (
      <div className="drawer-backdrop open" onMouseDown={() => setDrawerOpen(false)}>
        <aside ref={drawerRef} className="enquiry-drawer open" role="dialog" aria-modal="true" aria-label="Enquiry builder" tabIndex="-1" onMouseDown={(event) => event.stopPropagation()}>
          <div className="drawer-head">
            <div><span className="kicker">WhatsApp enquiry</span><h2>Your product list</h2></div>
            <button className="close-btn" autoFocus onClick={() => setDrawerOpen(false)} aria-label="Close">×</button>
          </div>

          {cartItems.length === 0 ? (
            <div className="drawer-empty">
              <h3>Your enquiry is empty</h3><p>Add products from the catalogue, then set the quantities you need.</p>
              <button className="primary-btn" onClick={() => setDrawerOpen(false)}>Browse products</button>
            </div>
          ) : (
            <>
              <div className="cart-list">
                {cartItems.map((product) => (
                  <div className="cart-item" key={product.id}>
                    <div className={`cart-icon art-${product.accent}`}><img src={productImage(product)} alt="" width="1000" height="1000" loading="lazy" decoding="async" /></div>
                    <div className="cart-product"><b>{product.name}</b><small>MOQ: {product.moqLabel}</small></div>
                    <label><span>Qty</span><input name={`quantity-${product.id}`} type="number" inputMode="numeric" min={product.moq || 1} value={cart[product.id]} onChange={(event) => updateQty(product, event.target.value)} /></label>
                    <button className="remove-btn" onClick={() => removeProduct(product.id)} aria-label={`Remove ${product.name}`}>×</button>
                  </div>
                ))}
              </div>

              <div className="buyer-form">
                <div className="field-row">
                  <label><span>Business name</span><input name="business" autoComplete="organization" placeholder="Optional" value={buyer.business} onChange={(e) => setBuyer({ ...buyer, business: e.target.value })} /></label>
                  <label><span>City / State</span><input name="location" autoComplete="address-level2" placeholder="Delivery location" value={buyer.city} onChange={(e) => setBuyer({ ...buyer, city: e.target.value })} /></label>
                </div>
                <label><span>Extra requirement</span><textarea name="requirement" autoComplete="off" placeholder="Colours, delivery date or other details…" value={buyer.note} onChange={(e) => setBuyer({ ...buyer, note: e.target.value })} /></label>
              </div>

              <div className="summary-preview">
                <div><b>Enquiry summary</b><button onClick={copySummary}>{copied ? "Copied ✓" : "Copy"}</button></div>
                <pre>{summary}</pre>
              </div>

              <div className="drawer-footer">
                <p>Opens WhatsApp with your summary. No order is placed automatically.</p>
                <button className="whatsapp-btn" onClick={openWhatsApp}>Send on WhatsApp</button>
              </div>
            </>
          )}
        </aside>
      </div>
      )}

      {cartCount > 0 && !drawerOpen && (
        <button className="floating-cart" onClick={openDrawer}>
          <span>{cartCount}</span><b>View enquiry</b><i>→</i>
        </button>
      )}
      <div className="mobile-contact-bar"><a href="tel:+919947089167">Call</a><button onClick={openDrawer}>WhatsApp Enquiry {cartCount ? `(${cartCount})` : ""}</button></div>
    </main>
  );
}
