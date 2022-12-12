import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import './FormGravadoras.css';

function FormGravadoras() {

  const { register, handleSubmit } = useForm();

  const onSubmit = e => {
    axios
      .post('http://localhost:8080/gravadora/add', {
        idGravadora: e.id,
        nome: e.nome
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
          <label>Nome da Gravadora: </label>
          <input
            type="text"
            name="gravadoraName"
            placeholder="Digite o nome da gravadora"
            {...register('nome')}
            id="fieldInput"
          />
        </div>
        <input type="submit" value="Enviar" className="buttonSubmit"></input>
      </form>

      <p>Voltar para Página Inicial </p>
    </div>
  );
}

export default FormGravadoras;
