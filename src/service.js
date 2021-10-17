import axios from 'axios'

export const getAllUsers = () => axios.get(`http://localhost:3005/users`)
export const postUser = (username,email,password) => axios.post(`http://localhost:3005/users`,{username,email,password})
export const getAllParts = () => axios.get(`http://localhost:3005/parts`)
export const getPartById = (id) => axios.get(`http://localhost:3005/parts/${id}`)
export const addPart = (name,material, code, machine) => axios.post(`http://localhost:3005/parts`,{name,material,code, machine})
export const deletePart = (id) => axios.delete(`http://localhost:3005/parts/${id}`)
export const editPart = (id,name,material,code, machine) =>axios.put(`http://localhost:3005/parts/${id}`, {name,material,code, machine})