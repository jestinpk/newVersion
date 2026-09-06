import SubpageShell from "../components/SubpageShell";

export default function DownloadsPage() {
  return (
    <SubpageShell eyebrow="Downloads" title="Project resources" intro="Access available PK LIGHTS catalogues and design resources from the existing downloads service.">
      <section className="info-content">
        <div className="download-feature"><div><span className="kicker">Live file library</span><h2>Catalogues, designs and project files</h2><p>The PK LIGHTS downloads portal checks the connected file library and shows available PDF, SVG and PNG resources. Files can be previewed before downloading.</p><a className="primary-btn" href="https://pklights.in/downloads.html" target="_blank" rel="noreferrer">Open downloads portal <span>→</span></a></div><div className="format-list"><article><b>PDF</b><span>Complete catalogues and collections</span></article><article><b>SVG</b><span>Scalable design resources</span></article><article><b>PNG</b><span>Images and ready-to-view designs</span></article></div></div>
        <div className="download-note"><b>Can’t find a product file?</b><p>Send the product name or photo on WhatsApp. We can confirm whether a catalogue, specification sheet or design file is available.</p><a href="/quote">Ask for a product file →</a></div>
      </section>
    </SubpageShell>
  );
}
