import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import StreetFood from './components/StreetFood'
import MenuProducts from './components/MenuProducts'
import Reviews from './components/Reviews'
import InterSection from './components/InterSection'
import WhyChooseUs from './components/WhyChooseUs'
import InterBanner from './components/InterBanner'
import Footer from './components/Footer'
import MenuPage from './pages/MenuPage'

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <StreetFood />
      <MenuProducts />
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
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  )
}

export default App
