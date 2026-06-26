import { DarkModeProvider } from './contexts/DarkModeContext'
import About from './components/section/About'

function App() {
  return (
    <DarkModeProvider>
      <About />
    </DarkModeProvider>
  )
}

export default App