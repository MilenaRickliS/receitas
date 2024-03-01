/*import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getReceitas = async () => {
  const response = await api.get('../data/receitas.json');
  return response.data;
};

export const getReceita = async (id) => {
    const response = await api.get(`../data/receitas.json/${id}`);
    return response.data;
};*/
const express = require('express');
const app = express();
const PORT = 4000;

const receitas = [
  {
    id: 1,
    titulo: 'Receita 1',
    ingredientes: ['ingrediente 1', 'ingrediente 2'],
    modoPreparo: 'Modo de preparo 1'
  },
  {
    id: 2,
    titulo: 'Receita 2',
    ingredientes: ['ingrediente 3', 'ingrediente 4'],
    modoPreparo: 'Modo de preparo 2'
  }
];

app.get('/receitas', (req, res) => {
  res.json(receitas);
});

app.get('/receitas/:id', (req, res) => {
  const receita = receitas.find(r => r.id === parseInt(req.params.id));
  if (!receita) {
    res.status(404).json({ error: 'Receita não encontrada' });
  } else {
    res.json(receita);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = {
    getReceitas: () => {
        return Promise.resolve(receitas);
      },
      app,
      PORT,
      receitas
  };