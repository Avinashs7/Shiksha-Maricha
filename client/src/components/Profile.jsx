import React from 'react';
import { useState,useEffect,useRef } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {MDBCol,MDBContainer,MDBRow,MDBCard,MDBCardText,MDBCardBody,MDBCardImage,MDBBtn,MDBBreadcrumb,MDBBreadcrumbItem,MDBIcon,MDBListGroup,MDBListGroupItem
} from 'mdb-react-ui-kit';
import defaultImage from '../../public/default.jpg'
import { Button } from 'react-bootstrap';
import {InfinitySpin} from 'react-loader-spinner'
import {useProfile} from '../contexts/ProfileContext';

export default function ProfilePage(props) {
  const fileInputRef = useRef(null);
  const [edit,setEdit]=useState(false);
  const cloud_name='dbktadldz';
  const ProfileContext=useProfile();
  const user=ProfileContext?.user;
  
  const handleUserEdit=(e)=>{
    ProfileContext?.setUser({...user,[e.target.name]:e.target.value})
  }
  const handleProfileEdit=async(e)=>{
    e.preventDefault();
    ProfileContext?.setProfile({...ProfileContext?.profile,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!ProfileContext?.loading)
    ProfileContext?.setLoading(true);
    console.log(user)
    const token=localStorage.getItem('token');
    await axios.patch('http://localhost:8000/users/api/edit',user,{headers:{Authorization:`Bearer ${token}`}})
    .then((data)=>{
      console.log(data.data)
    })
    .catch(err=>console.log(err))
    await axios.patch('http://localhost:8000/profile/api/edit',ProfileContext?.profile,{headers:{Authorization:`Bearer ${token}`}})
    .then((data)=>{
      console.log(data.data)
    })
    .catch(err=>console.log(err))
    ProfileContext?.setRefresh(true);
    setEdit(false);
  }
  const updateUser=async(updated)=>{
    const token=localStorage.getItem('token');
    await axios.patch('http://localhost:8000/users/api/edit',updated,{headers:{Authorization:`Bearer ${token}`}})
    .then((data)=>{
      console.log(data.data)
      ProfileContext?.setLoading(false);
    })
    .catch(err=>{console.log(err);ProfileContext?.setLoading(false);})
  }
  const handleProfilePhoto=async(e)=>{
    const file = e.target.files[0]; 
    const preset='profile'
    try{
        ProfileContext?.setLoading(true);
        await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,{file:file,upload_preset:preset},
        {headers:{'Content-Type':'multipart/form-data'}})
        .then((imgUrl)=>{
          const updated={...user,photo:imgUrl.data.secure_url};
          updateUser(updated)
        })
        .catch(err=>console.log(err))
    }
    catch(err){
        console.error(err);
    }
}
const handleButtonClick = (e) => {
  e.preventDefault();
  fileInputRef.current.click();
};
  return (
    <section style={{ backgroundColor: '#eee' }}>
      {ProfileContext?.loading&&
      <div style={{textAlign:'center'}}><InfinitySpin visible={true} width="200" color="#4fa94d" ariaLabel="infinity-spin-loading"/></div>
      }
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <Link to='/'>Home</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <Link to="/">User</Link>
              </MDBBreadcrumbItem>
              {props.role==='university'?
              <MDBBreadcrumbItem active>University Profile</MDBBreadcrumbItem>
              :
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              }
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                {user.photo?
                  <MDBCardImage src={user.photo} alt="avatar" className="rounded-circle" style={{ width: '150px' }} fluid />
                  :
                  <MDBCardImage src={defaultImage} alt="avatar" className="rounded-circle" style={{ width: '150px' }} fluid />
                }
                <div className="d-flex justify-content-center mb-2">
                  {user.photo?
                  <>
                    <input ref={fileInputRef} type="file" style={{ display: 'none' }} onChange={handleProfilePhoto}></input>
                    <MDBBtn onClick={handleButtonClick} className="btn-edit"><i class="fas fa-edit"></i></MDBBtn>
                  </>
                    :
                    <>
                    <input ref={fileInputRef} type="file" style={{ display: 'none' }} onChange={handleProfilePhoto}></input>
                    <MDBBtn onClick={handleButtonClick} className="btn-edit"><i class="fa-solid fa-plus"></i></MDBBtn>
                    </>
                  }
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="linkedin-in fa-lg" style={{ color: '#0082ca' }}/>
                    {ProfileContext?.profile?.linkedin?
                      <MDBCardText><a href={ProfileContext?.profile?.linkedin}>{ProfileContext?.profile?.linkedin}</a></MDBCardText>
                    :
                      <MDBCardText className="formInput"><input type='text' placeholder='URL: https://linkedin.com/username/'></input></MDBCardText>
                    }
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    {ProfileContext?.profile?.github?
                      <MDBCardText><a href={ProfileContext?.profile?.github}>{ProfileContext?.profile?.github}</a></MDBCardText>
                    :
                      <MDBCardText className="formInput"><input type='text' placeholder='URL: https://github.com/username/'></input></MDBCardText>
                    }     
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    {ProfileContext?.profile.twitter?
                      <MDBCardText><a href={ProfileContext?.profile.twitter}>{ProfileContext?.profile.twitter}</a></MDBCardText>
                    :
                      <MDBCardText className="formInput"><input type='text' placeholder='URL: https://twitter.com/username/'></input></MDBCardText>
                    } 
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <div className='left-corner'>
              {edit?
                <Button className="btn-edit" onClick={handleSubmit}><i class="fa-solid fa-check"></i></Button>
                :
                <Button className='btn-edit' onClick={()=>{setEdit(true)}}><i class="fas fa-edit"></i></Button>
              }
            </div>
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    {edit?
                      <MDBCardText className="text-muted" >
                        <input type='text' name='firstName' value={user.firstName} onChange={handleUserEdit}></input>
                        <input type='text' name='lastName' value={user.lastName} onChange={handleUserEdit}></input>
                      </MDBCardText>
                    :
                      <MDBCardText className="text-muted">{user.firstName+' '+user.lastName}</MDBCardText>
                    }
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    {edit?
                    <MDBCardText className="text-muted">
                      <select name='gender' onChange={handleUserEdit}>
                        {
                          user.gender==='male'?
                          <>
                            <option name='gender' value='male'>male</option>
                            <option name='gender' value='female'>female</option>
                          </>
                          :
                          <>
                            <option name='gender' value='female'>female</option>
                            <option name='gender' value='male'>male</option>
                          </>
                        }
                      </select>
                    </MDBCardText>
                    :
                    <MDBCardText className="text-muted">{user.gender}</MDBCardText>
                    }
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    {
                      edit?
                      <MDBCardText className='text-muted'>
                        <input type='number' name='phone' value={ProfileContext?.profile?.phone} onChange={handleProfileEdit}></input>
                      </MDBCardText>
                      :
                      <MDBCardText className="text-muted">{ProfileContext?.profile?.phone}</MDBCardText>
                    }
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Qualification</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    {edit?
                    <MDBCardText className='text-muted'>
                      <input type='text' name='qualification' value={ProfileContext?.profile?.qualification} onChange={handleProfileEdit}></input>
                    </MDBCardText>
                    :
                    <MDBCardText className="text-muted">{ProfileContext?.profile?.qualification}</MDBCardText>
                    }
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    {
                      edit?
                      <MDBCardText className="text-muted">
                        <input type='text' name='address' value={ProfileContext?.profile.address} onChange={handleProfileEdit}></input>
                      </MDBCardText>
                      :
                      <MDBCardText className="text-muted">{ProfileContext?.profile?.address}</MDBCardText>
                    }
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}