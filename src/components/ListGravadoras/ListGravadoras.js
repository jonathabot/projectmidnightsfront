import axios from 'axios';
import { useState, useEffect } from 'react';
import './ListGravadoras.css';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function ListGravadoras() {
  const navigate = useNavigate();

  const handleClickCadastroGravadoras = () => {
    navigate('/cadastrogravadoras');
  };

  const [gravadoras, setGravadoras] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/gravadora/getAll')
      .then(response => setGravadoras(response.data));
  });

  return (
    <div className="Gravadoras">
      <div className="gravadoraHeaderButton">
        <section className="gravadorasHeaderTitle">
          Gravadoras Cadastradas
        </section>
        <button onClick={handleClickCadastroGravadoras}>
          Cadastrar Gravadora
        </button>
      </div>
      <div className="listGravadoras">
        {gravadoras.map(gravadora => (
          <div className="eachGravadora">
            <div className="gravadoraImg">
              <img src={gravadora.urlImg} width="75" height="75" alt="" />
            </div>
            <div className="gravadoraInfo">
              <div className="gravadoraNome">
                <p>
                  Nome:
                  <span className="gravadoraApiText">{gravadora.nome}</span>
                </p>
              </div>
              <div className="gravadoraId">
                <p>
                  ID:
                  <span className="gravadoraApiText">
                    {gravadora.idGravadora}
                  </span>
                </p>
              </div>
            </div>
            <div className="gravadoraArtistas">
              <p>Artistas da Gravadora:</p>
              <div id="gravadoraArtistasApiText">
                {gravadora.artistasDaGravadora}
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

export default ListGravadoras;
