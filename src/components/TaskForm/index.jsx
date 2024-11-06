import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useTasks } from '../../context/TaskContext';
import Button from '../Button';

const TaskForm = ({ taskToEdit, onSubmit, cancelSubmit }) => {
  // Estado para el formulario
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [complete, setComplete] = useState(false);

  const { setTasks } = useTasks();

  // Si se está editando una tarea, se llenan los campos con la tarea existente
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setComplete(taskToEdit.complete);
    }
  }, [taskToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { title, description, complete };
    const response = taskToEdit.id && await onSubmit(taskToEdit.id, taskData) || await onSubmit(taskData) //modifica la peticion dependiendo si es para actualizar o crear
    setTasks((prevTasks) => prevTasks.map(task => task.id == taskToEdit.id? response : task));
    resetForm();
    alert(taskToEdit.id? 'Se Actualizo la tarea' : 'Se creo la tarea');
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setComplete(false);
    cancelSubmit();
  };

  return (
    <div className="flex justify-center items-center w-full h-full fixed left-0 top-0 bg-black-semi bg-opacity-80">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {taskToEdit ? 'Editar Tarea' : 'Crear Tarea'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task Title"
              required
              className="text-black-semi mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Task Description"
              required
              className="text-black-semi mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="mb-4 flex items-center gap-2">
            <input
              type="checkbox"
              id="complete"
              checked={complete}
              onChange={() => setComplete(!complete)}
              className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
            />
            <span
              className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                complete ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
              {complete ? 'Complete' : 'Not Complete'}
            </span>
          </div>

          <div className="flex justify-between mt-6">
            <Button 
              name={taskToEdit ? 'Update Task' : 'Create Task'}
              type="submit"
              style="font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              classButton={'primary'}
            />
            <Button
              name='Cancel'
              type="button"
              callback={resetForm}
              style="bg-red-500 font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              classButton={'primary'}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

TaskForm.propTypes = {
  taskToEdit: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  cancelSubmit: PropTypes.func.isRequired,
}


export default TaskForm;