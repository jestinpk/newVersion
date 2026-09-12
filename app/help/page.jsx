"use client";

import { useState } from "react";
import SubpageShell from "../components/SubpageShell";

export const dynamic = "force-static";

const languageCopy = {
  en: {
    name: "English",
    title: "PK LIGHTS is a wholesale supplier—not a retail shop.",
    text: "We supply LED lighting, decorative products, programmable lighting and electrical accessories in bulk to shops, resellers, contractors and project buyers. Share the item, quantity and delivery location to receive availability and a quotation.",
    notes: ["Minimum order quantity applies.", "Full advance payment is required before dispatch.", "Confirmed orders are dispatched daily.", "Products sold are not returnable; verify details before ordering."],
  },
  ml: {
    name: "മലയാളം",
    title: "PK LIGHTS ഒരു ഹോൾസെയിൽ സപ്ലയറാണ്—റീട്ടെയിൽ ഷോപ്പ് അല്ല.",
    text: "LED ലൈറ്റുകൾ, ഡെക്കറേറ്റീവ് ലൈറ്റുകൾ, പ്രോഗ്രാമബിൾ ലൈറ്റിംഗ്, ഇലക്ട്രിക്കൽ ആക്സസറികൾ എന്നിവ കടകൾക്കും റീസെല്ലർമാർക്കും കോൺട്രാക്ടർമാർക്കും പ്രോജക്റ്റുകൾക്കും ബൾക്കായി നൽകുന്നു. ഉൽപ്പന്നം, എണ്ണം, ഡെലിവറി സ്ഥലം എന്നിവ അയച്ച് വിലയും ലഭ്യതയും ചോദിക്കാം.",
    notes: ["മിനിമം ഓർഡർ ക്വാണ്ടിറ്റി ബാധകം.", "ഡിസ്പാച്ചിന് മുമ്പ് പൂർണ്ണ അഡ്വാൻസ് പേയ്‌മെന്റ് ആവശ്യമാണ്.", "ഉറപ്പായ ഓർഡറുകൾ ദിവസേന ഡിസ്പാച്ച് ചെയ്യും.", "വിൽപ്പന കഴിഞ്ഞ ഉൽപ്പന്നങ്ങൾ തിരികെ എടുക്കില്ല; ഓർഡറിന് മുമ്പ് വിവരങ്ങൾ പരിശോധിക്കുക."],
  },
  ta: {
    name: "தமிழ்",
    title: "PK LIGHTS ஒரு மொத்த விற்பனை சப்ளையர்—சில்லறை கடை அல்ல.",
    text: "LED விளக்குகள், அலங்கார விளக்குகள், programmable lighting மற்றும் electrical accessories ஆகியவற்றை கடைகள், resellers, contractors மற்றும் project buyers-க்கு மொத்தமாக வழங்குகிறோம். பொருள், அளவு மற்றும் delivery location அனுப்பி availability மற்றும் quotation பெறலாம்.",
    notes: ["குறைந்தபட்ச ஆர்டர் அளவு பொருந்தும்.", "Dispatchக்கு முன் முழு advance payment தேவை.", "உறுதி செய்யப்பட்ட ஆர்டர்கள் தினசரி dispatch செய்யப்படும்.", "விற்ற பொருட்கள் திரும்ப பெறப்படாது; orderக்கு முன் விவரங்களை சரிபார்க்கவும்."],
  },
  kn: {
    name: "ಕನ್ನಡ",
    title: "PK LIGHTS ಸಗಟು ಪೂರೈಕೆದಾರ—ಚಿಲ್ಲರೆ ಅಂಗಡಿ ಅಲ್ಲ.",
    text: "LED ಲೈಟಿಂಗ್, ಅಲಂಕಾರಿಕ ಲೈಟ್ಸ್, programmable lighting ಮತ್ತು electrical accessories ಅನ್ನು ಅಂಗಡಿಗಳು, resellers, contractors ಮತ್ತು project buyers ಗೆ bulk ನಲ್ಲಿ ಪೂರೈಸುತ್ತೇವೆ. ಉತ್ಪನ್ನ, ಪ್ರಮಾಣ ಮತ್ತು delivery location ಕಳುಹಿಸಿ availability ಮತ್ತು quotation ಪಡೆಯಿರಿ.",
    notes: ["ಕನಿಷ್ಠ ಆರ್ಡರ್ ಪ್ರಮಾಣ ಅನ್ವಯಿಸುತ್ತದೆ.", "Dispatch ಮೊದಲು ಪೂರ್ಣ advance payment ಅಗತ್ಯ.", "ದೃಢಪಟ್ಟ ಆರ್ಡರ್‌ಗಳನ್ನು ಪ್ರತಿದಿನ dispatch ಮಾಡಲಾಗುತ್ತದೆ.", "ಮಾರಾಟವಾದ ಉತ್ಪನ್ನಗಳನ್ನು ಹಿಂದಿರುಗಿಸಲಾಗುವುದಿಲ್ಲ; order ಮೊದಲು ವಿವರ ಪರಿಶೀಲಿಸಿ."],
  },
  te: {
    name: "తెలుగు",
    title: "PK LIGHTS హోల్‌సేల్ సరఫరాదారు—రిటైల్ షాప్ కాదు.",
    text: "LED lighting, decorative lights, programmable lighting మరియు electrical accessories ను shops, resellers, contractors మరియు project buyers కు bulk లో సరఫరా చేస్తాము. Product, quantity మరియు delivery location పంపి availability, quotation పొందండి.",
    notes: ["Minimum order quantity వర్తిస్తుంది.", "Dispatch ముందు పూర్తి advance payment అవసరం.", "Confirmed orders ప్రతిరోజూ dispatch చేయబడతాయి.", "అమ్మిన products తిరిగి తీసుకోము; order ముందు వివరాలు పరిశీలించండి."],
  },
};
const languageKeys = Object.keys(languageCopy);

