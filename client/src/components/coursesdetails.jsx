import React from 'react';

export default function CoursesDetails() {
  const contentData = [
    {
      imgSrc: 'img4.jpg',
      title: 'Special title treatment',
      text: 'With supporting text below as a natural lead-in to additional content.',
    },
    {
      imgSrc: 'img7.jpg',
      title: 'Another special title',
      text: 'More supporting text for another content section.',
    },
  ];

  return (
    <div className="card shadow p-3 mb-5 bg-white rounded">
      <h1 style={{ textAlign: 'center' }}>Let's get started </h1>
      {/* <h2 className="text-center">Course Details</h2> */}
      {contentData.map((content, index) => (
        <div key={index}>
          <div className="d-flex">
            <img
              src={content.imgSrc}
              alt={`Description of the image ${index + 1}`}
              style={{ height: '200px', width: '10%', marginBottom: '20px' }}
            />
            <div className="ml-2 mt-4">
              <h5 className="card-title">{content.title}</h5>
              <p className="card-text">{content.text}</p>
              <a href="videos" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          {index < contentData.length - 1 && <hr className="my-4" />}
        </div>
      ))}
    </div>
  );
}
