import axios from 'axios';
import { useState, useEffect } from 'react';
import './ListAlbums.css';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function ListAlbums() {
  const navigate = useNavigate();

  const handleClickCadastroAlbums = () => {
    navigate('/cadastroalbums');
  };

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/album/getAll')
      .then(response => setAlbums(response.data));
  });

  return (
    <div className="albums">
      <div className="albumsHeaderButton">
        <section className="albumsHeaderTitle"> Albums Cadastrados </section>
        <button onClick={handleClickCadastroAlbums}>Cadastrar Albums</button>
      </div>
      <div className="listAlbums">
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
            <div className="albumMusicas">
              <p>Musicas do Album:</p>
              <div id="albumMusicasApiText">
                <span>
                  1. The One, 2. Cardigan, 3. The Last Great American Dynasty,
                  4. Exile, 5. My Tears Ricochet, 6. Mirrorball, 7. Seven, 8.
                  August
                </span>
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

export default ListAlbums;
