import './HomeList.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function HomeList() {
  const [gravadoras, setGravadoras] = useState([]);
  const [artistas, setArtistas] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/gravadora/getAll')
      .then(response => setGravadoras(response.data));
  });

  useEffect(() => {
    axios
      .get('http://localhost:8080/artista/getAll')
      .then(response => setArtistas(response.data));
  });

  useEffect(() => {
    axios
      .get('http://localhost:8080/album/getAll')
      .then(response => setAlbums(response.data));
  });

  return (
    <div className="homeList">
      <div className="homeListPart">
        <div className="titleHomeList">
          <p>Ultimas Gravadoras Cadastradas</p>
        </div>
        <div className="apiHomeList">
          {gravadoras.map(gravadora => (
            <div className="homeListEach">
              <div className="homeListId">
                <span>ID: </span>
                <span className="homeListApiText">{gravadora.idGravadora}</span>
              </div>
              <div className="homeListNome">
                <span>Nome: </span>
                <span className="homeListApiText">{gravadora.nome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="homeListPart">
        <div className="titleHomeList">
          <p>Ultimos Artistas Cadastradas</p>
        </div>
        <div className="apiHomeList">
          {artistas.map(artista => (
            <div className="homeListEach">
              <div className="homeListId">
                <span>ID: </span>
                <span className="homeListApiText">{artista.id}</span>
              </div>
              <div className="artistaNome">
                <span>Nome: </span>
                <span className="homeListApiText">{artista.nome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="homeListPart">
        <div className="titleHomeList">
          <p>Ultimos Albums Cadastradas</p>
        </div>
        <div className="apiHomeList">
          {albums.map(album => (
            <div className="homeListEach">
              <div className="homeListId">
                <span>ID: </span>
                <span className="homeListApiText">{album.id}</span>
              </div>
              <div className="artistaNome">
                <span>Nome: </span>
                <span className="homeListApiText">{album.nome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeList;