export default function HelpPage() {
  const [lang, setLang] = useState("en");
  const copy = languageCopy[lang];
  function changeLanguage(nextLanguage) {
    setLang(nextLanguage);
  }
  function handleLanguageKey(event, index) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === "ArrowLeft") next = (index - 1 + languageKeys.length) % languageKeys.length;
    if (event.key === "ArrowRight") next = (index + 1) % languageKeys.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = languageKeys.length - 1;
    changeLanguage(languageKeys[next]);
    document.getElementById(`language-tab-${languageKeys[next]}`)?.focus();
  }
  return (
    <SubpageShell eyebrow="Customer Help" title="How PK LIGHTS works" intro="A simple guide to our wholesale business, ordering process, delivery coverage and conditions.">
      <section className="info-content">
        <div className="quick-answer"><b>In one line</b><p>We help shops and project buyers source lighting products in wholesale quantities and send confirmed orders through parcel services.</p><a href="/newVersion/quote.html">Request a quotation →</a></div>
        <section id="ordering" className="info-section"><span className="kicker">Ordering</span><h2>Four simple steps</h2><div className="steps-grid">{[["01","Share requirement","Send product name/photo, required quantity and colour or specification."],["02","Confirm details","We check stock, MOQ, rate, tax and delivery availability."],["03","Complete payment","Full advance payment confirms the wholesale order."],["04","Receive dispatch","Confirmed orders are prepared and dispatched with parcel details."]].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
        <section id="conditions" className="info-section"><span className="kicker">Order conditions</span><h2>Know before confirming</h2><div className="condition-grid">{[["Wholesale only","We supply bulk quantities to shops, resellers, contractors and project buyers."],["MOQ applies","Minimum quantity depends on the product and packing."],["Advance payment","Full payment is required before dispatch. Credit and partial payment are not available."],["Verify before ordering","Confirm model, colour, wattage, quantity and other specifications before payment."],["No returns once sold","Products are not returnable after sale, so please check all details carefully."],["Prices may change","Wholesale rates depend on stock, quantity, tax and current supplier pricing."]].map(([t,d])=><article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></section>
        <section id="supplier-area" className="supplier-panel"><div><span className="kicker">Supplier & service area</span><h2>Sourcing across India. Focused service across South India.</h2><p>Our supplier network helps us source a broad range of lighting and electrical products. Customer delivery is mainly focused on Kerala, Tamil Nadu, Karnataka, Andhra Pradesh and Telangana, with parcel options for other Indian locations depending on the order.</p></div><div className="area-list"><span>Kerala</span><span>Tamil Nadu</span><span>Karnataka</span><span>Andhra Pradesh</span><span>Telangana</span><span>Other India locations — confirm first</span></div></section>
        <section id="languages" className="info-section language-section"><span className="kicker">Language assistance</span><h2>Understand before you order</h2><div className="language-tabs" role="tablist" aria-label="Choose language">{Object.entries(languageCopy).map(([key,item], index)=><button key={key} id={`language-tab-${key}`} type="button" role="tab" aria-selected={lang===key} aria-controls="language-content" tabIndex={lang===key?0:-1} className={lang===key?"active":""} onClick={()=>changeLanguage(key)} onKeyDown={event=>handleLanguageKey(event,index)}>{item.name}</button>)}</div><div id="language-content" className="language-copy" role="tabpanel" aria-live="polite" aria-labelledby={`language-tab-${lang}`} lang={lang}><h3>{copy.title}</h3><p>{copy.text}</p><ul>{copy.notes.map(note=><li key={note}>{note}</li>)}</ul></div></section>
        <section className="faq-section"><span className="kicker">Common questions</span><h2>Quick answers</h2>{[["Can I buy one piece?","Usually no. PK LIGHTS is wholesale-only and MOQ depends on the product."],["Do you show fixed prices online?","No. Rates can change with quantity, stock, tax and supplier pricing. Request the current wholesale quote."],["How do I identify the correct product?","Send a clear product photo, model, wattage, colour, quantity and intended use on WhatsApp."],["Do you deliver everywhere?","South India is our main service area. Other Indian locations can be checked based on parcel availability and order size."],["Can I return a product?","Products sold are not returnable. Confirm every specification before payment."],["How quickly will you reply?","WhatsApp is the fastest channel during business hours, Monday–Saturday, 10am–6pm."]].map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</section>
      </section>
    </SubpageShell>
  );
}
