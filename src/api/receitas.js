import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getReceitas = async () => {
  const response = await api.get('/data/receitas.json');
  return response.data;
};

export const getReceita = async (id) => {
  const response = await api.get(`/data/receitas.json/${id}`);
  return response.data;
};