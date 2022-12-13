import axios from 'axios';
import { useState, useEffect } from 'react';
import './ListArtistas.css';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function ListArtistas() {
  const navigate = useNavigate();

  const handleClickCadastroArtistas = () => {
    navigate('/cadastroartistas');
  };

  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/artista/getAll')
      .then(response => setArtistas(response.data));
  });

  return (
    <div className="artistas">
      <div className="artistasHeaderButton">
        <section className="artistasHeaderTitle">Artistas Cadastrados</section>
        <button onClick={handleClickCadastroArtistas}>
          Cadastrar Artistas
        </button>
      </div>
      <div className="listArtistas">
        {artistas.map(artista => (
          <div className="eachArtista">
            <div className="artistaImg">
              <img src={artista.urlImg} width="75" height="75" alt="" />
            </div>
            <div className="artistaInfo">
              <div className="artistaNome">
                <p>
                  Nome: <span className="artistaApiText">{artista.nome}</span>
                </p>
              </div>
              <div className="artistaId">
                <p>
                  ID:{' '}
                  <span className="artistaApiText">{artista.idArtista}</span>
                </p>
              </div>
            </div>
            <div className="artistaAlbuns">
              <p>Albuns Lançados:</p>
              <div id="artistaAlbunsApiText">{artista.albumsDoArtista}</div>
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
