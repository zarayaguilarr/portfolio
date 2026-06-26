import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'

function Content() {
  const { isDarkMode } = useDarkMode();
  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: isDarkMode ? '#1a1a1a' : '#fff', color: isDarkMode ? '#fff' : '#000', minHeight: '100vh' }}>
      <h1>Portfolio with DarkModeProvider</h1>
      <p>Dark mode: {isDarkMode ? 'ON' : 'OFF'}</p>
    </div>
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