import CreatorPhoto from './CreatorPhoto';
import './CreatorBox.scss';

function CreatorBox({ url, name }) {
  return (
    <div className="CreatorBox">
      <CreatorPhoto url={url} />
      <p>{name}</p>
    </div>
  )
}

export default CreatorBox;