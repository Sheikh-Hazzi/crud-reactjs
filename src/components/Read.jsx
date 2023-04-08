import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {

    const[apiData,setApiData]=useState([]);

    const getData=()=>{
        Axios.get("https://643000fbb289b1dec4bf05ed.mockapi.io/crud")
        .then((response)=>{
            setApiData(response.data)
        })
    };

    const handleDelete=(id)=>{
        Axios.delete(`https://643000fbb289b1dec4bf05ed.mockapi.io/crud/${id}`)
        .then(()=>{
            getData();
        }).catch((err)=>{
          console.log(err);
        })
    };

    const setDataToStorage=(id,name,age,email)=>{
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("age",age);
        localStorage.setItem("email",email);
    }

    useEffect(()=>{
            getData();
    },[]);

  return (
    <>
      <div>
        <Link to={"/"}>
        <button className='my-2 bg-blue-500 hover:bg-blue-600 w-[150px] h-10 rounded-md text-white font-semibold'>Create New Data</button>
        </Link>
      </div>
      <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                ID
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                NAME
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                AGE
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                EMAIL
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                EDIT
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                DELETE
              </th>
            </tr>
          </thead>
          <tbody>
            {
                apiData.map((item)=>{
                    const{id,e_name,e_age,e_email}=item;
                    return (
                        <>
                        <tr className="bg-gray-100 border-b">
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {id}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {e_name}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {e_age}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {e_email}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <Link to={"/edit"}>
                  <button 
                    className='bg-blue-500 hover:bg-blue-600 w-20 h-10 rounded-md text-white font-semibold'
                    onClick={()=> setDataToStorage(id,e_name,e_age,e_email)}>EDIT</button>
                </Link>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button 
                  className='bg-red-600 hover:bg-red-700 w-20 h-10 rounded-md text-white font-semibold' 
                  onClick={()=> {if(window.confirm("Are You sure to Delete Data ?")) {handleDelete(id)}}}>DELETE</button>
              </td>
            </tr>
                        </>
                 )
                })
            }
          </tbody>
        </table>
      
    </>
  )
}

export default Read
