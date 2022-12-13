import { useForm } from 'react-hook-form';
import axios from 'axios';
import './FormAlbums.css';
import { useNavigate } from 'react-router-dom';

function FormAlbums() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = e => {
    axios
      .post('http://localhost:8080/album/add', {
        idAlbum: e.id,
        nome: e.nome,
        urlImg: e.url,
        musicasDoAlbum: e.musicas
      })
      .then(() => {
        console.log('New album added');
        navigate('/albums');
      });
  };

  return (
    <div className="FormAlbums">
      <form id="form" className="formAlbums" onSubmit={handleSubmit(onSubmit)}>
        <section className="formAlbumsTitle">Adicionar Album</section>
        <div className="fields">
          <label>Id da Album: </label>
          <input
            type="number"
            name="gravadoraId"
            placeholder="Digite o id do album"
            {...register('id')}
            id="fieldInput"
          />
        </div>
        <div className="fields">
          <label>Nome do Album: </label>
          <input
            type="text"
            name="artistaNome"
            placeholder="Digite o nome do album"
            {...register('nome')}
            id="fieldInput"
          />
        </div>
        <div className="fields">
          <label>Url da Imagem: </label>
          <input
            type="text"
            name="gravadoraUrlImg"
            placeholder="Coloque aqui a url da imagem do artista"
            {...register('url')}
            id="fieldInput"
          />
        </div>
        <div className="fields">
          <label>Músicas do Album: </label>
          <input
            type="text"
            name="gravadoraArtistas"
            placeholder="Coloque aqui o nome das músicas do album"
            {...register('musicas')}
            id="fieldInput"
          />
        </div>
        <input type="submit" value="Enviar" className="buttonSubmit"></input>
      </form>
    </div>
  );
}

export default FormAlbums;
