import { createTask } from '../../services/api';
import TaskForm from '../TaskForm/index';
import Button from '../Button/index';
import { useState, useEffect } from 'react';

const CreateTask = () => {
  const [ mobile, setMovile ] = useState(false)
  const [create, setCreate] = useState(false)

  const switchEdit = () => {
    setCreate(!create)
  }
  useEffect(()=>{
    setMovile(window.innerWidth < 768)
  },[])

  return(
  <section>
          <Button 
        callback={switchEdit}
        classButton={'secondary'} 
        name={'Crear Nueva Tarea'}  
        style={`${mobile ? 'px-4 py-4 text-xl bg-opacity-80' : ''} fixed bottom-4 right-4 bg-opacity-95`}
      />
      {create && <TaskForm cancelSubmit={switchEdit} onSubmit={createTask} />}
  </section>
  )
};
export default CreateTask;