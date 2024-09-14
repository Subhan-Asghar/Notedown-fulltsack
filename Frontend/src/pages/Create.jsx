import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
import { Link} from 'react-router-dom'

const Create = () => {
    const [title,settitle]=useState('')
    const [note,setnote]=useState('')
    const [message,setmessage]=useState('')
    const createnote=()=>{
        const data={
            title,
            note
        }
        try{
            axios.post('http://localhost:3000/create',data)
            .then((res)=>{
                const result=res.data.message;
                setmessage(`${result}..!`)
                console.log(res.data.message)
                setnote('')
                settitle('')

            })   

        }catch(err){
            console.log("Error",err)
        }
    }


  return (
    <>
<div>
  
  <div className='bg-gradient-to-r from-blue-600 to-blue-400 h-14 flex justify-center items-center shadow-lg'>
    <h3 className='text-white cursor-pointer font-extrabold text-2xl tracking-wider'>
      <Link to='/'>Notedown</Link>
    </h3>
  </div>

  
  <div className='flex flex-col items-center mt-8 space-y-6'>
    <h3 className='text-2xl font-semibold text-gray-700'>Create Note</h3>

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
          
          onClick={createnote}
          className='bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300'
        >
          Save Note
        </button>
      </div>
      <h3 className='text-red-600 text-center pt-5'>{message}</h3>
    </div>
  </div>
</div>

    
    </>
  )
}

export default Create