import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getReceitas } from '../api/receitas';

const Receitas = () => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    getReceitas().then((data) => setReceitas(data));
  }, []);

  return (
    <div>
      <h1>Receitas</h1>
      <ul>
        {receitas.map((receita) => (
          <li key={receita.id}>
            <Link to={`/receitas/${receita.id}`}>{receita.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Receitas;