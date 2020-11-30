import { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import MediaCard from './components/MediaCard';
import Loading from './components/Loading';
import './App.scss';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    try {
      const deviceId = '18568e98681d739ec7faadb5843b2595';
      const sessionId = Math.random().toString(36).substring(7);
      const pageSize = Number(16);
      const res = await fetch(
        `http://localhost:8080/app/albums/feed?device_id=${deviceId}&session_id=${sessionId}&page_size=${pageSize}`,
        {
          method: 'GET',
        },
      );
      const resJson = await res.json();
      const videos = resJson.results.map(vid => (
        {
          caption: vid.caption,
          url: vid.video_url,
          likes: vid.likes,
          creatorId: vid.creator_id,
          creatorName: vid.creator_name,
          creatorThumbnailVersion: vid.creator_thumbnail_version,
          favorite: vid.favorite,
        }
      ));
      setVideos(videos);
    } catch (e) {
      console.log('oopsy');
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <main className="App-main">
        {
          videos.length > 0
            ? videos.map(video => <MediaCard video={video} key={video.url} />)
            : <Loading />
        }
      </main>
    </div>
  );
}

export default App;
