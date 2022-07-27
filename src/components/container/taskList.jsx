import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/Task'
import TaskForm from '../pure/forms/TaskForm'

export const TaskList = () => {

  const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
  const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT);
  const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);

  const [task, setTask] = useState([defaultTask1, defaultTask2, defaultTask3]);
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
      <div className="col-12">
        <div className='card'>
          <div className='card-header p-3'>
            <h5> Your Tasks: </h5>
          </div>
            <div className='card-body' data-mdb-perfect-scrollbar="true" style={{position: "relative", height: "400px"}}>
              <table>
                <thead>
                <tr>
                  <th scope='col'> Title </th>
                  <th scope='col'> Description </th>
                  <th scope='col'> Priority </th>
                  <th scope='col'> Actions </th>
                </tr>
                </thead>
                <tbody>
                {task?.map((task, index) => {
                  return (
                  <TaskComponent 
                    key={index} 
                    task={ task } 
                    />
                  )
                })}
                </tbody>
              </table>
            </div>
            <TaskForm/>
        </div>
      </div>
    </div>
  )
}
