import { Routes, Route } from 'react-router-dom'
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import Navigation from './components/section/Navigation'
import About from './components/section/About'
import { ErrorBoundary } from './components/ErrorBoundary'
import './App.css'

function HomePage() {
  return (
    <>
      <About />
      <div style={{ padding: '20px', minHeight: '500px' }}>More content here</div>
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
        </Routes>
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