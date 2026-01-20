import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const location = useLocation()

  // Verifica se siamo su una pagina policy (dove il blur non deve apparire)
  const isPolicyPage = location.pathname === '/privacy-policy' || location.pathname === '/cookie-policy'

  useEffect(() => {
    // Controlla se l'utente ha già dato una risposta
    const consent = localStorage.getItem(siteData.cookie.consentKey)
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(siteData.cookie.consentKey, 'accepted')
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem(siteData.cookie.consentKey, 'rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Overlay blur - solo se NON siamo su pagine policy */}
      {!isPolicyPage && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
          aria-hidden="true"
        />
      )}

      {/* Banner Cookie */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[999] p-4 md:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-title"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header con icona */}
          <div className="bg-[#3d2314] px-6 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f5a623]/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 id="cookie-banner-title" className="text-white font-bold text-lg">
              Informativa sui Cookie
            </h2>
          </div>

          {/* Contenuto */}
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Questo sito utilizza esclusivamente <strong>cookie tecnici</strong> necessari al corretto funzionamento.
              Non utilizziamo cookie di profilazione o tracciamento.
            </p>

            <p className="text-gray-500 text-sm mb-6">
              Puoi leggere la nostra{' '}
              <Link
                to="/cookie-policy"
                className="text-[#f5a623] underline hover:text-[#d4891c] transition-colors"
              >
                Cookie Policy
              </Link>
              {' '}e la{' '}
              <Link
                to="/privacy-policy"
                className="text-[#f5a623] underline hover:text-[#d4891c] transition-colors"
              >
                Privacy Policy
              </Link>
              {' '}per maggiori informazioni.
            </p>

            {/* Bottoni - stessa dimensione e stile */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 px-6 py-3 bg-[#3d2314] text-white font-semibold rounded-full hover:bg-[#2a1810] transition-colors text-center"
              >
                Accetta
              </button>
              <button
                onClick={handleReject}
                className="flex-1 px-6 py-3 bg-[#3d2314] text-white font-semibold rounded-full hover:bg-[#2a1810] transition-colors text-center"
              >
                Rifiuta
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
