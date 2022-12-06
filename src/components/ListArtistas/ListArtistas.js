import axios from 'axios';
import { useState, useEffect } from 'react';
import './ListArtistas.css';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

function ListArtistas() {
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/artista/getAll')
      .then(response => setArtistas(response.data));
  });

  return (
    <div className="artistas">
      <p className="artistasHeaderTitle"> Artistas Cadastrados </p>
      <div className="listArtistas">
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
                  Nome: <span className="artistaApiText">{artista.nome}</span>
                </p>
              </div>
              <div className="artistaId">
                <p>
                  ID: <span className="artistaApiText">{artista.id}</span>
                </p>
              </div>
            </div>
            <div className="artistaAlbuns">
              <p>Albuns Lançados:</p>
              <div id="artistaAlbunsApiText">
                <span>Folkore, Taylor Swift, 2020</span>
                <span>Evermore, Taylor Swift, 2020</span>
                <span>Fearless (Taylor's Version), Taylor Swift, 2021</span>
                <span>Fearless (Taylor's Version), Taylor Swift, 2021</span>
                <span>Fearless (Taylor's Version), Taylor Swift, 2021</span>
                <span>Fearless (Taylor's Version), Taylor Swift, 2021</span>
              </div>
            </div>
            <div className="controlButtons">
              <FaEdit />
              <AiFillDelete />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListArtistas;
