import { useState } from 'react'
import onboardingFood from '../assets/Lab1a/onboarding-food.png'
import discoverChefify from '../assets/Lab1a/discover-chefify.png'
import PaginationDots from './PaginationDots.jsx'

const STEP_COUNT = 3

const OnboardingModal = ({ onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((previousIndex) => (previousIndex + 1) % STEP_COUNT)
  }

  return (
    <div className="modalOverlay">
      <div className="modalCard" role="dialog" aria-modal="true" aria-label="Onboarding modal">
        <button type="button" className="closeButton" onClick={onClose} aria-label="Close onboarding modal">
          ×
        </button>

        <div className="modalHeading">
          <img src={discoverChefify} alt="Discover Chefify" className="titleLogo" />
        </div>

        <p className="modalSubtitle">
          Easy and delicious cooking instructions right here. Start exploring now!
        </p>

        <div className="imageFrame">
          <img src={onboardingFood} alt="Beautiful plated food" className="onboardingImage" />
        </div>

        <PaginationDots count={STEP_COUNT} activeIndex={activeIndex} />

        <button type="button" className="nextButton" onClick={handleNext}>
          Next
        </button>

        <button type="button" className="skipButton" onClick={onClose}>
          Skip
        </button>
      </div>
    </div>
  )
}

export default OnboardingModal
