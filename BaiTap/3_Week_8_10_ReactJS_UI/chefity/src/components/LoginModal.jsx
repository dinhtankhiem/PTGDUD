import loginFood from '../assets/Lab1a/login-food.png'

const LoginModal = ({ onClose }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modalOverlay" onClick={handleOverlayClick}>
      <div className="loginModalCard" role="dialog" aria-modal="true" aria-label="Login modal">
        <button type="button" className="closeButton" onClick={onClose} aria-label="Close login modal">
          ×
        </button>

        <div className="loginGrid">
          <div className="loginImagePanel">
            <div className="loginQuote">
              "Embrace the art of cooking, where flavors come alive!"
            </div>
            <img src={loginFood} alt="Delicious login food" className="loginFoodImage" />
          </div>

          <div className="loginFormPanel">
            <div>
              <h2 className="loginTitle">Login</h2>
              <p className="loginSubtitle">Enter your email to log in.</p>
            </div>

            <label className="fieldLabel" htmlFor="loginEmail">
              <span className="labelText visuallyHidden">Email</span>
              <input
                id="loginEmail"
                className="loginInput"
                type="email"
                placeholder="Enter your email"
              />
            </label>

            <button type="button" className="continueButton">
              Continue
            </button>

            <div className="dividerWrapper">
              <span className="dividerLine" />
              <span className="dividerText">OR</span>
              <span className="dividerLine" />
            </div>

            <p className="agreementText">
              By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy.
            </p>

            <button type="button" className="socialButton google">
              Continue with Google
            </button>
            <button type="button" className="socialButton facebook">
              Continue with Facebook
            </button>
            <button type="button" className="socialButton apple">
              Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
