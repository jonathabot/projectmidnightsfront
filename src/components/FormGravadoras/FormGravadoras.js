import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

function FormGravadoras() {
  const [nomeGravadora, setNomeGravadora] = useState('');

  const { register, handleSubmit } = useForm();

  const onSubmit = e => {
    setNomeGravadora(e.nome);
    axios
      .post('http://localhost:8080/gravadora/add', {
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
