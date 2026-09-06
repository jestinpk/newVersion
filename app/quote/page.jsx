"use client";

import { useMemo, useState } from "react";
import SubpageShell from "../components/SubpageShell";

export const dynamic = "force-static";

export default function QuotePage() {
  const [form, setForm] = useState({name:"",business:"",phone:"",category:"",quantity:"",location:"",message:""});
  const message = useMemo(()=>[
    "Hello PK LIGHTS, I would like a wholesale quotation:",
    form.name && `Name: ${form.name}`, form.business && `Business: ${form.business}`,
    form.phone && `Phone: ${form.phone}`, form.category && `Category: ${form.category}`,
    form.quantity && `Estimated quantity: ${form.quantity}`, form.location && `Delivery location: ${form.location}`,
    form.message && `Requirement: ${form.message}`
  ].filter(Boolean).join("\n"),[form]);
  function update(key,value){setForm(current=>({...current,[key]:value}))}
  function submit(event){event.preventDefault();window.open(`https://wa.me/919947089167?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer")}
  return (
    <SubpageShell eyebrow="Wholesale quotation" title="Tell us what you need" intro="Provide the essential product and delivery details. Your request will open as a structured WhatsApp message.">
      <section className="info-content quote-layout">
        <form className="quote-form" onSubmit={submit}>
          <div className="field-row"><label><span>Your name *</span><input name="name" autoComplete="name" required value={form.name} onChange={e=>update("name",e.target.value)} /></label><label><span>Shop / company</span><input name="business" autoComplete="organization" value={form.business} onChange={e=>update("business",e.target.value)} /></label></div>
          <div className="field-row"><label><span>Phone / WhatsApp *</span><input name="phone" autoComplete="tel" inputMode="tel" required type="tel" value={form.phone} onChange={e=>update("phone",e.target.value)} /></label><label><span>Product category *</span><select name="category" autoComplete="off" required value={form.category} onChange={e=>update("category",e.target.value)}><option value="">Select category</option><option>LED & Commercial</option><option>Decorative Lighting</option><option>Pixel & Programmable</option><option>Stage & Event Lighting</option><option>Drivers & Electrical</option><option>Other / Custom sourcing</option></select></label></div>
          <div className="field-row"><label><span>Estimated quantity</span><input name="quantity" inputMode="numeric" autoComplete="off" placeholder="Example: 100 pcs / 10 cartons" value={form.quantity} onChange={e=>update("quantity",e.target.value)} /></label><label><span>Delivery city / state *</span><input name="location" autoComplete="address-level2" required value={form.location} onChange={e=>update("location",e.target.value)} /></label></div>
          <label><span>Product details *</span><textarea name="message" autoComplete="off" required placeholder="Model, wattage, colour, intended use or other details" value={form.message} onChange={e=>update("message",e.target.value)} /></label>
          <button className="whatsapp-btn large" type="submit">Continue on WhatsApp →</button><small>No order is placed automatically. We will confirm stock, MOQ, rate, tax and dispatch details.</small>
        </form>
        <aside className="quote-aside"><span className="kicker">Before submitting</span><h2>What happens next?</h2><ol><li>We review the product and quantity.</li><li>We confirm availability, MOQ and current wholesale rate.</li><li>You verify specifications and complete advance payment.</li><li>We prepare and dispatch the confirmed order.</li></ol><a href="/newVersion/help.html#conditions">Read order conditions →</a></aside>
      </section>
    </SubpageShell>
  );
}
