import React from 'react'

function Footer() {
  return (
    <div>
                {/* Footer Start */}
                <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-4 col-md-6 footer-about">
                <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                  <a href="index.html" className="navbar-brand">
                    <h1 className="m-0 text-white"><img  src='assets/images/download.png' style={{height:60,borderRadius:60/2}}/>Newsletter</h1>
                  </a>
                  <p className="mt-3 mb-4">               

If you want to get our latest informations or updates, can subscribe here.
                  </p>
                  <form action>
                    <div className="input-group">
                      <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                      <button className="btn btn-dark">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-8 col-md-6">
                <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                      <h3 className="text-light mb-0">Get In Touch</h3>
                    </div>
                    <div className="d-flex mb-2">
                      <i className="bi bi-geo-alt text-primary me-2" />
                      <p className="mb-0">Entebe road, Kampala, UG</p>
                    </div>
                    <div className="d-flex mb-2">
                      <i className="bi bi-envelope-open text-primary me-2" />
                      <p className="mb-0">riha@gmail.com</p>
                    </div>
                    <div className="d-flex mb-2">
                      <i className="bi bi-telephone text-primary me-2" />
                      <p className="mb-0">+256 709 843 765</p>
                    </div>
                    <div className="d-flex mt-4">
                      <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-twitter fw-normal" /></a>
                      <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-facebook-f fw-normal" /></a>
                      <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-linkedin-in fw-normal" /></a>
                      <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram fw-normal" /></a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">

                    <div className="link-animated d-flex flex-column justify-content-start">

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid text-white" style={{background: '#061429'}}>
          <div className="container text-center">
            <div className="row justify-content-end">
              <div className="col-lg-8 col-md-6">
                <div className="d-flex align-items-center justify-content-center" style={{height: '75px'}}>
                © Copyright RIHA. All Rights Reserved
Created with ❤️ by Jessy Bandya
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
    </div>
  )
}

export default Footer