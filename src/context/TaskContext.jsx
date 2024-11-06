import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { getAllTask } from '../services/api';
import useToggleState from '../hooks/useToggle';

  const TaskContext = createContext();

  export  const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const {toggle: loading, toggleSwitch: switchLoading} = useToggleState(true);
  const [error, setError] = useState('');
  const [incompleteTask, setIncompleteTask] = useState([]);

  // Trae todas las tareas y maneja posibles errores
  const getTasks = async () => {
    try {
      const response = await getAllTask();
      setTasks(response);
    } catch (err) {
      setError(err.response?.data?.message?.[0] || 'An error occurred');
    } finally {
      setTimeout(() => {
        switchLoading();
      }, 1300)
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