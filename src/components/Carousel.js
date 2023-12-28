import React from 'react'

export default function Carousel() {
  return (
    <div>

<div id="imageCarousel" className="carousel slide" data-ride="carousel">
<ol className="carousel-indicators">
    <li data-target="#imageCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#imageCarousel" data-slide-to="1"></li>
    <li data-target="#imageCarousel" data-slide-to="2"></li>
</ol>
<div className="carousel-inner">
  
    <div className="carousel-item active">
        <img src="image1.jpg" className="d-block w-100" alt="Image 1"/>
    </div>
    
    <div className="carousel-item">
        <img src="image2.jpg" className="d-block w-100" alt="Image 2"/>
    </div>
   
    <div className="carousel-item">
        <img src="image3.jpeg" className="d-block w-100" alt="Image 3"/>
    </div>
</div>
<a className="carousel-control-prev" href="#imageCarousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
</a>
<a className="carousel-control-next" href="#imageCarousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
</a>
</div>
    </div>
  )
}
