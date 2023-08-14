import axios from 'axios';
import { AuthType, ToDo } from '../types/type';

const token = localStorage.getItem('access_token');

export const formDataSignUp = async (params: AuthType) => {
  const { data } = await axios.post(
    'http://localhost:8080/users/create',
    params,
  );
  return data;
};

export const formDataSignIn = async (params: AuthType) => {
  const { data } = await axios.post(
    'http://localhost:8080/users/login',
    params,
  );
  return data;
};

export const formDataAddTodo = async (params: ToDo) => {
  const { data } = await axios.post('http://localhost:8080/todos', params, {
    headers: { Authorization: token },
  });
  return data;
};

export const getDataToDo = async () => {
  const { data } = await axios.get('http://localhost:8080/todos', {
    headers: { Authorization: token },
  });
  return data;
};

export const getDataToDoDetail = async (id: string | undefined) => {
  const { data } = await axios.get(`http://localhost:8080/todos/${id}`, {
    headers: { Authorization: token },
  });
  return data;
};

export const delteDataToDo = async (id: string | undefined) => {
  const { data } = await axios.delete(`http://localhost:8080/todos/${id}`, {
    headers: { Authorization: token },
  });
  return data;
};

export const putDataToDo = async ({ title, content, id }: ToDo) => {
  const { data } = await axios.put(
    `http://localhost:8080/todos/${id}`,
    {
      title,
      content,
    },
    {
      headers: { Authorization: localStorage.getItem('access_token') },
    },
  );
  return data;
};
