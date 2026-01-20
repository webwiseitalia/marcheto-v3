import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import StreetFood from './components/StreetFood'
import Reviews from './components/Reviews'
import InterSection from './components/InterSection'
import WhyChooseUs from './components/WhyChooseUs'
import InterBanner from './components/InterBanner'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import MenuPage from './pages/MenuPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import CookiePolicyPage from './pages/CookiePolicyPage'

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <StreetFood />
      <Reviews />
      <InterSection />
      <WhyChooseUs />
      <InterBanner />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
      </Routes>
      <CookieBanner />
    </>
  )
}

export default App
