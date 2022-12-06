import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

function FormArtistas() {
  const [idArtista, setIdArtista] = useState('');
  const [nomeArtista, setNomeArtista] = useState('');

  const { register, handleSubmit } = useForm();

  const onSubmit = e => {
    setIdArtista(e.id);
    setNomeArtista(e.nome);
    axios
      .post('http://localhost:8080/artista/add', {
        idArtista: idArtista,
        nome: nomeArtista
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
        <div>
          <label>Id da Gravadora: </label>
          <input
            type="number"
            name="gravadoraId"
            placeholder="Digite o id da gravadora"
            {...register('id')}
          />
        </div>
        <div>
          <label>Nome do Artista: </label>
          <input
            type="text"
            name="artistaNome"
            placeholder="Digite o nome do artista"
            {...register('nome')}
          />
        </div>
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
}

export default FormArtistas;
