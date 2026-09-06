import SubpageShell from "../components/SubpageShell";

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <SubpageShell eyebrow="Contact" title="Talk directly with PK LIGHTS" intro="For availability, product matching, MOQ and current wholesale quotations.">
      <section className="info-content">
        <div className="contact-grid">
          <a href="https://wa.me/919947089167?text=Hi%20PK%20LIGHTS%2C%20I%20have%20a%20wholesale%20enquiry." target="_blank" rel="noreferrer"><span>Fastest response</span><h2>WhatsApp</h2><p>Share product photos, quantity and delivery location.</p><b>+91 99470 89167 →</b></a>
          <a href="tel:+919947089167"><span>Business hours</span><h2>Call</h2><p>Monday–Saturday, 10am–6pm.</p><b>Call PK LIGHTS →</b></a>
          <a href="mailto:pklights2017@gmail.com"><span>Documents</span><h2>Email</h2><p>For lists, project details and formal requirements.</p><b>pklights2017@gmail.com →</b></a>
        </div>
        <div className="contact-checklist"><div><span className="kicker">For a faster answer</span><h2>Include these details</h2></div><ul><li>Product name, model or clear photo</li><li>Required quantity</li><li>Colour, wattage or specification</li><li>Shop / company name</li><li>Delivery city and state</li><li>Required delivery timeline</li></ul></div>
      </section>
    </SubpageShell>
  );
}
