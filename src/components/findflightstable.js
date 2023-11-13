import React from 'react'

export default function Findflightstable() {
  return (
    <div>
   <div class="container mt-5 customContainer">


<table class="table">
    <thead>
        <tr>
            <th scope="col">Flight #</th>
            <th scope="col">Origin</th>
            <th scope="col">Destination</th>
            <th scope="col">Time</th>
            <th scope="col">Status</th>
            <th scope="col">Booking</th>

        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row"><img src={process.env.PUBLIC_URL + '/plane.png'} alt="" width="30" height="24"/>pk280</th>
            <td>Lahore</td>
            <td>Karachi</td>
            <td>12pm</td>
            <td>On time</td>
            <td><button type="button" class="btn btn-outline-warning">Book</button></td>
        </tr>
        <tr>
            <th scope="row"><img src={process.env.PUBLIC_URL + '/plane.png'} alt="" width="30" height="24"/>pk280</th>
            <td>Lahore</td>
            <td>Karachi</td>
            <td>7pm</td>
            <td>On time</td>
            <td><a href="passdetails.html"><button type="button" class="btn btn-outline-warning">Book</button></a></td>
        </tr>
    </tbody>
</table>

</div>
    </div>
  )
}
