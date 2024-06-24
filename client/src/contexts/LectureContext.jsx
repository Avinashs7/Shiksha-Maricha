import React,{useContext,createContext,useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios';

const lectureContext=createContext();

export const useLecture=()=>{
    return useContext(lectureContext);
}

export const LectureProvider=(props)=>{
    const [lectures,setLectures]=useState([]);
    const {courseId}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        const getLecture=async()=>{
            if(!localStorage.getItem('token'))navigate('/');
            await axios.get(`http://localhost:8000/lecture/api/get/${courseId}`,
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            .then((data)=>{
                setLectures(data.data)
            })
        }
        getLecture();
    },[])
    return (
        <lectureContext.Provider value={{lectures}}>
            {props.children}
        </lectureContext.Provider>
    );
}