import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

function FormAlbums() {
  const [idAlbum, setIdAlbum] = useState('');
  const [nomeAlbum, setNomeAlbum] = useState('');

  const { register, handleSubmit } = useForm();

  const onSubmit = e => {
    setIdAlbum(e.id);
    setNomeAlbum(e.nome);
    axios
      .post('http://localhost:8080/album/add', {
        idAlbum: idAlbum,
        nome: nomeAlbum
      })
      .then(() => {
        console.log('New album added');
      });
  };

  return (
    <div className="FormAlbums">
      <form id="form" className="formAlbums" onSubmit={handleSubmit(onSubmit)}>
        <section className="formAlbumsTitle">Adicionar Album</section>
        <div>
          <label>Id da Album: </label>
          <input
            type="number"
            name="gravadoraId"
            placeholder="Digite o id do album"
            {...register('id')}
          />
        </div>
        <div>
          <label>Nome do Album: </label>
          <input
            type="text"
            name="artistaNome"
            placeholder="Digite o nome do album"
            {...register('nome')}
          />
        </div>
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
}

export default FormAlbums;
