import axios from 'axios';


export const login = (email, password) => {

  let body = {
    email,
    password
  }

  return axios.post(`/login`, body )

}


export const getAllUsers = () => axios.get('https://reqres.in/api/users');


export const getAllPagedUsers = (page) => axios.get(`https://reqres.in/api/users?page=${page}`);


export const getUserById = (id) => axios.get(`https://reqres.in/api/users/${id}`);

export const createUser = (name, job) => {
  let data = {
    name,
    job
  }
  return axios.post(`https://reqres.in/api/users`, data )
};


export const updateUserbyID = (id, name, job) => {
  let data = {
    name,
    job
  }
  return axios.put(`https://reqres.in/api/users/${id}`, data )
};

export const deleteUserByID = (id) => axios.delete(`https://reqres.in/api/users/${id}`);



