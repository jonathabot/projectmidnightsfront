import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

function FormGravadoras() {
  const [idGravadora, setIdGravadora] = useState('');
  const [nomeGravadora, setNomeGravadora] = useState('');

  const { register, handleSubmit } = useForm();

  const onSubmit = e => {
    setIdGravadora(e.id);
    setNomeGravadora(e.nome);
    axios
      .post('http://localhost:8080/gravadora/add', {
        idGravadora: idGravadora,
        nome: nomeGravadora
      })
      .then(() => {
        console.log('New gravadora added');
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
          <label>Nome da Gravadora: </label>
          <input
            type="text"
            name="gravadoraName"
            placeholder="Digite o nome da gravadora"
            {...register('nome')}
          />
        </div>
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
}

export default FormGravadoras;
