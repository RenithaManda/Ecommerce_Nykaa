import React from 'react'
import { Link } from 'react-router-dom'
export default function Natural() {
  return (
    <div>
     <nav class="navbar navbar-expand-lg bg-body-teritary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img padding-left="12%"  align="left"  width="30%" src="data:image/png;base64,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" alt='logo'></img></a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to='/' class="nav-link active text-black" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Brands</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">NykaaFashion</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">BeautyAdvice</a>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">SignIn</button>
        {/* <button type="button" class="btn btn-danger">SignIn</button> */}
        
      </form>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
    </div>
    </div></nav>
  
<hr/>

<div class="container text-center">
  <div class="row">
    <div class="col">
    {/* <p class="text-secondary"><Link to="/makeup">MakeUp</Link></p> */}
    <Link to='/makeup' class="nav-link active text-secondary" aria-current="page" href="#">MakeUp</Link>
    </div>
    <div class="col">
    <Link to='/skin' class="nav-link active text-secondary" aria-current="page" href="#">Skin</Link>
      
    </div>
    <div class="col">
    <Link to='/hair' class="nav-link active text-secondary" aria-current="page" href="#">Hair</Link>
      
    </div>
    <div class="col">
    <Link to='/appliances' class="nav-link active text-secondary" aria-current="page" href="#">Appliances</Link>
      
    </div>
    <div class="col">
    <Link to='/bodybath' class="nav-link active text-secondary" aria-current="page" href="#">Bath&Body</Link>
      
    </div>
    <div class="col">
    <Link to='/natural' class="nav-link active text-secondary" aria-current="page" href="#">Natural</Link>
      
    </div>
    <div class="col">
    <Link to='/mombaby' class="nav-link active text-secondary" aria-current="page" href="#">Mom&Baby</Link>
      
    </div>
    <div class="col">
    <Link to='/healthwellness' class="nav-link active text-secondary" aria-current="page" href="#">Health&Wellness</Link>
      
    </div>
    <div class="col">
    <Link to='/man' class="nav-link active text-secondary" aria-current="page" href="#">Man</Link>
     
    </div>
    <div class="col">
    <Link to='/fragrance' class="nav-link active text-secondary" aria-current="page" href="#">Fragrance</Link>
      
    </div>
    
  </div>
</div>
<hr></hr>
        <h1>Natural</h1>
    </div>
  )
}
