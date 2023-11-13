import React from 'react'

export default function Loginadminform() {
  return (
    <div>

<div className="container logincontainer p-5 mt-5 ">
        <div className="text-center">
            <img src="plane.png" className="rounded " width="100" height="100" alt="..."/>
          </div>
        <p className="text-center fs-4 mb-4 fw-bold">Log in to your AAA account</p>

        <form>
            <div className="mb-3 col-12">
                <label for="exampleInputEmail1" className="form-label fs-5  ">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 col-12">
                <label for="exampleInputPassword1" className="form-label fs-5">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary  mx-auto">Login</button>
            </div>

        </form>
    </div>

    </div>
  )
}
