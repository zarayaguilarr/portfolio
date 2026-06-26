import { Routes, Route } from 'react-router-dom'
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import Navigation from './components/section/Navigation'
import { ErrorBoundary } from './components/ErrorBoundary'
import './App.css'

function HomePage() {
  return <div style={{ padding: '20px', marginTop: '80px' }}>Home Page</div>
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