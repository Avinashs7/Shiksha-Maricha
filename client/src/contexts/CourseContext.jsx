import React,{createContext, useContext, useState, useEffect} from 'react'
import axios from 'axios'

const courses=createContext(null);

export const useCourse=()=>{
    return useContext(courses);
}

export const CourseProvider=(props)=>{
    const [course,setCourse]=useState([]);

    useEffect(()=>{
        const getCards=async()=>{
          await axios.get('http://localhost:8000/course/getAllCourses')
          .then((data)=>{setCourse(data.data);})
          .catch((err)=>console.log(err))
        }
        getCards();
      },[])
    
      return (
        <courses.Provider value={{course}}>
            {props.children}
        </courses.Provider>
    );
}



