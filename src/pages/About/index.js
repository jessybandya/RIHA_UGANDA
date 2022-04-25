import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function About() {
  return (
    <div>
              <div>
        <div className="container-fluid bg-dark px-5 d-none d-lg-block">
          <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center" style={{height: '45px'}}>
                <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2" />123 Street, New York, USA</small>
                <small className="me-3 text-light"><i className="fa fa-phone-alt me-2" />+012 345 6789</small>
                <small className="text-light"><i className="fa fa-envelope-open me-2" />info@example.com</small>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-inline-flex align-items-center" style={{height: '45px'}}>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal" /></a>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal" /></a>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal" /></a>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar Start */}
        <div className="container-fluid position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="/" className="navbar-brand p-0">
              <h1 className="m-0"><i className="fa fa-user-tie me-2" />Startup</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="/" className="nav-item nav-link">Home</a>
                <a href="/about" className="nav-item nav-link active">About</a>
                <a href="service.html" className="nav-item nav-link">Services</a>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                  <div className="dropdown-menu m-0">
                    <a href="blog.html" className="dropdown-item">Blog Grid</a>
                    <a href="detail.html" className="dropdown-item">Blog Detail</a>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu m-0">
                    <a href="price.html" className="dropdown-item">Pricing Plan</a>
                    <a href="feature.html" className="dropdown-item">Our features</a>
                    <a href="team.html" className="dropdown-item">Team Members</a>
                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    <a href="quote.html" className="dropdown-item">Free Quote</a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
              </div>
            </div>
          </nav>
          <div className="container-fluid bg-primary py-5 bg-header" style={{marginBottom: '90px'}}>
            <div className="row py-5">
              <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-4 text-white animated zoomIn">About Us</h1>
                <a href className="h5 text-white">Home</a>
                <i className="far fa-circle text-white px-2" />
                <a href className="h5 text-white">About</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* About Start */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
              <h1 className="mb-0">The Best IT Solution With 10 Years of Experience</h1>
            </div>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
            <div className="row g-0 mb-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 className="mb-3"><i className="fa fa-check text-primary me-3" />Award Winning</h5>
                <h5 className="mb-3"><i className="fa fa-check text-primary me-3" />Professional Staff</h5>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 className="mb-3"><i className="fa fa-check text-primary me-3" />24/7 Support</h5>
                <h5 className="mb-3"><i className="fa fa-check text-primary me-3" />Fair Prices</h5>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
              <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                <i className="fa fa-phone-alt text-white" />
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Call to ask any question</h5>
                <h4 className="text-primary mb-0">+012 345 6789</h4>
              </div>
            </div>
            <a href="quote.html" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</a>
          </div>
          <div className="col-lg-5" style={{minHeight: '500px'}}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about.jpg" style={{objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Team Start */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
          <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
          <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
                <div className="team-social">
                  <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
                  <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
                  <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
                  <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
                </div>
              </div>
              <div className="text-center py-4">
                <h4 className="text-primary">Full Name</h4>
                <p className="text-uppercase m-0">Designation</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                <div className="team-social">
                  <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
                  <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
                  <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
                  <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
                </div>
              </div>
              <div className="text-center py-4">
                <h4 className="text-primary">Full Name</h4>
                <p className="text-uppercase m-0">Designation</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
                <div className="team-social">
                  <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
                  <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
                  <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
                  <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
                </div>
              </div>
              <div className="text-center py-4">
                <h4 className="text-primary">Full Name</h4>
                <p className="text-uppercase m-0">Designation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default About