import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NuevoVideo.css';

const NuevoVideo = ({ onAddVideo }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const videoId = videoUrl.split('v=')[1];
    const newVideo = { id: videoId, title, videoUrl, category };
    onAddVideo(newVideo, category);
    setTitle('');
    setCategory('');
    setVideoUrl('');
    navigate('/')
  };

  return (
    <div className="nuevo-video">
      <h2>Adicionar Vídeo</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Título" 
          name="Título"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
        >
          <option value="">Selecione uma categoria</option>
          <option value="frontend">Jazz</option>
          <option value="backend">Dub</option>
          <option value="innovation">Disco & Funk</option>
        </select>
        <input 
          type="text" 
          placeholder="URL del Video"
          name="Url del Video" 
          value={videoUrl} 
          onChange={(e) => setVideoUrl(e.target.value)} 
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default NuevoVideo;