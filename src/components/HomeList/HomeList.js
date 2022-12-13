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
      <div className="homeListGravadoras">
        <div className="titleHomeListGravadoras">
          <p>Ultimas Gravadoras Cadastradas</p>
        </div>
        <div className="apiHomeListGravadoras">
          {gravadoras.map(gravadora => (
            <div className="homeListEachGravadora">
              <div className="homeListGravadoraId">
                ID:
                <span className="homeListGravadoraApiText">
                  {gravadora.idGravadora}
                </span>
              </div>
              <div className="homeListGravadoraNome">
                Nome:{' '}
                <span className="homeListGravadoraApiText">
                  {gravadora.nome}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="homeListArtistas">
        <div className="homeListArtistas">
          <div className="titleHomeListArtistas">
            <p>Ultimos Artistas Cadastradas</p>
          </div>
          <div className="apiHomeListArtistas">
            {artistas.map(artista => (
              <div className="eachArtista">
                <div className="artistaImg">
                  <img
                    src="https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2022/11/a9aac53-anti-hero-taylor-swift-analise-150x150.png"
                    width="75"
                    height="75"
                    alt=""
                  />
                </div>
                <div className="artistaInfo">
                  <div className="artistaNome">
                    <p>
                      Nome:{' '}
                      <span className="artistaApiText">{artista.nome}</span>
                    </p>
                  </div>
                  <div className="artistaId">
                    <p>
                      ID: <span className="artistaApiText">{artista.id}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="homeListAlbums">
        <div className="homeListAlbums">
          <div className="titleHomeListAlbums">
            <p>Ultimos Albums Cadastrados</p>
          </div>
          <div className="apiHomeListAlbums">
            {albums.map(album => (
              <div className="eachAlbum">
                <div className="albumImg">
                  <img
                    src="https://m.media-amazon.com/images/I/A1Q6XGXmIFL._AC_SL1500_.jpg"
                    width="75"
                    height="75"
                    alt=""
                  />
                </div>
                <div className="albumInfo">
                  <div className="albumNome">
                    <p>
                      Nome: <span className="albumApiText">{album.nome}</span>
                    </p>
                  </div>
                  <div className="albumId">
                    <p>
                      ID: <span className="albumApiText">{album.id}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeList;
