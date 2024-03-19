import React from 'react'
import { useParams } from 'react-router'
import {MDBContainer} from 'mdb-react-ui-kit';
import { useEffect,useRef } from 'react';

export default function Lecture() {
    const cloudinaryRef=useRef();
    const {url}=useParams();
    const videoRef=useRef();
    useEffect(()=>{
        if(cloudinaryRef.current)return;
        cloudinaryRef.current=window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current,{
            cloud_name:'dbktadldz',
        });
    },[])
  return (
    <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <MDBContainer>
                <div className="ratio ratio-16x9">
                    <video ref={videoRef} data-cld-public-id={'lectures/'+url} width={1080} height={720} controls></video>
                </div>
            </MDBContainer>
        </div>
    </>
    )
}
