import { ErrorBoundary } from './components/ErrorBoundary'
import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Testing app rendering...</h1>
        <p>If you see this, the basic app is working!</p>
      </div>
    </ErrorBoundary>
  )
}

export default App