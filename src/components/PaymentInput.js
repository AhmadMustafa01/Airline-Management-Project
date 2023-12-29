import React from 'react'

export default function PaymentInput() {
  return (
    <div>
    <div className="container customContainer mt-4 p-3">

        <label for="inputPassword5" className="form-label">Enter your Card Number</label>
        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
        <div id="passwordHelpBlock" className="form-text">
            Your Card Number must be 15 characters long, contain only numbers, and must not<br />contain special
            characters, or emoji.
        </div>

        <div className="col-12 text-center mt-2">
            <button type="submit" className="btn btn-primary"><a className="nav-link " aria-current="page"
                    href="ticket.html">Pay</a></button>
        </div>
    </div>
    </div>
  )
}
