'use client'
import React, { useState } from 'react'

function page() {
  let [title, setTitle] = useState('');
  let [desc, setDesc] = useState('');
  let [taskID, setTaskID] = useState(1);
  let [maintask, setMaintask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault()
    let task = { t: title, d: desc, id: taskID };
    setMaintask([...maintask, task]);
    setDesc('');
    setTitle('');
    setTaskID(taskID + 1);

  }
  const deleteTask = (i) => {
    console.log("deleted", i);
    let temp = maintask.filter((el) => {
      return el.id != i;
    })
    setMaintask(temp);
  }
  return (
    <>
      <h1 className='bg-black text-center p-2 text-white'>MY TODO APP</h1>
      <form onSubmit={submitHandler} className='w-fit m-auto border-solid border-2 border-black-500 flex flex-col justify-center p-3 my-4'>
        <input required value={title} onChange={(e) => setTitle(e.target.value)} className='border-solid border-2 border-black-500  m-2 bord  p-1' placeholder='Enter Title'></input>
        <input required value={desc} onChange={(e) => setDesc(e.target.value)} className='border-solid border-2 border-black-500  m-2 bord p-1' placeholder='Enter Description'></input>
        <button className='bg-black rounded-xl text-white p-2'>Add task</button>
      </form>
      <div className='w-full bg-slate-300 flex p-3 flex-col'>
        <h1 className='text-center'>All Tasks</h1>
        {maintask.map((el, index) => {
          return (<div className='border-solid border-2 border-black-500 mt-3 flex justify-between p-3'>
            <div className='text-black '> Task {index + 1}: {el.t}</div>
            <div className='text-black'>Description: {el.d}</div>
            <button className='text-sm text-blue-300 bg-black rounded-md p-2' onClick={() => deleteTask(el.id)}>Delete</button>
          </div>)
        })}
      </div>
    </>
  )
}

export default page
