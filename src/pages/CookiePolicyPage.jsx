import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo_marcheto.webp'
import siteData from '../constants/siteData'

export default function CookiePolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Header */}
      <header className="w-full bg-[#3d2314] py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Torna alla Home
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#f5a623]/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-white text-2xl md:text-3xl font-bold">Cookie Policy</h1>
              <p className="text-white/60 text-sm">Informativa sull'utilizzo dei cookie</p>
            </div>
          </div>
        </div>
      </header>

      {/* Contenuto */}
      <main className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          {/* Data aggiornamento */}
          <p className="text-gray-400 text-sm mb-8">
            Ultimo aggiornamento: {siteData.legal.lastUpdate}
          </p>

          {/* Banner Privacy Friendly */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-10">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold text-green-800 mb-1">Sito Privacy-Friendly</p>
                <p className="text-sm text-green-700">
                  Questo sito web utilizza <strong>solo cookie tecnici</strong> necessari al funzionamento. <strong>Non utilizziamo cookie di profilazione, tracciamento o analisi</strong>. La tua privacy è protetta e non serve il tuo consenso per la navigazione.
                </p>
              </div>
            </div>
          </div>

          {/* 1. Cosa sono i Cookie */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Cosa sono i Cookie</h2>
            <p className="text-gray-600">
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone) quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune informazioni sulle tue preferenze o azioni passate.
            </p>
          </section>

          {/* 2. Tipologie */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Tipologie di Cookie</h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">2.1 Cookie Tecnici</h3>
            <p className="text-gray-600 mb-4">
              Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza questi cookie, il sito potrebbe non funzionare correttamente.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-4 mb-6">
              <p className="text-sm font-semibold text-green-800 mb-2">Cookie tecnici utilizzati su questo sito:</p>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Cookie di navigazione e di sessione</li>
                <li>• Cookie per memorizzare la preferenza dell'interfaccia</li>
              </ul>
              <p className="text-xs text-green-600 mt-3 italic">
                Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">2.2 Cookie Analitici</h3>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <span className="font-semibold text-red-800">NON UTILIZZATI</span>
              </div>
              <p className="text-sm text-red-700">
                Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">2.3 Cookie di Profilazione</h3>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <span className="font-semibold text-red-800">NON UTILIZZATI</span>
              </div>
              <p className="text-sm text-red-700">
                Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">2.4 Cookie di Terze Parti</h3>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <span className="font-semibold text-red-800">NON UTILIZZATI</span>
              </div>
              <p className="text-sm text-red-700">
                Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).
              </p>
            </div>
          </section>

          {/* 3. Cookie Utilizzati */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Cookie Utilizzati su Questo Sito</h2>
            <p className="text-gray-600 mb-4">
              Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">Nome Cookie</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">Tipologia</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">Finalità</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">{siteData.cookie.consentKey}</td>
                    <td className="border border-gray-200 px-4 py-3">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Tecnico</span>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                      Memorizza lo stato di espansione/chiusura della barra laterale per migliorare l'esperienza di navigazione
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">7 giorni</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#f5a623]/10 border-l-4 border-[#f5a623] rounded-r-xl p-4 mt-6">
              <p className="text-sm text-gray-700">
                <strong>Nota importante:</strong> I cookie tecnici come "{siteData.cookie.consentKey}" sono essenziali per il funzionamento del sito e non richiedono il consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
              </p>
            </div>
          </section>

          {/* 4. Come Gestire */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Come Gestire i Cookie</h2>
            <p className="text-gray-600 mb-4">
              Anche se i cookie tecnici non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni del tuo browser:
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Disabilitare i cookie tramite il browser:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li><strong>Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
              <li><strong>Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web</li>
              <li><strong>Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
              <li><strong>Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci e elimina cookie</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <p className="text-sm text-yellow-800">
                <strong>Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la qualità dell'esperienza di navigazione.
              </p>
            </div>
          </section>

          {/* 5. Link Esterni */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Link a Siti Esterni</h2>
            <p className="text-gray-600">
              Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.
            </p>
          </section>

          {/* 6. Aggiornamenti */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Aggiornamenti della Cookie Policy</h2>
            <p className="text-gray-600 mb-4">
              Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate attraverso un avviso pubblicato su questa pagina.
            </p>
            <p className="text-gray-600">
              Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull'utilizzo dei cookie sul nostro sito.
            </p>
          </section>

          {/* 7. Base Normativa */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Base Normativa</h2>
            <p className="text-gray-600 mb-4">Questa Cookie Policy è redatta in conformità a:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
              <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
              <li>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
              <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
            </ul>
          </section>

          {/* 8. Contatti */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Contatti</h2>
            <p className="text-gray-600 mb-4">
              Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:
            </p>
            <div className="bg-[#f5f5f0] rounded-xl p-5">
              <p className="font-semibold text-gray-900 mb-3">{siteData.fullName}</p>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-gray-600 text-sm">
                  <svg className="w-4 h-4 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {siteData.address.full}
                </p>
                <p className="flex items-center gap-2 text-gray-600 text-sm">
                  <svg className="w-4 h-4 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email: <a href={`mailto:${siteData.email}`} className="text-[#f5a623] underline">{siteData.email}</a>
                </p>
                <p className="flex items-center gap-2 text-gray-600 text-sm">
                  <svg className="w-4 h-4 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Tel: {siteData.phone}
                </p>
              </div>
            </div>
          </section>

          {/* Zero Tracciamento */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center mt-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Zero Tracciamento</h3>
            <p className="text-green-700 text-sm">
              Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online
            </p>
          </div>
        </div>

        {/* Bottoni navigazione */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-400 transition-colors"
          >
            Torna alla Home
          </Link>
          <Link
            to="/privacy-policy"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#3d2314] bg-[#3d2314] text-white rounded-full hover:bg-[#2a1810] transition-colors"
          >
            Leggi la Privacy Policy
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="w-full py-12 md:py-16 relative"
        style={{
          backgroundColor: '#2a2a2a',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          {/* Titolo grande con numero telefono */}
          <div className="text-center mb-12">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide">
              {siteData.tagline}{' '}
              <a href={`tel:${siteData.phoneClean}`} className="underline hover:text-[#f5a623] transition-colors">
                {siteData.phone}
              </a>
            </h2>
          </div>

          {/* Griglia: Logo, Contatti, Orari, Social */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <img
                src={logo}
                alt={siteData.name}
                title={`Logo ${siteData.name}`}
                loading="lazy"
                width={128}
                height={64}
                className="h-16"
              />
            </div>

            {/* Vieni a trovarci */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-3 text-sm">
                Vieni a trovarci
              </h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p>{siteData.address.street} {siteData.address.cap},</p>
                <p>{siteData.address.city} ({siteData.address.province})</p>
              </div>
            </div>

            {/* Orari apertura */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-3 text-sm">
                Orari apertura
              </h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p>{siteData.openingHours.general}</p>
                <p>({siteData.openingHours.closed})</p>
              </div>
            </div>

            {/* Social */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-3 text-sm">
                Seguici e resta aggiornato
              </h4>
              <div className="flex gap-3 justify-center md:justify-start">
                <a
                  href={siteData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white hover:bg-[#f5a623] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </a>
                <a
                  href={siteData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white hover:bg-[#f5a623] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Linea separatrice */}
          <div className="w-full h-px bg-gray-700 mb-6" />

          {/* Bottom: Link e Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Link navigazione */}
            <div className="flex gap-6 text-gray-400 text-sm">
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Home</Link>
              <Link to="/menu" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Menu</Link>
              <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/cookie-policy" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Powered by{' '}
              <a href="https://webwiseitalia.com" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-[#f5a623] transition-colors">
                WebWise
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
