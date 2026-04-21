import Modal from "./Modal";
import { images, fallbackImage } from "../../config/imagePaths";
import { Link } from "react-router-dom";

function DiscoverModal({ open, onClose }) {
  return <Modal open={open} onClose={onClose}><button className="modal-close" onClick={onClose}>x</button><h2>Discover Chefify</h2><p>Easy and delicious cooking instructions right here. Start exploring now!</p><img className="modal-image" src={images.discoverFood} alt="Discover Chefify" onError={(e)=>(e.currentTarget.src=fallbackImage)} /><div className="dots"><span className="active"/><span/><span/></div><Link to="/search" className="btn btn-primary" onClick={onClose}>Next</Link><Link to="/search-empty" className="text-link" onClick={onClose}>Skip</Link></Modal>;
}
export default DiscoverModal;
