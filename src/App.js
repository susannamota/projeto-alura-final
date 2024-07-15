import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';
import './App.css';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import Popup from './components/Popup';

function App() {
  const [frontendVideos, setFrontendVideos] = useState([
    { id: '_EKh6b3I91A', title: 'Calming Jazz Records That Will Feed Your Soul', url: 'https://www.youtube.com/watch?v=_EKh6b3I91A', category: 'frontend' },
    { id: 'YC7faDixT9A', title: 'Afro Cuban Funky Grooves with Cami Layé Okún', url: 'https://www.youtube.com/watch?v=YC7faDixT9A', category: 'frontend' },
    { id: 'MjL0ipgT7xg', title: 'Foundation Roots Reggae with Danniella Dee', url: 'https://www.youtube.com/watch?v=MjL0ipgT7xg', category: 'frontend' }
  ]);
  const [backendVideos, setBackendVideos] = useState([
    { id: '4wtsAOdG3_Q', title: '100% Soukous That Will Make You Moving with Dare Balogun', url: 'https://www.youtube.com/watch?v=4wtsAOdG3_Q', category: 'backend' },
    { id: 'iBkmY-imhvs', title: 'Brazilian Boogie, Disco & Funk with Poly-Ritmo & Zag', url: 'https://www.youtube.com/watch?v=iBkmY-imhvs', category: 'backend' },
    { id: '6B6KFou9uy8', title: 'Shakedown: Roots, Rocksteady and beyond with Ash Walker & GIN', url: 'https://www.youtube.com/watch?v=6B6KFou9uy8', category: 'backend' }
  ]);
  const [innovationVideos, setInnovationVideos] = useState([
    { id: 'vWXdgA92cu4', title: 'Mellow and Sweet UK Lovers Rock with Yone', url: 'https://www.youtube.com/watch?v=vWXdgA92cu4', category: 'innovation' },
    { id: 'XpC-0ohfLbc', title: 'Jazz Fusion Voyage: Latin Jazz & Jazz-Funk with LEV', url: 'https://www.youtube.com/watch?v=XpC-0ohfLbc', category: 'innovation'},
    { id: 'PLdYbJG9rMc', title: 'Spiritual Liberation in Sound Frequencies with Hakim Tafari', url: 'https://www.youtube.com/watch?v=PLdYbJG9rMc', category: 'innovation' }
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleAddVideo = (video, section, isNew = true) => {
    if (section === 'frontend') {
      setFrontendVideos([...frontendVideos, video]);
    } else if (section === 'backend') {
      setBackendVideos([...backendVideos, video]);
    } else if (section === 'innovation') {
      setInnovationVideos([...innovationVideos, video]);
    }
    if (isNew) {
      setPopupMessage('vídeo adicionado!');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  const handleDelete = (videoId, section) => {
    if (section === 'frontend') {
      setFrontendVideos(frontendVideos.filter(video => video.id !== videoId));
    } else if (section === 'backend') {
      setBackendVideos(backendVideos.filter(video => video.id !== videoId));
    } else if (section === 'innovation') {
      setInnovationVideos(innovationVideos.filter(video => video.id !== videoId));
    }
  };

  const handleSaveEdit = (editedVideo, originalSection) => {
    const updateVideoList = (videoList, setVideoList) => {
      const videoIndex = videoList.findIndex(video => video.id === editedVideo.id || video.title === editedVideo.title);
      if (videoIndex !== -1) {
        const updatedVideos = [...videoList];
        updatedVideos[videoIndex] = editedVideo;
        setVideoList(updatedVideos);
      }
    };

    if (originalSection === editedVideo.category) {
      if (originalSection === 'frontend') {
        updateVideoList(frontendVideos, setFrontendVideos);
      } else if (originalSection === 'backend') {
        updateVideoList(backendVideos, setBackendVideos);
      } else if (originalSection === 'innovation') {
        updateVideoList(innovationVideos, setInnovationVideos);
      }
    } else {
      handleDelete(editedVideo.id, originalSection);
      handleAddVideo(editedVideo, editedVideo.category, false);
    }
  };


  
  return (
    <Router>
      <div className="App">
        <GlobalStyles/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home
           frontendVideos={frontendVideos} 
           backendVideos={backendVideos} 
           innovationVideos={innovationVideos} 
           handleDelete={handleDelete}
           handleSaveEdit={handleSaveEdit} 
           handleAddVideo={handleAddVideo}
            />} 
           />
          <Route path="/nuevo-video" element={<NuevoVideo onAddVideo={handleAddVideo} />} />
        </Routes>
        <Footer/>
        {showPopup && <Popup message={popupMessage} />}
      </div>
    </Router>
  );
}

export default App;