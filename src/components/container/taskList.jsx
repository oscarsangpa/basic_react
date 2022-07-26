import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

export const TaskList = () => {

  const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL)
  const [task, setTask] = useState(defaultTask);
  const [loading, setLoading] = useState(true);


  const changeCompleted = (id) => {

  }

  useEffect(()=> {
    console.log("modificed")
    setLoading(false)
      return () => {
        console.log("died")
      }
  }, [task]);

  return (
    <div>
      <div>
        <h1>Your Tasks: </h1>  
      </div>
      <TaskComponent task={ defaultTask } />
    </div>
  )
}
