import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

function translateErrors(errors) {
  const translations = {
    "title should not be empty": "El título no debe estar vacío",
    "title must be a string": "El título debe ser una cadena de texto",
    "description should not be empty": "La descripción no debe estar vacía",
    "description must be a string": "La descripción debe ser una cadena de texto"
  };

  const translatedErrors = errors?.map(error => translations[error] || error);
  return translatedErrors.join(', ');
}
// Obtener todas las tareas
export const getAllTask = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/task`);
    return response.data
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error
  }
}

// Crear una nueva tarea
export const createTask = async (task) => {
  try {
    const response = await axios.post(`${BASE_URL}/task`, task);
    return response.data
  } catch (error) {
    console.log(error)
    const errorsMesage = error.response?.data?.message[0]? 
    error.response?.data?.message?.length > 1? 
    error.response?.data?.message : 
    error.response?.data?.message[0] : 
    'Network Error'
    const message = errorsMesage !== 'Network Error'&& translateErrors(errorsMesage) || errorsMesage;
    alert(message);
    throw error
  }
}

// Actualizar una tarea
export const updateTask = async (id, updatedTask) => {
  try {
    const response = await axios.put(`${BASE_URL}/task/${id}`, updatedTask);
    return response.data
  } catch (error) {
    const message = error.response?.data?.message?.[0] || 'Network Error'
    alert(message);
    throw error
  }
}

// Eliminar una tarea
export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/task/${id}`);
    return response.data
  } catch (error) {
    const message = error.response?.data?.message?.[0] || 'Network Error'
    alert(message);
    throw error
  }
}

// Cambia solo el estado de la tarea 
export const updateCompleteTask = async (id) => {
  try {
    const response = await axios.patch(`${BASE_URL}/task/${id}`);
    return response.data
  } catch (error) {
    const message = error.response?.data?.message?.[0] || 'Network Error'
    alert(message);
    throw error
  }
}

