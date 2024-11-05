import { createContext, useState, useEffect, useContext } from 'react';
import { getAllTask } from '../services/api';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ incompleteTask, setIncompleteTask] = useState([]);

  // Trae todas las tareas y maneja posibles errores
  const getTasks = async () => {
    try {
      setLoading(true);
      const response = await getAllTask();
      setTasks(response);
      setIncompleteTask(response.filter(el => el.complete === false)); //filtro tareas incompletas
    } catch (err) {
      // Captura el error y establece el mensaje de error en el estado
      setError(err.response?.data?.message?.[0] || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };
  
 
  useEffect(() => {
    getTasks();
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, incompleteTask, loading, error }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);

