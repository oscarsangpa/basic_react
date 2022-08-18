import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/Task'
import TaskForm from '../pure/forms/TaskForm'

export const TaskList = () => {

  const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
  const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT);
  const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);

  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);


  function completedTask(task) {
    console.log("complete task", task)
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[index].completed = !tempTask[index].completed;
    setTasks(tempTask)
  }

  function removeTask(task){
    console.log("remove task", task)
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(index,1);
    setTasks(tempTask)
  }

  function addTask(task){
    console.log("add task", task)
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);
  }



  useEffect(()=> {
    console.log("modificed")
    setLoading(false)
      return () => {
        console.log("died")
      }
  }, [tasks]);

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
                {tasks?.map((task, index) => {
                  return (
                  <TaskComponent 
                    key={index} 
                    tasks={ task } 
                    complete={ completedTask }
                    remove={ removeTask }
                    />
                  )
                })}
                </tbody>
              </table>
            </div>
        </div>
      </div>
            <TaskForm add={addTask}/>
    </div>
  )
}