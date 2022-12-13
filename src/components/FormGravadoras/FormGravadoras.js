import { useForm } from 'react-hook-form';
import axios from 'axios';
import './FormGravadoras.css';
import { useNavigate } from 'react-router-dom';

function FormGravadoras() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = e => {
    axios
      .post('http://localhost:8080/gravadora/add', {
        idGravadora: e.id,
        nome: e.nome,
        urlImg: e.url,
        artistasDaGravadora: e.artistas
      })
      .then(() => {
        console.log('New gravadora added');
        navigate('/gravadoras');
      });
  };

  return (
    <div className="FormGravadoras">
      <form
        id="form"
        className="formGravadoras"
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className="formGravadorasTitle">Adicionar Gravadora</section>
        <div className="fields">
          <label>Id da Gravadora: </label>
          <input
            type="number"
            name="gravadoraId"
            placeholder="Digite o id da gravadora"
            {...register('id')}
            id="fieldInput"
          />
        </div>
        <div className="fields">
          <label>Nome da Gravadora: </label>
          <input
            type="text"
            name="gravadoraName"
            placeholder="Digite o nome da gravadora"
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
          <label>Artistas da Gravadora: </label>
          <input
            type="text"
            name="gravadoraArtistas"
            placeholder="Coloque aqui o nome dos Artistas da gravadora"
            {...register('artistas')}
            id="fieldInput"
          />
        </div>
        <input type="submit" value="Enviar" className="buttonSubmit"></input>
      </form>
    </div>
  );
}

export default FormGravadoras;
