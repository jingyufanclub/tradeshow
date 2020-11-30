import { useState } from 'react';
import './Likes.scss';
import redHeart from '../assets/fav_red.png';
import whiteHeart from '../assets/fav_white.png';
import message from '../assets/message.png';
import reply from '../assets/reply.png';

function Likes({ likes, caption, favorite }) {
  const [liked, setliked] = useState(favorite);
  const [numLiked, setNumLiked] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setNumLiked(numLiked - 1)
      setliked(false)
    } else {
      setNumLiked(numLiked + 1)
      setliked(true)
    }
  }

  return (
    <div className="Likes">
      <div className="Likes-sharing-icons">
        <img src={liked ? redHeart : whiteHeart} alt="fav" height={18} onClick={handleLike} />
        <img src={message} alt="message" height={18} />
        <img src={reply} alt="reply" height={17} />
      </div>
      <div className="Likes-count">
        <p>{numLiked} likes</p>
      </div>
      <div className="Likes-caption">
        <p>{caption}</p>
      </div>
    </div>
  )
}

export default Likes;