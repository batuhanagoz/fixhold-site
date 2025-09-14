import { useState } from "react";
import { motion } from "framer-motion";

export default function FixHoldSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Hakkımızda", href: "#about" },
    { name: "Hizmetler", href: "#services" },
    { name: "Portföy", href: "#portfolio" },
    { name: "Süreç", href: "#process" },
    { name: "İletişim", href: "#contact" },
  ];

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
              <div className="text-xs text-neutral-500">Fixture Systems</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-neutral-600 hover:text-neutral-900 transition">
                {item.name}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-700 transition shadow-lg shadow-neutral-800/30">
              Teklif Al
            </a>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-neutral-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 border-t border-neutral-200 bg-white">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="block py-2 text-neutral-600 hover:text-neutral-900" onClick={() => setMenuOpen(false)}>
                {item.name}
              </a>
            ))}
            <a href="#contact" className="block rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-700 transition">
              Teklif Al
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.06),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Hassas Fikstür Tasarımı & İmalatı
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-5 max-w-2xl text-neutral-600">
            CNC talaşlı imalat odaklı, kaynak/montaj/ölçüm fikstürlerinde uçtan uca çözüm: tasarım → fason imalat → montaj & test.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="rounded-xl bg-neutral-200 px-5 py-3 text-sm font-semibold hover:bg-neutral-300 transition">Portföyü Gör</a>
            <a href="#contact" className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-700 transition shadow-lg shadow-neutral-800/30">48 Saatte Demo Tasarım</a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { k: "+/− 0.02 mm", v: "Hassasiyet" },
              { k: "< 3 hf.", v: "Tipik Teslim" },
              { k: "%60", v: "CNC Odak" },
              { k: "GD&T", v: "Uygunluk" },
            ].map((i) => (
              <div key={i.v} className="rounded-2xl border border-neutral-200 px-4 py-5 bg-neutral-50">
                <div className="text-2xl font-extrabold text-neutral-900">{i.k}</div>
                <div className="text-xs uppercase tracking-widest text-neutral-500">{i.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Neden FixHold?</h2>
            <p className="mt-4 text-neutral-600">
              4+ yıllık kalıp, fikstür ve CNC deneyimiyle; tasarım doğrulama, teknik resim, tedarik ve montaj-test aşamalarını tek elde topluyoruz. Amacımız: tekrar edilebilirlik, ergonomi ve çevrim süresi kazanımı.
            </p>
            <ul className="mt-6 space-y-3 text-neutral-700">
              <li>• SolidWorks tabanlı hızlı tasarım ve revizyon</li>
              <li>• Fason imalat ağı ile esnek kapasite</li>
              <li>• Montaj & fonksiyonel test dahildir</li>
              <li>• GD&T ve ISO standartlarına uygunluk</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {["CNC İşleme Fikstürü","Kaynak Fikstürü","Montaj Fikstürü","Kontrol Fikstürü"].map((t)=> (
              <div key={t} className="rounded-2xl border border-neutral-200 p-5 bg-neutral-50">
                <div className="h-28 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 mb-4 grid place-items-center text-neutral-400 text-sm">Görsel/Render Alanı</div>
                <div className="font-semibold text-neutral-900">{t}</div>
                <p className="text-sm text-neutral-600 mt-1">Örnek proje ekran görselleri & CAD renderları eklenecek.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Hizmetler</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Tasarım & Teknik Resim", desc: "SolidWorks ile 3D/2D, malzeme listesi, GD&T ve proses notları." },
              { title: "Fason İmalat Yönetimi", desc: "CNC, kaynak ve yüzey işlemlerinde tedarik koordinasyonu." },
              { title: "Montaj & Test", desc: "Fonksiyonel test, emniyet kontrolü ve devreye alma." },
              { title: "Revizyon & İyileştirme", desc: "Çevrim süresi ve ergonomi odaklı sürekli iyileştirme." },
              { title: "Dokümantasyon", desc: "Kullanım kılavuzu, bakım planı ve ölçüm raporları." },
              { title: "Hızlı Prototipleme", desc: "3D yazıcı ile düşük maliyetli doğrulama parçaları." },
            ].map((s) => (
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
          <h2 className="text-2xl sm:text-3xl font-extrabold">Portföy (Örnek Renderlar)</h2>
          <a href="#contact" className="text-sm text-neutral-700 hover:text-neutral-900">Projenizi konuşalım →</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i)=> (
            <div key={i} className="group rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50">
              <div className="aspect-[4/3] grid place-items-center text-neutral-400 text-sm">
                CAD/Render Yer Tutucu #{i}
              </div>
              <div className="px-5 py-4 border-t border-neutral-200">
                <div className="font-semibold text-neutral-900">Fixture #{i}</div>
                <p className="text-sm text-neutral-600">Operasyon: CNC işleme / Konumlandırma / Hızlı bağlama</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Çalışma Sürecimiz</h2>
          <ol className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: 1, t: "Analiz", d: "Parça, operasyon ve tolerans gereksinimlerinin incelenmesi." },
              { n: 2, t: "Tasarım", d: "3D tasarım, teknik resim, malzeme ve standart eleman seçimi." },
              { n: 3, t: "İmalat", d: "CNC/kaynak tedarik koordinasyonu, yüzey işlemleri." },
              { n: 4, t: "Montaj & Test", d: "Fonksiyonel test ve devreye alma, teslimat." },
            ].map((st) => (
              <li key={st.n} className="rounded-2xl border border-neutral-200 p-6 bg-white">
                <div className="h-8 w-8 grid place-items-center rounded-full bg-neutral-900 text-white font-extrabold">{st.n}</div>
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
              <div className="text-xl sm:text-2xl font-extrabold">48 Saatte Ücretsiz Demo Tasarım</div>
              <div className="text-sm/6 opacity-90">İlk görüşmeye özel: parça/operasyonunuza uygun konsept fikstür taslağı.</div>
            </div>
            <a href="#contact" className="rounded-xl bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-200">Hemen Başlayalım</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">İletişim</h2>
            <p className="mt-4 text-neutral-600">Projeniz için teknik çizim, parça fotoğrafları veya proses bilgisi paylaşın; 24 saat içinde dönüş yapalım.</p>
            <div className="mt-6 space-y-3 text-sm">
              <div>📧 <a className="underline hover:text-neutral-900" href="mailto:info@fixhold.com">info@fixhold.com</a></div>
              <div>📞 <a className="underline hover:text-neutral-900" href="tel:+905555555555">+90 555 555 55 55</a></div>
              <div>💼 LinkedIn: <a className="underline hover:text-neutral-900" href="#">linkedin.com/company/fixhold</a></div>
            </div>
          </div>
          <form className="rounded-2xl border border-neutral-200 p-6 bg-white grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="rounded-xl bg-neutral-50 px-4 py-3 outline-none border border-neutral-200 focus:border-neutral-900" placeholder="Ad Soyad"/>
              <input className="rounded-xl bg-neutral-50 px-4 py-3 outline-none border border-neutral-200 focus:border-neutral-900" placeholder="E-posta"/>
            </div>
            <input className="rounded-xl bg-neutral-50 px-4 py-3 outline-none border border-neutral-200 focus:border-neutral-900" placeholder="Konu"/>
            <textarea rows={5} className="rounded-xl bg-neutral-50 px-4 py-3 outline-none border border-neutral-200 focus:border-neutral-900" placeholder="Mesajınız / Teknik gereksinimler"></textarea>
            <button type="button" className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-700 transition">Gönder</button>
            <p className="text-xs text-neutral-500">Form demo amaçlıdır. Canlıya alındığında bir e-posta hizmetine bağlanacaktır.</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-500">© {new Date().getFullYear()} FIXHOLD • Fixture Systems</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#about" className="hover:text-neutral-900">Hakkımızda</a>
            <a href="#services" className="hover:text-neutral-900">Hizmetler</a>
            <a href="#portfolio" className="hover:text-neutral-900">Portföy</a>
            <a href="#contact" className="hover:text-neutral-900">İletişim</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
