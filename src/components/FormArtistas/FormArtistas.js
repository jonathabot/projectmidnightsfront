import { useForm } from 'react-hook-form';
import axios from 'axios';
import './FormArtistas.css';
import { useNavigate } from 'react-router-dom';

function FormArtistas() {
  const navigate = useNavigate();

  const handleClickVoltarArtistas = () => {
    navigate('/artistas');
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = e => {
    axios
      .post('http://localhost:8080/artista/add', {
        idArtista: e.id,
        nome: e.nome
      })
      .then(() => {
        console.log('New artista added');
      });
  };

  return (
    <div className="FormArtistas">
      <form
        id="form"
        className="formArtistas"
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className="formArtistasTitle">Adicionar Artista</section>
        <div className="fieldId">
          <label>Id da Gravadora: </label>
          <input
            type="number"
            name="gravadoraId"
            placeholder="Digite o id da gravadora"
            {...register('id')}
            id="fieldInput"
          />
        </div>
        <div className="fieldNome">
          <label>Nome do Artista: </label>
          <input
            type="text"
            name="artistaNome"
            placeholder="Digite o nome do artista"
            {...register('nome')}
            id="fieldInput"
          />
        </div>
        <input type="submit" value="Enviar" className="buttonSubmit"></input>
      </form>

      <a
        className="button"
        onClick={handleClickVoltarArtistas}
        href="/artistas"
      >
        Voltar para Página Inicial
      </a>
    </div>
  );
}

export default FormArtistas;
