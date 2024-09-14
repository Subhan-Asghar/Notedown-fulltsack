import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Delete from './Delete'
const Home = () => {
    const [note, setnote] = useState([])
    useEffect(() => {
        try {
            axios('http://localhost:3000/')
                .then((res) => {
                    const result = res.data.data
                    
                    setnote(result)
                })
        }
        catch (err) { console.log("Error: ", err) }
    }, [])
    return (
        <>
            <div className='bg-gradient-to-r from-blue-600 to-blue-400 h-14 flex justify-center items-center shadow-lg'>
                <h3 className='text-white font-extrabold text-2xl tracking-wider'>
                    Notedown
                </h3>
            </div>
            <div className='flex justify-center mt-8'>
                <Link to='/create'> <button className='bg-white text-blue-600 font-bold h-14 w-28 rounded-xl border border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg transform transition-all duration-300'>
                    Add Note
                </button></Link>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {note.map((data, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-500 to-blue-400 text-white p-5 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
                        <div className='flex justify-between items-start mb-4'>
                            <h3 className="font-bold text-lg truncate">{data.title}</h3>
                            <div className="flex space-x-2">
                                <Link to={`/update/${data._id}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer hover:text-gray-200 transition-colors duration-200">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </Link>
                                <Delete id={data._id}></Delete>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed">{data.note}</p>
                    </div>
                ))}
            </div>






        </>
    )
}

export default Home