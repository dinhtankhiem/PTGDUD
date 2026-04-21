import Modal from "./Modal";
import { images, fallbackImage } from "../../config/imagePaths";
import { Link } from "react-router-dom";

function LoginModal({ open, onClose }) {
  return <Modal open={open} onClose={onClose}><div className="login-modal"><div className="login-left"><img src={images.loginFood} alt="Login food" onError={(e)=>(e.currentTarget.src=fallbackImage)} /><p>"Embrace the art of cooking, where flavors come alive!"</p></div><div className="login-right"><button className="modal-close" onClick={onClose}>x</button><h2>Login</h2><p>Enter your email to log in.</p><input placeholder="Enter your email" /><Link to="/recipe-box" className="btn btn-primary" onClick={onClose}>Continue</Link><div className="or">OR</div><button className="btn btn-soft">Continue with Google</button><button className="btn btn-soft">Continue with Facebook</button><button className="btn btn-soft">Continue with Apple</button><small>By continuing, you agree to our Terms and Privacy Policy.</small></div></div></Modal>;
}
export default LoginModal;
