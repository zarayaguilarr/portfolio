import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import Navigation from './components/section/Navigation'
import About from './components/section/About'
import Footer from './components/Footer'
import { ErrorBoundary } from './components/ErrorBoundary'

console.log('App.tsx loading...');

function AppContent() {
  console.log('AppContent rendering...');
  const { isDarkMode } = useDarkMode();
  console.log('Dark mode:', isDarkMode);

  try {
    return (
      <>
        <Navigation />
        <div style={{ backgroundColor: isDarkMode ? '#101727' : '#fff' }}>
          <About />
          <Footer />
        </div>
      </>
    )
  } catch (e) {
    console.error('AppContent error:', e);
    throw e;
  }
}

function App() {
  console.log('App rendering...');
  return (
    <ErrorBoundary>
      <DarkModeProvider>
        <AppContent />
      </DarkModeProvider>
    </ErrorBoundary>
  )
}

console.log('App.tsx loaded');
export default App