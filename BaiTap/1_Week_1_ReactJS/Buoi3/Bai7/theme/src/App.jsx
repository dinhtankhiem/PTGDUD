import { ThemeProvider } from './ThemeContext'
import Layout from './components/Layout'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Layout />
      </div>
    </ThemeProvider>
  )
}

export default App
