import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

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
    console.error('Error creating task:', error);
    throw error
  }
}

// Actualizar una tarea
export const updateTask = async (id, updatedTask) => {
  try {
    const response = await axios.put(`${BASE_URL}/task/${id}`, updatedTask);
    return response.data
  } catch (error) {
    console.error('Error updating task:', error);
    throw error
  }
}

// Eliminar una tarea
export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/task/${id}`);
    return response.data
  } catch (error) {
    const message = error.response?.data?.message?.[0] || 'An error occurred'
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
    const message = error.response?.data?.message?.[0] || 'An error occurred'
    alert(message);
    throw error
  }
}

