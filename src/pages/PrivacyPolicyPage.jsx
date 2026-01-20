import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo_marcheto.png'
import siteData from '../constants/siteData'

export default function PrivacyPolicyPage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-white text-2xl md:text-3xl font-bold">Privacy Policy</h1>
              <p className="text-white/60 text-sm">Informativa sul trattamento dei dati personali</p>
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

          {/* 1. Titolare */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Titolare del Trattamento</h2>
            <p className="text-gray-600 mb-4">Il Titolare del trattamento dei dati personali è:</p>
            <div className="bg-[#f5f5f0] rounded-xl p-5">
              <p className="font-semibold text-gray-900 mb-2">{siteData.fullName}</p>
              <div className="space-y-1 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {siteData.address.full}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteData.phone}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteData.email}
                </p>
              </div>
            </div>
          </section>

          {/* 2. Dati Raccolti */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Dati Raccolti e Finalità del Trattamento</h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">2.1 Dati forniti volontariamente dall'utente</h3>
            <p className="text-gray-600 mb-4">
              Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li><strong>Nome e Cognome</strong> - per identificare l'interessato</li>
              <li><strong>Indirizzo Email</strong> - per rispondere alle richieste</li>
              <li><strong>Numero di Telefono</strong> (facoltativo) - per contatti telefonici</li>
              <li><strong>Messaggio/Descrizione del Progetto</strong> - per comprendere le esigenze</li>
            </ul>

            <div className="bg-[#f5a623]/10 border-l-4 border-[#f5a623] rounded-r-xl p-4 mb-6">
              <p className="text-sm font-semibold text-gray-800 mb-2">Finalità: I dati vengono raccolti esclusivamente per:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Rispondere alle richieste di prenotazione</li>
                <li>• Fornire informazioni sui nostri servizi</li>
                <li>• Gestire la relazione commerciale</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">2.2 Base giuridica del trattamento</h3>
            <p className="text-gray-600">
              Il trattamento è basato sul <strong>consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso l'invio del modulo di contatto, e sulla <strong>esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).
            </p>
          </section>

          {/* 3. Modalità */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Modalità di Trattamento</h2>
            <p className="text-gray-600 mb-4">
              I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
            </p>
            <p className="text-gray-600">
              Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione.
            </p>
          </section>

          {/* 4. Conservazione */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Conservazione dei Dati</h2>
            <p className="text-gray-600 mb-4">
              I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le relazioni commerciali conseguenti.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Richieste di preventivo:</strong> I dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
              <li><strong>Rapporti contrattuali:</strong> I dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
              <li><strong>Richieste di informazioni:</strong> I dati vengono conservati per 12 mesi dalla risposta</li>
            </ul>
          </section>

          {/* 5. Comunicazione */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Comunicazione e Diffusione dei Dati</h2>
            <p className="text-gray-600 mb-4">
              I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
              <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
              <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
              <li>Autorità competenti in caso di richieste legittime previste per legge</li>
            </ul>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-red-800 mb-2">I tuoi dati NON verranno MAI:</p>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Venduti a terze parti</li>
                <li>• Condivisi con scopi di marketing</li>
                <li>• Utilizzati per invio di newsletter non richieste</li>
                <li>• Trasferiti fuori dall'Unione Europea</li>
              </ul>
            </div>
          </section>

          {/* 6. Diritti */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Diritti dell'Interessato</h2>
            <p className="text-gray-600 mb-4">In qualità di interessato, hai il diritto di:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
              <li><strong>Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
              <li><strong>Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
              <li><strong>Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
              <li><strong>Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
              <li><strong>Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
              <li><strong>Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
            </ul>

            <div className="bg-[#f5a623]/10 border-l-4 border-[#f5a623] rounded-r-xl p-4 mt-6">
              <p className="text-sm font-semibold text-gray-800 mb-2">Come esercitare i tuoi diritti:</p>
              <p className="text-sm text-gray-600">
                Puoi esercitare i tuoi diritti inviando una richiesta via email a <a href={`mailto:${siteData.email}`} className="text-[#f5a623] underline">{siteData.email}</a> o tramite raccomandata A/R all'indirizzo: {siteData.address.full}.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Risponderemo entro <strong>30 giorni</strong> dalla ricezione della richiesta.
              </p>
            </div>
          </section>

          {/* 7. Reclamo */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Diritto di Reclamo</h2>
            <p className="text-gray-600 mb-4">
              Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il trattamento dei tuoi dati violi il GDPR.
            </p>
            <div className="bg-[#f5f5f0] rounded-xl p-4">
              <p className="font-semibold text-gray-800 mb-2">Garante per la protezione dei dati personali:</p>
              <p className="text-sm text-gray-600">Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#f5a623] underline">www.garanteprivacy.it</a></p>
              <p className="text-sm text-gray-600">Email: garante@gpdp.it</p>
              <p className="text-sm text-gray-600">PEC: protocollo@pec.gpdp.it</p>
            </div>
          </section>

          {/* 8. Cookie */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Cookie e Tecnologie di Tracciamento</h2>
            <p className="text-gray-600">
              Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni, consulta la nostra <Link to="/cookie-policy" className="text-[#f5a623] underline">Cookie Policy</Link>.
            </p>
          </section>

          {/* 9. Modifiche */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Modifiche alla Privacy Policy</h2>
            <p className="text-gray-600">
              Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
            </p>
          </section>

          {/* 10. Contatti */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Contatti</h2>
            <p className="text-gray-600 mb-4">
              Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:
            </p>
            <div className="bg-[#f5f5f0] rounded-xl p-4 space-y-2">
              <p className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {siteData.email}
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteData.phone}
              </p>
            </div>
          </section>

          {/* Note legali */}
          <div className="text-center text-sm text-gray-400 pt-6 border-t border-gray-200">
            <p>
              Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018
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
            to="/cookie-policy"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#3d2314] bg-[#3d2314] text-white rounded-full hover:bg-[#2a1810] transition-colors"
          >
            Leggi la Cookie Policy
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
