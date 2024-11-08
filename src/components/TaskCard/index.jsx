import Button from '../Button/index';
import PropTypes from 'prop-types';
import CheckBox from '../Checkbox';
import { updateCompleteTask, deleteTask, updateTask } from '../../services/api';
import { useTasks } from '../../context/TaskContext';
import useToggleState from '../../hooks/useToggle';
import TaskForm from '../TaskForm';

const TaskCard = ({ id, title, description, complete }) => {
  const { setTasks } = useTasks();
  const { toggle: edit , toggleSwitch: onEdit } = useToggleState(); // gestiona si el usuario esta editando

  const onDelete = async () => {
    await deleteTask(id);
    // Elimina la tarea del contexto de tareas
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
    alert('Tarea eliminada correctamente');
  };

  const onToggleComplete = async () => {
    await updateCompleteTask(id);
    // Actualiza el estado de 'complete' en el contexto
    setTasks((prevTasks) =>
      prevTasks.map(task =>
        task.id === id ? { ...task, complete: !complete } : task
      )
    );
    alert('Estado de la tarea actualizado correctamente');
  };

  return (
    <article className="bg-white shadow-md rounded-lg p-4 max-w-sm w-full flex flex-col justify-between">
      <div className="flex justify-between items-center border-b-2">
        <h2 className="text-xl font-bold text-primary">{title}</h2>
        <CheckBox checked={complete} callback={onToggleComplete}/>
      </div>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-6 flex justify-end space-x-4">
      <span
        className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
          complete ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
        {complete ? 'Completa' : 'Pendiente'}
      </span>
        <Button 
          callback={onEdit} 
          style='text-blue-500 hover:text-blue-700' 
          name='Editar' 
          type='button'/>
        <Button 
          callback={onDelete} 
          style='text-red-500 hover:text-red-700' 
          name='Eliminar' 
          type='button'/>
      </div>
        {
          edit && <TaskForm taskToEdit={{id,title,description,complete}} onSubmit={updateTask} cancelSubmit={onEdit}/>
        }
    </article>
  );
};

TaskCard.propTypes = {  //validador de datos
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
};

export default TaskCard