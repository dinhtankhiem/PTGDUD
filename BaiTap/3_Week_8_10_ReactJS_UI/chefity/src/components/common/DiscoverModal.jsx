import Modal from "./Modal";
import { images, fallbackImage } from "../../config/imagePaths";

function DiscoverModal({ open, onClose }) {
  return <Modal open={open} onClose={onClose}><button className="modal-close" onClick={onClose}>x</button><h2>Discover Chefify</h2><p>Easy and delicious cooking instructions right here. Start exploring now!</p><img className="modal-image" src={images.discoverFood} alt="Discover Chefify" onError={(e)=>(e.currentTarget.src=fallbackImage)} /><div className="dots"><span className="active"/><span/><span/></div><button className="btn btn-primary">Next</button><button className="text-link">Skip</button></Modal>;
}
export default DiscoverModal;
