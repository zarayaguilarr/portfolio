import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import Navigation from './components/section/Navigation'
import About from './components/section/About'
import Footer from './components/Footer'

function Content() {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <Navigation />
      <div style={{ backgroundColor: isDarkMode ? '#1a1a1a' : '#fff' }}>
        <About />
        <Footer />
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