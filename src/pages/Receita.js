import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReceita } from '../api/receitas';

const Receita = () => {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    getReceita(id).then((data) => setReceita(data));
  }, [id]);

  if (!receita) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{receita.titulo}</h1>
      <h2>Ingredientes</h2>
      <ul>
        {
          receita.ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))
        }
      </ul>
      <h2>Modo de preparo</h2>
      <ol>
        {receita.modoPreparo.map((etapa, index) => (
          <li key={index}>{etapa}</li>
        ))}
      </ol>
    </div>
  );
};

export default Receita;