import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Waypoint } from 'react-waypoint';
import './VideoPlayer.scss';

function VideoPlayer({ url }) {
  const [playing, changePlayState] = useState(false);
  const [muted, changeMuteState] = useState(true);

  const handleEnterViewport = function () {
    changePlayState(true);
  }

  const handleExitViewport = function () {
    changePlayState(false);
  }

  const handleMute = function () {
    changeMuteState(!muted);
  }

  const ref = React.createRef();

  const PlayerRef = React.forwardRef((props, ref) => (
    <div ref={ref} onClick={handleMute} >
      {props.children}
    </div>
  ));

  return (
    <div className="VideoPlayer" >
      <Waypoint
        onEnter={handleEnterViewport}
        onLeave={handleExitViewport}
        topOffset={100}
        bottomOffset={100}
      >
        <PlayerRef ref={ref}>
          <ReactPlayer
            playing={playing}
            url={url}
            volumne={0}
            muted={true}
            width='100%'
            height={500}
            loop={true}
          />
        </PlayerRef>
      </Waypoint>
    </div>
  )
}

export default VideoPlayer;