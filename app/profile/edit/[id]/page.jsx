'use client'
import React from 'react'
import axios from 'axios'
import {useSession} from 'next-auth/react'
import {useState,useEffect} from 'react'
function page({params:{id}}) {
   const {data:session}=useSession();
    const [formData, setFormData] = useState({
        bio: '',
        college: '',
        branch:'',
        cgpa:'',
        location: '',
        skills: '',
        companyName:'',
        position:'',
        startDate:'',
        experience:'',
    });

    const handleData=(e)=>{
        const { name, value, type } = e.target;

        // Handle image file separately
        if (type === 'file') {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setFormData((prevData) => ({
                ...prevData,
                profilePic: reader.result, // Store the image URL in state
              }));
            };
            reader.readAsDataURL(file);
          }
        } else {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
    }

    const submitData=async(e)=>{
        e.preventDefault();
        if(id==session.user.id){
          const url=`${process.env.NEXT_PUBLIC_URL}/api/index?id=${id}`
        const response=await axios.put(url,formData);
        if(response.status===201){   
            console.log(response.data);
            alert("Updated Successfully 🚀");
            window.location.href=`/`;
        }   
        else{
            alert("Oops! Something went wrong 😔. Try again!");
        }   
        }
        else{
            alert("You are not authorized to update this profile");
            window.location.href=`/`;
        }
    }

  return (
    <div className='signup'>
      <div className='main'>
        <h2>Update Profile</h2>
        <div className='login-input'>
            <form onSubmit={submitData}>
                <input className='text' type="text" placeholder='Bio' value={formData.bio} onChange={handleData} name='bio' />
                <input className='text' type="text" placeholder='College' value={formData.college} onChange={handleData} name='college' />
                <input className='text' type="text" placeholder='Branch' value={formData.branch} onChange={handleData} name='branch' />
                <input className='text' type="text" placeholder='Cgpa' value={formData.cgpa} onChange={handleData} name='cgpa' />
                <input className='text' type="text" placeholder='Location' value={formData.location} onChange={handleData} name='location' />
                <input className='text' type="text" placeholder='Skills' value={formData.skills} onChange={handleData} name='skills'/>
                <input className='text' type="text" placeholder='Company Name' value={formData.companyName} onChange={handleData} name='companyName'/>
                <input className='text' type="text" placeholder='Position' value={formData.position} onChange={handleData} name='position' />
                <input className='text' type="text" placeholder='Start Date' value={formData.startDate} onChange={handleData} name='startDate' />
                <input className='text' type="number" placeholder='Experience (in Years)' value={formData.experience} onChange={handleData} name='experience' />
                <button className='login-submit' type='submit'>Update</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default page