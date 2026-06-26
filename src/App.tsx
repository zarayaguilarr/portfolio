import { Routes, Route } from 'react-router-dom'
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import { useThemeColors } from './hooks/useThemeColors'
import { colors } from './styles/colors'
import Navigation from './components/section/Navigation'
import About from './components/section/About'
import { divider } from './assets'
import { ErrorBoundary } from './components/ErrorBoundary'
import './App.css'

// Temporarily disable lazy loading to isolate issue
import Contact from './pages/Contact'
import Projects from './components/section/Projects'
import Experience from './components/section/Experience'
import Skills from './components/section/Skills'
import Footer from './components/Footer'

function HomePage() {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  return (
    <>
      <About />
      <Projects />
      <Experience />
      {/* Divider with gradient transitions */}
      <div className="w-full py-8 relative" style={{
        background: isDarkMode ? themeColors.background.gradientEnd : colors.white,
        transition: 'background 0.3s ease-in-out'
      }}>
        {/* Top gradient overlay to blend with Experience section */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: '60px',
            background: isDarkMode
              ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
              : `linear-gradient(180deg, ${colors.white} 0%, transparent 100%)`,
            zIndex: 1
          }}
        />
        {/* Bottom gradient overlay to blend with Skills section */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '200px',
            background: isDarkMode
              ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
              : `linear-gradient(180deg, transparent 0%, ${colors.pink[25]} 100%)`,
            zIndex: 1
          }}
        />
        <img
          src={divider}
          alt="Section divider"
          className="w-full h-auto relative"
          style={{
            zIndex: 2,
            filter: isDarkMode ? 'invert(1) hue-rotate(180deg)' : 'none',
            opacity: isDarkMode ? 0.7 : 1
          }}
          width="1200"
          height="100"
          loading="lazy"
        />
      </div>
      <Skills />
    </>
  )
}

function AppContent() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Navigation />
      <div className="app transition-colors duration-300" style={{ backgroundColor: isDarkMode ? '#101727' : undefined }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <main id="main-content" className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add your project routes here */}
            {/* Example: <Route path="/projects/my-project" element={<MyProject />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <DarkModeProvider>
        <AppContent />
      </DarkModeProvider>
    </ErrorBoundary>
  )
}

export default App