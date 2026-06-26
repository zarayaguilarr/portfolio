import { Routes, Route } from 'react-router-dom'
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import Navigation from './components/section/Navigation'
import About from './components/section/About'
import Experience from './components/section/Experience'
import Skills from './components/section/Skills'
import Footer from './components/Footer'
import Contact from './pages/Contact'

function HomePage() {
  return (
    <>
      <About />
      <Experience />
      <Skills />
    </>
  )
}

function AppContent() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Navigation />
      <div style={{ backgroundColor: isDarkMode ? '#101727' : '#fff' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  )
}

export default App