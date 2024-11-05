import Button from '../Button/index';
import PropTypes from 'prop-types';
import CheckBox from '../Checkbox';

const TaskCard = ({ title, description, complete }) => {
  const onDelete = () => {

  }
  const onEdit = () => {

  }
  const onToggleComplete = () => {

  }
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-sm w-full mx-auto flex flex-col">
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
        {complete ? 'Complete' : 'Not Complete'}
      </span>
        <Button 
          onClick={onEdit} 
          style='text-blue-500 hover:text-blue-700' 
          name='Edit' 
          type='none'/>
        <Button 
          onClick={onDelete} 
          style='text-red-500 hover:text-red-700' 
          name='Delete' 
          type='none'/>
      </div>
    </div>
  );
};

TaskCard.propTypes = {  //validador de datos
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
};

export default TaskCard