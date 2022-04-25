import React from 'react'

function Header() {
  return (
    <div>

                    {/* <!-- Spinner Start --> */}
    {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner"></div>
    </div> */}
    {/* <!-- Spinner End --> */}
    
         {/* <!-- Topbar Start --> */}
    <div class="container-fluid bg-dark px-5 d-none d-lg-block">
        <div class="row gx-0">
            <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center" style={{height:45}}>
                    <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>Entebe road, Kampala, UG</small>
                    <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>+256 709 843 765</small>
                    <small class="text-light"><i class="fa fa-envelope-open me-2"></i>riha@gmail.com</small>
                </div>
            </div>
            <div class="col-lg-4 text-center text-lg-end">
                <div class="d-inline-flex align-items-center" style={{height:45}}>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-twitter fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-instagram fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i class="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}

            {/* <!-- Navbar & Carousel Start --> */}
            <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <a href="/" class="navbar-brand p-0">
            <h1 class="m-0"><img  src='assets/images/download.png' style={{height:60,borderRadius:60/2}}/>
              RIHA UGANDA


            </h1>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="fa fa-bars" />
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
              <a href="/" class="nav-item nav-link active">Home</a>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">About Us</a>
                <div class="dropdown-menu m-0">
                  <a href="price.html" class="dropdown-item">Pricing Plan</a>
                  <a href="feature.html" class="dropdown-item">Our features</a>
                  <a href="team.html" class="dropdown-item">Team Members</a>
                  <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                  <a href="quote.html" class="dropdown-item">Free Quote</a>
                </div>
              </div>
              <a href="service.html" class="nav-item nav-link">Services</a>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Issues Of Actions</a>
                <div class="dropdown-menu m-0">
                  <a href="price.html" class="dropdown-item">Pricing Plan</a>
                  <a href="feature.html" class="dropdown-item">Our features</a>
                  <a href="team.html" class="dropdown-item">Team Members</a>
                  <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                  <a href="quote.html" class="dropdown-item">Free Quote</a>
                </div>
              </div>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Our Activities</a>
                <div class="dropdown-menu m-0">
                  <a href="price.html" class="dropdown-item">Pricing Plan</a>
                  <a href="feature.html" class="dropdown-item">Our features</a>
                  <a href="team.html" class="dropdown-item">Team Members</a>
                  <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                  <a href="quote.html" class="dropdown-item">Free Quote</a>
                </div>
              </div>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Join Us</a>
                <div class="dropdown-menu m-0">
                  <a href="price.html" class="dropdown-item">Pricing Plan</a>
                  <a href="feature.html" class="dropdown-item">Our features</a>
                  <a href="team.html" class="dropdown-item">Team Members</a>
                  <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                  <a href="quote.html" class="dropdown-item">Free Quote</a>
                </div>
              </div>
              <a href="contact.html" class="nav-item nav-link">Photo Library</a>
              <a href="contact.html" class="nav-item nav-link">Contact</a>
            </div>
          </div>
        </nav>
        <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="w-100 " style={{height:600,objectFit:'cover'}} src="assets/images/sanitation.jpg" alt="Image" />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={{maxwidth: 900}}>
                  <h5 class="text-white text-uppercase mb-3 animated slideInDown">Creative &amp; Innovative</h5>
                  <h1 class="display-1 text-white mb-md-4 animated zoomIn">Water, Sanitation and Hygiene</h1>
                </div>
              </div>
            </div>
            <div class="carousel-item">
            <img class="w-100 " style={{height:600,objectFit:'cover'}} src="assets/images/agrics.jpg" alt="Image" />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={{maxwidth: 900}}>
                  <h5 class="text-white text-uppercase mb-3 animated slideInDown">Creative &amp; Innovative</h5>
                  <h1 class="display-1 text-white mb-md-4 animated zoomIn">Agricultural Activities Initiatives</h1>
                </div>
              </div>
            </div>

            <div class="carousel-item">
            <img class="w-100 " style={{height:600,objectFit:'cover'}} src="assets/images/edu.jpg" alt="Image" />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={{maxwidth: 900}}>
                  <h5 class="text-white text-uppercase mb-3 animated slideInDown">Creative &amp; Innovative</h5>
                  <h1 class="display-1 text-white mb-md-4 animated zoomIn">Education Initiative</h1>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    {/* <!-- Navbar & Carousel End --> */}

    
    </div>
  )
}

export default Header