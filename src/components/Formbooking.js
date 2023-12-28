import React from 'react'

export default function Formbooking() {
    return (
        <div className="container customContainer mt-2 p-5 customContainer h-75 ">
            <form className="row g-3" method="post" action=''>
                <div className="col-md-12">
                    <label for="inputState" className="form-label fs-4">From</label>
                </div>
                <div className="col-md-12">
                    <select id="inputState" className="form-select">
                        <option selected>City</option>
                        <option>...</option>
                    </select>
                </div>

                <div className="col-md-12">
                    <label for="inputState" className="form-label fs-4">TO</label>
                    <select id="inputState" className="form-select">
                        <option selected>City</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="d-flex mt-4">
                    <div className="form-check me-5">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                        <label className="form-check-label  fs-5" for=" flexRadioDefault1">
                            One way
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label  fs-5" for="flexRadioDefault2">
                            Round Trip
                        </label>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-md-6">
                        <input type="text" className="form-control datepicker" id="departDate" placeholder="Depart Date" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control datepicker" id="returnDate" placeholder="Return Date" />
                    </div>
                </div>
                <div className="row mt-2 ">
                    <div className="col-md-6">

                        <label for="inputState" className="form-label fs-4">Travel class</label>
                        <select id="inputState" className="form-select">
                            <option selected>Economy</option>
                            <option>...</option>
                        </select>

                    </div>
                </div>
                <label for="" className="form-label fs-4">
                    Passengers :
                </label>
                <div className="container ">
                    <div className="row g-2">
                        <div className="col-6">
                            <div className="p-3">
                                <label for="inputState" className="form-label ">Adults</label>
                                <select id="inputState" className="form-select">
                                    <option selected>1</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="p-3">
                                <label for="inputState" className="form-label ">Young Adults</label>
                                <select id="inputState" className="form-select">
                                    <option selected>1</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="p-3">
                                <label for="inputState" className="form-label ">Childrens</label>
                                <select id="inputState" className="form-select">
                                    <option selected>1</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="p-3">
                                <label for="inputState" className="form-label ">Infants</label>

                                <select id="inputState" className="form-select">
                                    <option selected>1</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 text-end">
                    <button type="submit" className="btn btn-primary" ><a className="nav-link " aria-current="page" href="findflights.html">Find Flights</a></button>
                </div>
            </form>
        </div>
    )
}