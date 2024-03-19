import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import { InfinitySpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router';

export default function CourseForm() {
    const [loading,setLoading]=useState(false);
    const [course, setCourse] = useState();
    const navigate=useNavigate();
    const cloud_name='' 
    const handleImageChange=async(e)=>{
        const file = e.target.files[0]; 
        const preset='courses'
        try{
            setLoading(true);
            await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,{file:file,upload_preset:preset},
            {headers:{'Content-Type':'multipart/form-data'}})
            .then((imgUrl)=>{
                setCourse({...course,thumbnail:imgUrl.data.secure_url});
                setLoading(false);
            })
            .catch(err=>console.log(err))
        }
        catch(err){
            console.error(err);
        }
    }
    const handleForm=async(e)=>{
        setCourse({...course,[e.target.name]:e.target.value})
    }
const handleCourse = async (e) => {
    e.preventDefault();
    if (!course) {
        console.error('No file selected');
        return;
    }
    try{
        if(!course.imgUrl){
            console.log(course)
            setLoading(true);
            const token=localStorage.getItem('token')
            await axios.post('http://localhost:8000/course/api/add',course,
            {headers:{Authorization:`Bearer ${token}`}})
            .then((data)=>{
                console.log(data.data.success);
                setLoading(false);
                navigate(`/course/${data.data.courseId}`)
            })
            setCourse({})
        }
    }
        catch(err){
            console.error(err);
            setLoading(false);
        }
    };

    return (
        <>
            <div className='lecture-form'>
                <h1>Add Course</h1>
                {loading&&
                    <div style={{textAlign:'center'}}><InfinitySpin visible={true} width="200" color="#4fa94d" ariaLabel="infinity-spin-loading"/></div>
                }                    
                <form onSubmit={!loading&&handleCourse}>
                    <label className='form-label'>Title</label><br/>
                    <input className='form control' type='text' name="title" onChange={handleForm}></input><br/>
                    <label className='form-label'>Description</label><br/>
                    <input className='form control' type='text' name="description" onChange={handleForm}></input><br/>
                    <label className="form-label">Stream</label><br/>
                    <input className="form-control" type="text" name="stream" onChange={handleForm}/><br/>
                    <label className="form-label">Add thumbnail to lecture</label><br/>
                    <input className="form-control" type="file" onChange={handleImageChange} /><br/>
                    <button type='submit' className='btn btn-primary'>Add Course
                    </button><br/>
                </form>
            </div>
        </>
    );
}
