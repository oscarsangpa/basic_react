import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import "../styles/task.scss";
import { LEVELS } from '../../models/levels.enum';

function TaskComponent({ tasks, complete, remove }) {

  useEffect(() => {
    console.log("change")
  
    return () => {
      console.log(`Task: ${tasks.name} is going to unmount`)
    }
  }, [tasks]);

  function taskLevelBadge() {
    switch (tasks.level) {
      case LEVELS.NORMAL:
        return (<h6 className='mb-0'>
          <span className='badge bg-primary'>
            {tasks.level}
          </span>
        </h6>) 
      case LEVELS.URGENT:
        return (<h6 className='mb-0'>
          <span className='badge bg-warning'>
            {tasks.level}
          </span>
        </h6>) 
      case LEVELS.BLOCKING:
        return (<h6 className='mb-0'>
          <span className='badge bg-danger'>
            {tasks.level}
          </span>
        </h6>) 
      default:
        break;
    }
  }

  function taskIconsCompleted() {
    if (tasks.completed){
      return (<i onClick={() => complete(tasks)} className='bi-toggle-on task-action' style={{color: "green"}}></i>)  
    } else {
      return (<i onClick={() => complete(tasks)} className='bi-toggle-off task-action' style={{color: "gray"}}></i>)
    } 
  }

  
  return (
    <tr className='fw-normal'>
      <th>
        <span className='ms-2'>{tasks.name}</span>
      </th>
        <td className='align-middle'>
          <span> {tasks.description} </span>
        </td>
        <td className='align-middle'>
           {taskLevelBadge()}
        </td>
        <td className='align-middle'>
          { taskIconsCompleted() } 
          <i onClick={() => remove(tasks)} className='bi-trash task-action' style={{color: "tomato"}}></i>
        </td>
    </tr>
  )
}

TaskComponent.propTypes = {
  tasks: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}

export default TaskComponent
