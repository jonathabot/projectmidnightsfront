import { useForm } from 'react-hook-form';
import axios from 'axios';
import './FormAlbums.css';
import { useNavigate } from 'react-router-dom';

function FormAlbums() {
  const navigate = useNavigate();

  const handleClickVoltarAlbums = () => {
    navigate('/albums');
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = e => {
    axios
      .post('http://localhost:8080/album/add', {
        idArtista: e.id,
        nome: e.nome
      })
      .then(() => {
        console.log('New album added');
      });
  };

  return (
    <div className="FormAlbums">
      <form id="form" className="formAlbums" onSubmit={handleSubmit(onSubmit)}>
        <section className="formAlbumsTitle">Adicionar Album</section>
        <div className="fieldId">
          <label>Id da Album: </label>
          <input
            type="number"
            name="gravadoraId"
            placeholder="Digite o id do album"
            {...register('id')}
            id="fieldInput"
          />
        </div>
        <div className="fieldNome">
          <label>Nome do Album: </label>
          <input
            type="text"
            name="artistaNome"
            placeholder="Digite o nome do album"
            {...register('nome')}
            id="fieldInput"
          />
        </div>
        <input type="submit" value="Enviar" className="buttonSubmit"></input>
      </form>

      <a className="button" onClick={handleClickVoltarAlbums} href="/albums">
        Voltar para Página Inicial
      </a>
    </div>
  );
}

export default FormAlbums;
