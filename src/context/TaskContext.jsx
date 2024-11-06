import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { getAllTask } from '../services/api';

  const TaskContext = createContext();

  export  const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [incompleteTask, setIncompleteTask] = useState([]);

  // Trae todas las tareas y maneja posibles errores
  const getTasks = async () => {
    try {
      setLoading(true);
      const response = await getAllTask();
      setTasks(response);
    } catch (err) {
      setError(err.response?.data?.message?.[0] || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIncompleteTask(tasks.filter((el) => el.complete === false));
  }, [tasks]);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, incompleteTask, loading, error }}>
      {children}
    </TaskContext.Provider>
  );
};

// Definición de PropTypes para validar las props
TaskProvider.propTypes = {
  children: PropTypes.node.isRequired, // Define el tipo de children
};

// Exporta el hook para acceder al contexto
export const useTasks = () => useContext(TaskContext);