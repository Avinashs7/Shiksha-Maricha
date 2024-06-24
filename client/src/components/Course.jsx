import React from 'react'

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useLecture } from '../contexts/LectureContext';

export default function Course(props) {
    const course=useLecture();
    const Lectures=course?.lectures;
    
  return (
    <>
        {Lectures&&
            <div className="card shadow p-3 mb-5 bg-white rounded">
            {Lectures.map((content, index) => (
                <div key={index}>
                <Link to={`/lecture/${content.links.split('/')[1]}`} style={{textDecoration:"none"}}>
                    <div className="d-flex">
                        <img
                        src={content.thumbnail}
                        alt={`Description of the image ${index + 1}`}
                        style={{ height: '280px', width: '440px', marginBottom: '20px' }}
                        />
                        <div className="ml-14 mt-4" >
                        <h3 className="card-title">{content.title}</h3>
                        <p className="card-text">{content.description}</p>
                        </div>
                    </div>
                </Link>
                {index < Lectures.length - 1 && <hr className="my-4" />}
                </div>
            ))}
            </div>
        }
        {props.role==='tutor'&&
        <div style={{textAlign:'center'}}>
            <Link to={`/add/lecture/${courseId}`}><Button>Add lecture</Button></Link>
        </div>
        }
    </>
    )
}
