import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Edit = () => {

    const[id,setId]=useState(0);
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[email,setEmail]=useState("");

    const navigate=useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setAge(localStorage.getItem("age"));
        setEmail(localStorage.getItem("email"))
    },[])

    const handleUpdate=(e)=>{
        e.preventDefault();
        Axios.put(`https://643000fbb289b1dec4bf05ed.mockapi.io/crud/${id}`,{
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
        <h1>Update Data</h1>
    </div>
        <form className='flex flex-col justify-center items-center' onSubmit={handleUpdate}>

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
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
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
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
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
            value={age}
            onChange={(e)=>setAge(e.target.value)}/>
    </div>

    <br />
        <input 
            type="submit" 
            value="Update" 
            className='bg-blue-500 hover:bg-blue-600 w-20 h-10 rounded-md font-bold text-white'/>

    </form>
    </>
  )
}

export default Edit
