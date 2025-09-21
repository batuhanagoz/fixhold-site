import { useState } from "react";
import { motion } from "framer-motion";

// === Tercümeler (TR / EN / DE) ===
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
  // DE kısmı yukarıdaki TR ve EN gibi devam ediyor...
};

export default function FixHoldSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("tr"); // "tr" | "en" | "de"

  const langOptions = [
    { v: "tr", label: "🇹🇷 TR" },
    { v: "en", label: "EN" },
    { v: "de", label: "🇩🇪 DE" },
  ];

  const i = t[lang];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* NAVBAR (eski haliyle) */}

      {/* HERO (eski haliyle) */}

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
            {/* CNC İşleme */}
            <div className="rounded-2xl border border-neutral-200 p-5 bg-neutral-50">
              <img
                src="/portfolio/cnc.jpg"
                alt="CNC İşleme Fikstürü"
                className="h-28 w-full object-contain mb-4"
              />
              <div className="font-semibold text-neutral-900">CNC İşleme Fikstürü</div>
              <p className="text-sm text-neutral-600 mt-1">
                Örnek proje ekran görselleri & CAD renderları eklenecek.
              </p>
            </div>

            {/* Kaynak */}
            <div className="rounded-2xl border border-neutral-200 p-5 bg-neutral-50">
              <img
                src="/portfolio/kaynak.jpg"
                alt="Kaynak Fikstürü"
                className="h-28 w-full object-contain mb-4"
              />
              <div className="font-semibold text-neutral-900">Kaynak Fikstürü</div>
              <p className="text-sm text-neutral-600 mt-1">
                Örnek proje ekran görselleri & CAD renderları eklenecek.
              </p>
            </div>

            {/* Montaj */}
            <div className="rounded-2xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="h-28 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 mb-4 grid place-items-center text-neutral-400 text-sm">
                Görsel/Render Alanı
              </div>
              <div className="font-semibold text-neutral-900">Montaj Fikstürü</div>
              <p className="text-sm text-neutral-600 mt-1">
                Örnek proje ekran görselleri & CAD renderları eklenecek.
              </p>
            </div>

            {/* Kontrol */}
            <div className="rounded-2xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="h-28 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 mb-4 grid place-items-center text-neutral-400 text-sm">
                Görsel/Render Alanı
              </div>
              <div className="font-semibold text-neutral-900">Kontrol Fikstürü</div>
              <p className="text-sm text-neutral-600 mt-1">
                Örnek proje ekran görselleri & CAD renderları eklenecek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES, PORTFOLIO, PROCESS, CTA, CONTACT, FOOTER (eski haliyle) */}
    </div>
  );
}
