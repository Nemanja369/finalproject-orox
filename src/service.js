import axios from 'axios'

export const getAllUsers = () => axios.get(`https://finalproject-orox.herokuapp.com/users`)
export const postUser = (username,email,password) => axios.post(`https://finalproject-orox.herokuapp.com/users`,{username,email,password})
export const getAllParts = () => axios.get(`https://finalproject-orox.herokuapp.com/parts`)
export const getPartById = (id) => axios.get(`https://finalproject-orox.herokuapp.com/parts/${id}`)
export const addPart = (name,material, code, machine) => axios.post(`https://finalproject-orox.herokuapp.com/parts`,{name,material,code, machine})
export const deletePart = (id) => axios.delete(`https://finalproject-orox.herokuapp.com/parts/${id}`)
export const editPart = (id,name,material,code, machine) =>axios.put(`https://finalproject-orox.herokuapp.com/parts/${id}`, {name,material,code, machine})