import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    
 <div class="jumbotron text-center">
        <h1>Welcome to AAA Airlines</h1>
        <p>Your gateway to amazing journeys!</p>
        <Link class="btn btn-primary" to="/booking">Book a Flight</Link>
 </div>


  
  )
}
