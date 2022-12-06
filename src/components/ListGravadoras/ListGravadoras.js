import axios from 'axios';
import { useState, useEffect } from 'react';
import './ListGravadoras.css';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

function ListGravadoras() {
  const [gravadoras, setGravadoras] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/gravadora/getAll')
      .then(response => setGravadoras(response.data));
  });

  return (
    <div className="Gravadoras">
      <p className="gravadorasHeaderTitle"> Gravadoras Cadastradas </p>
      <div className="listGravadoras">
        {gravadoras.map(gravadora => (
          <div className="eachGravadora">
            <div className="gravadoraImg">
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/2/2b/Sony_Music_Entertainment.png"
                width="75"
                height="75"
                alt=""
              />
            </div>
            <div className="gravadoraInfo">
              <div className="gravadoraNome">
                <p>
                  Nome:{' '}
                  <span className="gravadoraApiText">{gravadora.nome}</span>
                </p>
              </div>
              <div className="gravadoraId">
                <p>
                  ID:{' '}
                  <span className="gravadoraApiText">
                    {gravadora.idGravadora}
                  </span>
                </p>
              </div>
            </div>
            <div className="gravadoraArtistas">
              <p>Albuns Lançados:</p>
              <div id="gravadoraArtistasApiText">
                <span>Taylor Swift, 2020</span>
                <span>IVE, 2020</span>
                <span>Ellie Goulding, 2020</span>
                <span>Grimes, 2021</span>
                <span>Declan McKenna, 2021</span>
                <span>Gracie Abrams, 2020</span>
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
