import { Routes, Route } from 'react-router-dom'
import { DarkModeProvider } from './contexts/DarkModeContext'
import { ErrorBoundary } from './components/ErrorBoundary'
import './App.css'

function HomePage() {
  return <div style={{ padding: '20px' }}>Home Page</div>
}

function App() {
  return (
    <ErrorBoundary>
      <DarkModeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </DarkModeProvider>
    </ErrorBoundary>
  )
}

export default App