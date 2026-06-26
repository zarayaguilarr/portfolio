import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import Navigation from './components/section/Navigation'
import About from './components/section/About'

function Content() {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <Navigation />
      <div style={{ backgroundColor: isDarkMode ? '#101727' : '#fff' }}>
        <About />
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