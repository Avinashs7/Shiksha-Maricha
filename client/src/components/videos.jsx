import { MDBContainer } from "mdb-react-ui-kit";
import React from 'react';

export default function Videos() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <MDBContainer>
        <div className="ratio ratio-16x9">
          <iframe
            src="vid2.webm"
            title="Vimeo video"
            allowFullScreen
            style={{ width: "90%", height:"90%" }}
          ></iframe>
        </div>
      </MDBContainer>
    </div>
  );
}
