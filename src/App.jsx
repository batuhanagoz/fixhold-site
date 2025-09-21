import { useState } from "react";
import { motion } from "framer-motion";

const t = {
  tr: {
    brandTag: "Fixture Systems",
    nav: ["Hakkımızda", "Hizmetler", "Portföy", "Süreç", "İletişim"],
    ctaGetQuote: "Teklif Al",
    heroTitle: "Hassas Fikstür Tasarımı & İmalatı",
    heroDesc:
      "CNC talaşlı imalat odaklı, kaynak/montaj/ölçüm fikstürlerinde uçtan uca çözüm: tasarım → üretim → montaj & test.",
    heroBtns: ["Portföyü Gör", "48 Saatte Demo Tasarım"],
    heroStats: [
      { k: "+/− 0.02 mm", v: "Hassasiyet" },
      { k: "< 3 hf.", v: "Tipik Teslim" },
      { k: "%60", v: "CNC Odak" },
      { k: "GD&T", v: "Uygunluk" },
    ],
    aboutTitle: "Neden FixHold?",
    aboutText:
      "FixHold, fikstür tasarımı ve imalat süreçlerinde uçtan uca çözümler sunar. Tasarımdan teknik resim hazırlamaya, montaj ve fonksiyonel test aşamalarına kadar her adımı kendi bünyemizde yönetiyoruz. Amacımız; tekrarlanabilir kalite, operatör ergonomisi ve çevrim süresinde verimlilik kazandırmaktır.",
    aboutBullets: [
      "Hızlı modelleme ve revizyon",
      "Esnek üretim kapasitesiyle farklı ihtiyaçlara uyum",
      "Montaj & fonksiyonel test süreçleri dahildir",
      "GD&T ve uluslararası standartlara tam uygunluk",
    ],
    aboutCards: [
      { title: "CNC İşleme Fikstürü", desc: "Örnek proje ekran görselleri & CAD renderları eklenecek." },
      { title: "Kaynak Fikstürü", desc: "Örnek proje ekran görselleri & CAD renderları eklenecek." },
      { title: "Montaj Fikstürü", desc: "Örnek proje ekran görselleri & CAD renderları eklenecek." },
      { title: "Kontrol Fikstürü", desc: "Örnek proje ekran görselleri & CAD renderları eklenecek." },
    ],
    servicesTitle: "Hizmetler",
    services: [
      { title: "Tasarım & Teknik Resim", desc: "3D/2D, malzeme listesi, GD&T ve proses notları." },
      { title: "Üretim Yönetimi", desc: "CNC, kaynak ve yüzey işlemlerinde güvenilir tedarik ve koordinasyon." },
      { title: "Montaj & Test", desc: "Fonksiyonel test, emniyet kontrolü ve devreye alma." },
      { title: "Revizyon & İyileştirme", desc: "Çevrim süresi ve ergonomi odaklı sürekli iyileştirme." },
      { title: "Dokümantasyon", desc: "Kullanım kılavuzu, bakım planı ve ölçüm raporları." },
      { title: "Hızlı Prototipleme", desc: "3D yazıcı ile düşük maliyetli doğrulama parçaları." },
    ],
    portfolioTitle: "Portföy (Örnek Renderlar)",
    portfolioCta: "Projenizi konuşalım →",
    portfolioCardDesc: "Operasyon: CNC işleme / Konumlandırma / Hızlı bağlama",
    processTitle: "Çalışma Sürecimiz",
    process: [
      { n: 1, t: "Analiz", d: "Parça, operasyon ve tolerans gereksinimlerinin incelenmesi." },
      { n: 2, t: "Tasarım", d: "3D tasarım, teknik resim, malzeme ve standart eleman seçimi." },
      { n: 3, t: "İmalat", d: "CNC/kaynak tedarik koordinasyonu, yüzey işlemleri." },
      { n: 4, t: "Montaj & Test", d: "Fonksiyonel test ve devreye alma, teslimat." },
    ],
    ctaStripTitle: "48 Saatte Ücretsiz Demo Tasarım",
    ctaStripDesc: "İlk görüşmeye özel: parça/operasyonunuza uygun konsept fikstür taslağı.",
    ctaStripBtn: "Hemen Başlayalım",
    contactTitle: "İletişim",
    contactDesc:
      "Projeniz için teknik çizim, parça fotoğrafları veya proses bilgisi paylaşın; 24 saat içinde dönüş yapalım.",
    formPlaceholders: { name: "Ad Soyad", email: "E-posta", subject: "Konu", message: "Mesajınız / Teknik gereksinimler" },
    formBtn: "Gönder",
    formNote: "Form demo amaçlıdır. Canlıya alındığında bir e-posta hizmetine bağlanacaktır.",
    footerLinks: ["Hakkımızda", "Hizmetler", "Portföy", "İletişim"],
  },
  en: {
    brandTag: "Fixture Systems",
    nav: ["About", "Services", "Portfolio", "Process", "Contact"],
    ctaGetQuote: "Get Quote",
    heroTitle: "Precision Fixture Design & Manufacturing",
    heroDesc:
      "End-to-end solutions for machining, welding, assembly and inspection fixtures: design → production → assembly & test.",
    heroBtns: ["View Portfolio", "48h Demo Design"],
    heroStats: [
      { k: "+/− 0.02 mm", v: "Precision" },
      { k: "< 3 wks", v: "Typical Lead Time" },
      { k: "60%", v: "Machining Focus" },
      { k: "GD&T", v: "Compliance" },
    ],
    aboutTitle: "Why FixHold?",
    aboutText:
      "FixHold provides end-to-end solutions for fixture design and manufacturing. From design and drawings to assembly and functional testing, we manage every step in-house. Our goal is repeatable quality, operator ergonomics, and cycle-time efficiency.",
    aboutBullets: [
      "Fast modelling and revisions",
      "Flexible production capacity for diverse needs",
      "Assembly & functional testing included",
      "Full compliance with GD&T and international standards",
    ],
    aboutCards: [
      { title: "Machining Fixture", desc: "Sample project screenshots & CAD renders will be added." },
      { title: "Welding Fixture", desc: "Sample project screenshots & CAD renders will be added." },
      { title: "Assembly Fixture", desc: "Sample project screenshots & CAD renders will be added." },
      { title: "Inspection Fixture", desc: "Sample project screenshots & CAD renders will be added." },
    ],
    servicesTitle: "Services",
    services: [
      { title: "Design & Drafting", desc: "3D/2D, BOM, GD&T and process notes." },
      { title: "Production Management", desc: "Reliable sourcing & coordination for machining, welding and finishing." },
      { title: "Assembly & Testing", desc: "Functional testing, safety checks and commissioning." },
      { title: "Revision & Improvement", desc: "Continuous improvement for ergonomics and cycle time." },
      { title: "Documentation", desc: "User manuals, maintenance plans and measurement reports." },
      { title: "Rapid Prototyping", desc: "Low-cost validation with 3D printing." },
    ],
    portfolioTitle: "Portfolio (Sample Renders)",
    portfolioCta: "Let's discuss your project →",
    portfolioCardDesc: "Operation: Machining / Positioning / Quick Clamping",
    processTitle: "Our Process",
    process: [
      { n: 1, t: "Analysis", d: "Review of part, operation and tolerance requirements." },
      { n: 2, t: "Design", d: "3D design, drawings, material and standard component selection." },
      { n: 3, t: "Production", d: "Machining/welding sourcing and surface finishing." },
      { n: 4, t: "Assembly & Test", d: "Functional testing and delivery." },
    ],
    ctaStripTitle: "Free Demo Design in 48h",
    ctaStripDesc: "A concept fixture tailored to your part/operation for the first meeting.",
    ctaStripBtn: "Start Now",
    contactTitle: "Contact",
    contactDesc:
      "Share technical drawings, part photos or process details; we’ll respond within 24 hours.",
    formPlaceholders: { name: "Full Name", email: "Email", subject: "Subject", message: "Your Message / Technical Requirements" },
    formBtn: "Send",
    formNote: "Demo form. Will be connected to an email service when live.",
    footerLinks: ["About", "Services", "Portfolio", "Contact"],
  },
  de: {
    brandTag: "Fixture Systems",
    nav: ["Über uns", "Dienstleistungen", "Portfolio", "Prozess", "Kontakt"],
    ctaGetQuote: "Angebot",
    heroTitle: "Präzisionsvorrichtungen – Konstruktion & Fertigung",
    heroDesc:
      "Komplettlösungen für Bearbeitungs-, Schweiß-, Montage- und Prüf-Vorrichtungen: Konstruktion → Produktion → Montage & Test.",
    heroBtns: ["Portfolio ansehen", "48h Demo-Design"],
    heroStats: [
      { k: "+/− 0.02 mm", v: "Genauigkeit" },
      { k: "< 3 Wo.", v: "Typische Lieferzeit" },
      { k: "60%", v: "Fokus Zerspanung" },
      { k: "GD&T", v: "Konformität" },
    ],
    aboutTitle: "Warum FixHold?",
    aboutText:
      "FixHold bietet End-to-End-Lösungen für Vorrichtungskonstruktion und -fertigung. Von Konstruktion und Zeichnungen bis Montage und Funktionsprüfung – alles aus einer Hand. Ziel: reproduzierbare Qualität, Ergonomie und effiziente Taktzeiten.",
    aboutBullets: [
      "Schnelles Modellieren und Revidieren",
      "Flexible Produktionskapazität für unterschiedliche Anforderungen",
      "Montage & Funktionsprüfung inklusive",
      "Volle Konformität mit GD&T und internationalen Normen",
    ],
    aboutCards: [
      { title: "Zerspan-Vorrichtung", desc: "Beispiel-Screens & CAD-Render folgen." },
      { title: "Schweißvorrichtung", desc: "Beispiel-Screens & CAD-Render folgen." },
      { title: "Montagevorrichtung", desc: "Beispiel-Screens & CAD-Render folgen." },
      { title: "Prüfvorrichtung", desc: "Beispiel-Screens & CAD-Render folgen." },
    ],
    servicesTitle: "Dienstleistungen",
    services: [
      { title: "Konstruktion & Zeichnungen", desc: "3D/2D, Stückliste, GD&T und Prozesshinweise." },
      { title: "Produktionsmanagement", desc: "Zuverlässige Beschaffung & Koordination für Zerspanung, Schweißen, Finish." },
      { title: "Montage & Tests", desc: "Funktionsprüfung, Sicherheitschecks und Inbetriebnahme." },
      { title: "Revision & Optimierung", desc: "Kontinuierliche Verbesserung für Ergonomie und Taktzeit." },
      { title: "Dokumentation", desc: "Bedienungsanleitungen, Wartungspläne und Messberichte." },
      { title: "Rapid Prototyping", desc: "Kostengünstige Validierung mit 3D-Druck." },
    ],
    portfolioTitle: "Portfolio (Beispiel-Render)",
    portfolioCta: "Projekt besprechen →",
    portfolioCardDesc: "Operation: Zerspanung / Positionierung / Schnellspannen",
    processTitle: "Unser Prozess",
    process: [
      { n: 1, t: "Analyse", d: "Überprüfung von Teil, Prozess und Toleranzen." },
      { n: 2, t: "Konstruktion", d: "3D-Design, Zeichnungen, Material- und Normteilwahl." },
      { n: 3, t: "Produktion", d: "Beschaffung Zerspanung/Schweißen und Oberflächenfinish." },
      { n: 4, t: "Montage & Test", d: "Funktionsprüfung und Lieferung." },
    ],
    ctaStripTitle: "Kostenloses Demo-Design in 48h",
    ctaStripDesc: "Ein Konzept für Ihre Teile/Prozesse zum Erstgespräch.",
    ctaStripBtn: "Jetzt starten",
    contactTitle: "Kontakt",
    contactDesc:
      "Teilen Sie Zeichnungen, Fotos oder Prozessdetails; Rückmeldung innerhalb von 24 Stunden.",
    formPlaceholders: { name: "Vollständiger Name", email: "E-Mail", subject: "Betreff", message: "Ihre Nachricht / Technische Anforderungen" },
    formBtn: "Senden",
    formNote: "Demo-Formular. Wird im Live-Betrieb mit einem E-Mail-Dienst verbunden.",
    footerLinks: ["Über uns", "Dienstleistungen", "Portfolio", "Kontakt"],
  },
};

