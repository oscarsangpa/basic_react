import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

export const TaskList = () => {

  const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL)
  const [task, setTask] = useState(defaultTask);

  useEffect(()=> {
    console.log("modificed")
      return () => {
        console.log("died")
      }
  }, [task]);

  return (
    <div>
      <div>
        <h1>Yor task: </h1>  
      </div>
      <TaskComponent task={ defaultTask } />
    </div>
  )
}
