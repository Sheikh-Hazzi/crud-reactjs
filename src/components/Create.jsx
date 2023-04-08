
import Axios from 'axios';
import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

const Create = () => {

  const[name,setName]=useState("");
  const[age,setAge]=useState("");
  const[email,setEmail]=useState("");
  const navigate= useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    Axios.post("https://643000fbb289b1dec4bf05ed.mockapi.io/crud",{
      e_name:name,
      e_age:age,
      e_email:email
    }).then(()=>{
      navigate("/read")
    }).catch((err)=>{
      console.log(err);
    })

  }
  return (
    <>
          <div>
        <Link to={"/read"}>
        <button className='my-2 bg-blue-500 hover:bg-blue-600 w-[150px] h-10 rounded-md text-white font-semibold'>Read Data</button>
        </Link>
      </div>
    <div className='font-bold text-white bg-blue-500 text-center w-[250px] h-10 m-auto my-5 flex justify-center items-center rounded-md'>
      <h1>Create Data</h1>
    </div>
      <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>

        <div className='flex flex-col'>
          <label
            className='font-bold'>
              Name: 
          </label>
          <input 
            type="text" 
            placeholder=' Enter Name...' 
            className='border w-[250px] h-10 rounded-md'
            required
            onChange={(e)=> setName(e.target.value)}/>
        </div>

        <div className='flex flex-col'>
          <label 
            className='font-bold'>
              Email: 
          </label>
          <input 
            type="email" 
            placeholder=' Enter Email...' 
            className='border w-[250px] h-10 rounded-md'
            required
            onChange={(e)=> setEmail(e.target.value)}/>
        </div>

        <div className='flex flex-col'>
          <label 
            className='font-bold'>
              Age: 
          </label>
          <input 
            type="number" 
            placeholder=' Enter Age...' 
            className='border w-[250px] h-10 rounded-md'
            required
            onChange={(e)=> setAge(e.target.value)}/>
        </div>

        <br />
        <input 
          type="submit" 
          value="Submit" 
          className='bg-blue-500 hover:bg-blue-600 w-20 h-10 rounded-md font-bold text-white'/>

      </form>
    </>
  )
}

export default Create
