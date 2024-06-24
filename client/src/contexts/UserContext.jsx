import React,{useContext,createContext,useEffect,useState} from 'react'
import axios from 'axios'
const UserContext=createContext();

export const useUser=()=>{
    return useContext(UserContext);
}

export const UserProvider=(props)=>{
    const [user,setUser]=useState(null);
    const [loggedIn,setLogin]=useState(false);
    const [loginDetails,setLoginDetails]=useState([]);
    const [signupDetails,setSignUpDetails]=useState([]);

    useEffect(()=>{
        const getUser=async()=>{
          const token=localStorage.getItem('token');
          await axios.get('http://localhost:8000/users/api',{headers:{Authorization:`Bearer ${token}`}})
          .then((response)=>{
            setUser(response.data)
          })
          .catch(err=>{
            console.log(err);
          });
        }
        if(localStorage.getItem('token'))
        getUser()
      },[loggedIn])

      const handleGoogleSignIn=async()=>{
        await axios.get('http://localhost:8000/users/google/signin')
        .then((data)=>{
          window.location.replace(data.data.url)
        })
        .catch((err)=>{
          console.error(err);
        })
      }

      const handleLogin=async ()=>{
        if(loginDetails.email!==undefined && loginDetails.password!==undefined){
          await axios.post('http://localhost:8000/users/login',loginDetails)
          .then((data)=>{
            setLogin(data.data.success)
            if(data.data.success){
              localStorage.setItem('token',data.data.token);
              localStorage.setItem('role',data.data.userRole);
            }
            else{
              setError('Incorrect username or password')
              console.log(err)
            }
          })
          .catch((err)=>{console.log(err)})
        }
      }
      const handleSignUp=async()=>{
        await axios.post('http://localhost:8000/users/signup',signupDetails)
        .then((data)=>{
          if(data.data.success){
            setLogin(true)
            localStorage.setItem('token',data.data.token);
            localStorage.setItem('role',data.data.userRole);
          }
          else{
            setError('User already exists');
          }
        })
      }
    return (
        <UserContext.Provider value={{user,loggedIn,setLogin,handleGoogleSignIn,handleLogin,handleSignUp,signupDetails,setSignUpDetails,loginDetails,setLoginDetails}}>
            {props.children}
        </UserContext.Provider>
    );
}