import { useState } from 'react'
import kitchenHero from './assets/Lab1a/kitchen-hero.png'
import Navbar from './components/Navbar.jsx'
import OnboardingModal from './components/OnboardingModal.jsx'
import LoginModal from './components/LoginModal.jsx'

function App() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const handleOpenLogin = () => {
    setIsLoginOpen(true)
    setIsOnboardingOpen(false)
  }

  return (
    <div
      className="appShell"
      style={{ backgroundImage: `url(${kitchenHero})` }}
    >
      <div className="heroBackdrop" />
      <div className="pageFrame">
        <Navbar onLoginOpen={handleOpenLogin} />
        {isOnboardingOpen && <OnboardingModal onClose={() => setIsOnboardingOpen(false)} />}
        {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
      </div>
    </div>
  )
}

export default App
