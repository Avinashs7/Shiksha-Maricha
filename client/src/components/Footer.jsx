import React from 'react';

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="text-center text-lg-start text-black" style={{ backgroundColor: 'rgba(225, 224, 220, 0.893)', padding: '1rem', marginTop: '2rem' }}>
          <section className="d-flex justify-content-between p-2" style={{ backgroundColor: 'black' }}>
            <div className="me-3">
              <span style={{color:'white'}}>Get connected with us on social networks:</span>
            </div>
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
          <section className="footer-element">
            <div className="container text-center text-md-start mt-3">
              <div className="row mt-2">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-3">
                  <h6 className="text-uppercase fw-bold">Shiksha Marichi</h6>
                  <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '1px' }} />
                  <p>
                  We are dedicated to illuminating minds with exceptional instruction from top educators worldwide, empowering learners to achieve their full potential.                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-3">
                  <p>
                    <a href="#!" className="text-black">Your Account</a>
                  </p>
                  <p>
                    <a href="#!" className="text-black">Become an Affiliate</a>
                  </p>
                  <p>
                    <a href="#!" className="text-black">Shipping Rates</a>
                  </p>
                  <p>
                    <a href="#!" className="text-black">Help</a>
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-3">
                  <p>
                    <a href="#!" className="text-black">Terms</a>
                  </p>
                  <p>
                    <a href="#!" className="text-black">Privacy policy</a>
                  </p>
                  <p>
                    <a href="#!" className="text-black">Cookie settings</a>
                  </p>
                  <p>
                    <a href="#!" className="text-black">Sitemap</a>
                  </p>
                  <p>
                    <a href="#!" className="text-black">Accessibity statement</a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-3">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '1px' }} />
                  <p><i className="fas fa-home mr-2"></i><a>Bengaluru 560078</a></p>
                  <p><i className="fas fa-envelope mr-2"></i><a href='mailto:shikshamaricha@gmail.com'>shikshamaricha@gmail.com</a></p>
                  <p><i className="fas fa-phone mr-2"></i><a href='tel:6362787832'>+91 6362787832</a></p>
                  <p><i className="fas fa-print mr-2"></i> + 01 234 567 89</p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-2" style={{ backgroundColor: 'rgba(15, 15, 15, 0.3)' }}>
            © 2020 Copyright:
            <a className="text-black" href="https://shiksha-marichi.com/">shiksha-marichi.com</a>
          </div>

        </footer>

      </div>
    </div>
  );
};

export default Footer;
