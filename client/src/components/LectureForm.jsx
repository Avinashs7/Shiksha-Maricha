import axios from 'axios';
import React, { useState } from 'react';
import {InfinitySpin} from 'react-loader-spinner'
import { useParams,useNavigate } from 'react-router';


export default function LectureForm() {
    const [loading,setLoading]=useState(false);
    const {cid}=useParams();
    const [Lecture, setLecture] = useState({course_id:cid});
    const cloud_name='dbktadldz' 
    const navigate=useNavigate();
    const handleVideoChange=async(e)=>{
        const file = e.target.files[0];
        const preset='lectures'
        try{
            setLoading(true);
            axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/video/upload`,{file:file,upload_preset:preset},
            {headers:{'Content-Type':'multipart/form-data'}})
            .then((videoUrl)=>{

                setLecture({...Lecture,links:videoUrl.data.public_id});
                setLoading(false);
            })
            .catch((err)=>console.error(err))
        }
        catch(err){
            console.error(err);
        }
    }
    const handleImageChange=async(e)=>{
        const file = e.target.files[0]; 
        const preset='profile'
        try{
            setLoading(true);
            await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,{file:file,upload_preset:preset},
            {headers:{'Content-Type':'multipart/form-data'}})
            .then((imgUrl)=>{
                setLecture({...Lecture,thumbnail:imgUrl.data.secure_url});
                setLoading(false);
            })
            .catch(err=>console.log(err))
        }
        catch(err){
            console.error(err);
        }
    }
    const handleForm=async(e)=>{
        setLecture({...Lecture,[e.target.name]:e.target.value})
    }
    const handleLecture = async (e) => {
        e.preventDefault();
        if (!Lecture) {
            console.error('No file selected');
            return;
        }
        try{
            if(!Lecture.videoUrl || !Lecture.imgUrl){
                setLoading(true);
                const token=localStorage.getItem('token')
                await axios.post('http://localhost:8000/lecture/api/add',Lecture,
                {headers:{Authorization:`Bearer ${token}`}})
                .then((data)=>{
                    console.log(data.data.success);
                    navigate(`/course/${cid}`);
                    setLoading(false);
                })
                    .catch((err)=>console.log(err))
                    setLecture({})
                    setLoading(false);
                }
            }
            catch(err){
            setLoading(false);
            console.error(err);
        }
    };

    return (
        <>
            <div className='lecture-form'>
                {loading&&
                        <div style={{textAlign:'center'}}><InfinitySpin visible={true} width="200" color="#4fa94d" ariaLabel="infinity-spin-loading"/></div>
                    } 
                <h1>Add Lecture</h1>
                <form onSubmit={!loading&&handleLecture}>
                    <label className='form-label'>Title</label><br/>
                    <input className='form control' type='text' name="title" onChange={handleForm}></input><br/>
                    <label className='form-label'>Description</label><br/>
                    <input className='form control' type='text' name="description" onChange={handleForm}></input><br/>
                    <label className="form-label">Add thumbnail to lecture</label><br/>
                    <input className="form-control" type="file" onChange={handleImageChange} /><br/>
                    <label className="form-label">Add video lecture here</label><br/>
                    <input className="form-control" type="file" onChange={handleVideoChange} /><br/>
                    <button type='submit' className='btn btn-primary'>Add lecture
                                           
                </button><br/>
                </form>
            </div>
        </>
    );
}

// const handlePreview = (file) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//         setImage(reader.result);
//     };
// };
// const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader=new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend=()=>{
//         setImage(reader.result);
//     }
// };