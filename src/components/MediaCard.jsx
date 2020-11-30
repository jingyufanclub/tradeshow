import CreatorBox from './CreatorBox'
import VideoPlayer from './VideoPlayer';
import Likes from './Likes';
import './MediaCard.scss';

function MediaCard({ video }) {
  const { caption, url, likes, favorite, creatorId, creatorName, creatorThumbnailVersion } = video;
  const creatorPhotoUrl = `http://localhost:4566/scruffprofile/${creatorId}-thumbnail?version=${creatorThumbnailVersion}`

  return (
    <div className="MediaCard">
      <CreatorBox url={creatorPhotoUrl} name={creatorName} />
      <VideoPlayer url={url} />
      <Likes likes={likes} caption={caption} favorite={favorite} />
    </div>
  )
}

export default MediaCard;