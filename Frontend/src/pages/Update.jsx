import React from 'react'
import { useState,useEffect } from 'react'
import {Link,useParams} from 'react-router-dom'
import axios from 'axios'
const Update = () => {
  const {id}=useParams();
  const [title,settitle]=useState('')
    const [note,setnote]=useState('')
    const [message,setmessage]=useState('')
    useEffect(()=>{
      try{
        axios.get(`http://localhost:3000/note/${id}`)
        .then((res)=>{
          const result=res.data.data;
          settitle(result.title);
          setnote(result.note)
        })
      }
      catch(err){
        console.log("Error",err)
      }

    },[id])
    const updatenote=()=>{
      const data={
        title,
        note
      }
      try{
        axios.put(`http://localhost:3000/note/${id}`,data)
        .then((res)=>{
          const result=res.data.message;
          setmessage(`${result}..!`)
        
        })

      }catch(err){
        console.log("Error",err)
      }

    }
  return (
    <>
    <div className='bg-gradient-to-r from-blue-600 to-blue-400 h-14 flex justify-center items-center shadow-lg'>
    <h3 className='text-white cursor-pointer font-extrabold text-2xl tracking-wider'>
      <Link to='/'>Notedown</Link>
    </h3>
  </div>

  <div className='flex flex-col items-center mt-8 space-y-6'>
    <h3 className='text-2xl font-semibold text-gray-700'>Update Note</h3>

    <div className='bg-white  p-6 rounded-lg shadow-md w-full max-w-lg'>
      <div className='mb-4'>
        <label htmlFor='title' className='block text-gray-700 font-medium mb-2'>
          Title
        </label>
        <input
        value={title}
        onChange={(e)=>{settitle(e.target.value)}}
          type='text'
          id='title'
          className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none'
          placeholder='Enter title...'
        />
      </div>

      <div className='mb-6'>
        <label htmlFor='note' className='block text-gray-700 font-medium mb-2'>
          Note
        </label>
        <textarea
          id='note'
          rows='4'
          value={note}
          onChange={(e)=>{setnote(e.target.value)}}
          className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none'
          placeholder='Enter your note...'
        ></textarea>
      </div>

      <div className='flex justify-center'>
        <button
          
          onClick={updatenote}
          className='bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300'
        >
          Update Note
        </button>
      </div>
      <h3 className='text-red-600 text-center pt-5'>{message}</h3>
    </div>
  </div>


  </>
  )
}

export default Update