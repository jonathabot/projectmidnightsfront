import axios from 'axios';
import { useState, useEffect } from 'react';
import './ListAlbums.css';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

function ListAlbums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/album/getAll')
      .then(response => setAlbums(response.data));
  });

  return (
    <div className="albums">
      <p className="albumsHeaderTitle"> Albums Cadastrados </p>
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
                  ID: <span className="AlbumApiText">{album.id}</span>
                </p>
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
