import defaultPhoto from '../assets/defaultPhoto.png';
import './CreatorPhoto.scss';

function CreatorPhoto({ url }) {

  const handleImageError = (e) => {
    e.target.src = defaultPhoto
  }

  return (
    <div className="CreatorPhoto">
      <img src={url} alt="" onError={handleImageError} />
    </div>
  )
}

export default CreatorPhoto;