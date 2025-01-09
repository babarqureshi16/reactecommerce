import React from 'react'

function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-white shadow-sm p-3">
  <div class="container-fluid">
    <a class="navbar-brand fs-2 fw-bold" href="#">Fusion</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <div className="buttons">
        <a href="" className='btn btn-outline-dark me-2 fs-6 fw-bold' >
           <i className='fa fa-sign-in me-2'></i>Login</a>
        <a href="" className='btn btn-outline-dark me-2 fs-6 fw-bold'>
            <i className='fa fa-user-plus me-2'></i>Register</a>
        <a href="" className='btn btn-outline-dark me-2 fs-6 fw-bold'>
            <i className='fa fa-cart-plus me-2'></i>Add To Cart (0)</a>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar