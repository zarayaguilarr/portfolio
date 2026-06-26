import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import Navigation from './components/section/Navigation'

function Content() {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <Navigation />
      <div style={{ padding: '40px', textAlign: 'center', backgroundColor: isDarkMode ? '#1a1a1a' : '#fff', color: isDarkMode ? '#fff' : '#000', minHeight: '100vh', marginTop: '80px' }}>
        <h1>Portfolio with Navigation</h1>
        <p>Dark mode: {isDarkMode ? 'ON' : 'OFF'}</p>
      </div>
    </>
  )
}

function App() {
  return (
    <DarkModeProvider>
      <Content />
    </DarkModeProvider>
  )
}

export default App