export default function FixHoldSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("tr"); // "tr" | "en" | "de"

  const langOptions = [
    { v: "tr", label: "🇹🇷 TR" },
    { v: "en", label: "🇬🇧 EN" },
    { v: "de", label: "🇩🇪 DE" },
  ];

  const i = t[lang];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-neutral-900 grid place-items-center shadow-xl shadow-neutral-800/20">
              <span className="font-black text-white">FH</span>
            </div>
            <div className="leading-tight">
              <div className="font-extrabold tracking-wide text-lg">FIXHOLD</div>
              <div className="text-xs text-neutral-500">{i.brandTag}</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {i.nav.map((name, idx) => {
              const hrefs = ["#about", "#services", "#portfolio", "#process", "#contact"];
              return (
                <a key={name} href={hrefs[idx]} className="text-sm text-neutral-600 hover:text-neutral-900 transition">
                  {name}
                </a>
              );
            })}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-700 transition shadow-lg shadow-neutral-800/30"
            >
              {i.ctaGetQuote}
            </a>

            {/* Language selector */}
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="ml-3 border border-neutral-300 bg-white rounded-lg px-2 py-1 text-sm"
              aria-label="Language"
            >
              {langOptions.map((o) => (
                <option key={o.v} value={o.v}>
                  {o.label}
                </option>
              ))}
            </select>
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-neutral-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 border-t border-neutral-200 bg-white">
            {i.nav.map((name, idx) => {
              const hrefs = ["#about", "#services", "#portfolio", "#process", "#contact"];
              return (
                <a
                  key={name}
                  href={hrefs[idx]}
                  className="block py-2 text-neutral-600 hover:text-neutral-900"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </a>
              );
            })}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#contact"
                className="flex-1 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-700 transition"
              >
                {i.ctaGetQuote}
              </a>
              <select
                value={lang}
                onChange={(e) => {
                  setLang(e.target.value);
                  setMenuOpen(false);
                }}
                className="border border-neutral-300 bg-white rounded-lg px-2 py-2 text-sm"
                aria-label="Language"
              >
                {langOptions.map((o) => (
                  <option key={o.v} value={o.v}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.06),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            {i.heroTitle}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-5 max-w-2xl text-neutral-600">
            {i.heroDesc}
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="rounded-xl bg-neutral-200 px-5 py-3 text-sm font-semibold hover:bg-neutral-300 transition">
              {i.heroBtns[0]}
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-700 transition shadow-lg shadow-neutral-800/30"
            >
              {i.heroBtns[1]}
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {i.heroStats.map((s) => (
              <div key={s.v} className="rounded-2xl border border-neutral-200 px-4 py-5 bg-neutral-50">
                <div className="text-2xl font-extrabold text-neutral-900">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-neutral-500">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">{i.aboutTitle}</h2>
            <p className="mt-4 text-neutral-600">{i.aboutText}</p>
            <ul className="mt-6 space-y-3 text-neutral-700">
              {i.aboutBullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {i.aboutCards.map((c) => (
              <div key={c.title} className="rounded-2xl border border-neutral-200 p-5 bg-neutral-50">
                <div className="h-28 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 mb-4 grid place-items-center text-neutral-400 text-sm">
                  Görsel/Render Alanı
                </div>
                <div className="font-semibold text-neutral-900">{c.title}</div>
                <p className="text-sm text-neutral-600 mt-1">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold">{i.servicesTitle}</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {i.services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-neutral-200 p-6 bg-white">
                <div className="text-neutral-900 font-extrabold">{s.title}</div>
                <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">{i.portfolioTitle}</h2>
          <a href="#contact" className="text-sm text-neutral-700 hover:text-neutral-900">
            {i.portfolioCta}
          </a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="group rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50">
              <div className="aspect-[4/3] grid place-items-center text-neutral-400 text-sm">
                CAD/Render Placeholder #{n}
              </div>
              <div className="px-5 py-4 border-t border-neutral-200">
                <div className="font-semibold text-neutral-900">Fixture #{n}</div>
                <p className="text-sm text-neutral-600">{i.portfolioCardDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold">{i.processTitle}</h2>
          <ol className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {i.process.map((st) => (
              <li key={st.n} className="rounded-2xl border border-neutral-200 p-6 bg-white">
                <div className="h-8 w-8 grid place-items-center rounded-full bg-neutral-900 text-white font-extrabold">
                  {st.n}
                </div>
                <div className="mt-3 font-semibold text-neutral-900">{st.t}</div>
                <p className="text-sm text-neutral-600 mt-1">{st.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-12 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-neutral-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xl sm:text-2xl font-extrabold">{i.ctaStripTitle}</div>
              <div className="text-sm/6 opacity-90">{i.ctaStripDesc}</div>
            </div>
            <a href="#contact" className="rounded-xl bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-200">
              {i.ctaStripBtn}
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">{i.contactTitle}</h2>
            <p className="mt-4 text-neutral-600">{i.contactDesc}</p>
            <div className="mt-6 space-y-3 text-sm">
              <div>
                📧{" "}
                <a className="underline hover:text-neutral-900" href="mailto:info@fixhold.com">
                  info@fixhold.com
                </a>
              </div>
              <div>
                📞{" "}
                <a className="underline hover:text-neutral-900" href="tel:+905555555555">
                  +90 555 555 55 55
                </a>
              </div>
              <div>
                💼{" "}
                <a className="underline hover:text-neutral-900" href="#">
                  linkedin.com/company/fixhold
                </a>
              </div>
            </div>
          </div>
          <form className="rounded-2xl border border-neutral-200 p-6 bg-white grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="rounded-xl bg-neutral-50 px-4 py-3 outline-none border border-neutral-200 focus:border-neutral-900" placeholder={i.formPlaceholders.name} />
              <input className="rounded-xl bg-neutral-50 px-4 py-3 outline-none border border-neutral-200 focus:border-neutral-900" placeholder={i.formPlaceholders.email} />
            </div>
            <input className="rounded-xl bg-neutral-50 px-4 py-3 outline-none border border-neutral-200 focus:border-neutral-900" placeholder={i.formPlaceholders.subject} />
            <textarea rows={5} className="rounded-xl bg-neutral-50 px-4 py-3 outline-none border border-neutral-200 focus:border-neutral-900" placeholder={i.formPlaceholders.message}></textarea>
            <button type="button" className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-700 transition">
              {i.formBtn}
            </button>
            <p className="text-xs text-neutral-500">{i.formNote}</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-500">© {new Date().getFullYear()} FIXHOLD • Fixture Systems</div>
          <div className="flex items-center gap-4 text-sm">
            {i.footerLinks.map((fl, idx) => {
              const hrefs = ["#about", "#services", "#portfolio", "#contact"];
              return (
                <a key={fl} href={hrefs[idx]} className="hover:text-neutral-900">
                  {fl}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}
