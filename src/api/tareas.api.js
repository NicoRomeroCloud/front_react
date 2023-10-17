import axios from "axios";

const urlApi = axios.create({
    baseURL: 'http://localhost:8000/tareas/api/tareas/',
});

export const obtenerTareas = () => urlApi.get('/');

export const obtenerTarea = (id) => urlApi.get(`/${id}/`);

export const crearTareas = (tareas) => urlApi.post('/', tareas);

export const eliminarTarea = (id) => urlApi.delete(`/${id}`);

export const actualizarTarea = (id, tareas) => urlApi.put(`/${id}/`, tareas);
