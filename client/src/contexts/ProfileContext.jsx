import React,{useEffect,useState,useContext,createContext} from 'react'
import axios from 'axios';


const ProfileContext=createContext();

export const useProfile=()=>{
    return useContext(ProfileContext);
}

export const ProfileProvider=(props)=>{
    const [user,setUser]=useState({});
    const [profile,setProfile]=useState({});
    const [refresh,setRefresh]=useState(false);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        const getProfile=async()=>{
          const token=localStorage.getItem('token');
          await axios.get('http://localhost:8000/users/api',{headers:{Authorization:`Bearer ${token}`}})
          .then((response)=>{
            setUser(response.data)
          })
          .catch(err=>{
            console.log(err);
          });
          await axios.get('http://localhost:8000/profile/api',{headers:{Authorization:`Bearer ${token}`}})
          .then((response)=>{
            setProfile(response.data)
          })
          .catch(err=>{
            console.log(err);
          });
        }
        getProfile();
        setRefresh(false);
        setLoading(false);
      },[refresh])
    
    return (
        <ProfileContext.Provider value={{profile,setProfile,user,setLoading,loading,setRefresh,setUser}}>
            {props.children}
        </ProfileContext.Provider>
    );
}