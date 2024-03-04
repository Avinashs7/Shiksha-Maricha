import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div>

        {/* Footer */}
        <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331', padding: '1rem', marginTop: '2rem' }}>

          {/* Section: Social media */}
          <section className="d-flex justify-content-between p-2" style={{ backgroundColor: '#6351ce' }}>
            {/* Left */}
            <div className="me-3">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Right */}
            <div>
              <a href="#" className="text-white me-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>
          {/* Section: Social media */}

          {/* Section: Links */}
          <section className="">
            <div className="container text-center text-md-start mt-3">
              {/* Grid row */}
              <div className="row mt-2">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-3">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold">Company name</h6>
                  <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '1px' }} />
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-3">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '1px' }} />
                  <p>
                    <a href="#!" className="text-white">MDBootstrap</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">MDWordPress</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">BrandFlow</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">Bootstrap Angular</a>
                  </p>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-3">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '1px' }} />
                  <p>
                    <a href="#!" className="text-white">Your Account</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">Become an Affiliate</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">Shipping Rates</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">Help</a>
                  </p>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-3">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '1px' }} />
                  <p><i className="fas fa-home mr-2"></i> New York, NY 10012, US</p>
                  <p><i className="fas fa-envelope mr-2"></i> info@example.com</p>
                  <p><i className="fas fa-phone mr-2"></i> + 01 234 567 88</p>
                  <p><i className="fas fa-print mr-2"></i> + 01 234 567 89</p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links */}

          {/* Copyright */}
          <div className="text-center p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>

        </footer>
        {/* Footer */}

      </div>
      {/* End of .container */}
    </div>
  );
};

export default Footer;
