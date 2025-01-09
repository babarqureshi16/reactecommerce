import React from 'react'
import bg from '../assets/images/bg.jpg'
function Home() {
  return (
    <>
    <div class="card bg-dark text-white">
  <img src={bg} class="card-img" height='550px' alt="..."/>
  <div class="card-img-overlay d-flex justify-content-end flex-column">
   <div className="container">
    <h5 class="card-title display-3 fw-bold">All New Seasonal Arrivals</h5>
    <p class="card-text fw-bold">Go And Check Out New Trend</p>
  </div>
  </div>
</div>
    </>
  )
}

export default Home