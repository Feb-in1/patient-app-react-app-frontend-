import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const AddPatient = () => {
    const [data, setData] = useState(
        {
            "nam": "",
            "age": "",
            "gen": "",
            "mob": "",
            "addr": "",
            "bg": "",
            "dnam": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        axios.post("http://localhost:8080/", data).then((response) => {
            console.log(response.data)
            if (response.data.status == "Success") {
                alert("Added Successfully")
            }
            else {
                alert(response.data)
            }
        }).catch(
            (error) => {
                alert("Error")
            }
        )
        console.log(data)

    }
    return (
        <div>
            <Nav/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Patient Name</label>
                                <input type="text" className="form-control" name='nam' value={data.nam} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" name='age' value={data.age} onChange={inputHandler} />

                            </div>



                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Gender</label>
                                <input type="text" className="form-control" name='gen' value={data.gen} onChange={inputHandler} />

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Mobile</label>
                                <input type="text" className="form-control" name='mob' value={data.mob} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Address</label>
                                <textarea name="addr" id="" className="form-control" value={data.addr} onChange={inputHandler}></textarea>


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Blood group</label>
                                <input type="text" className="form-control" name='bg' value={data.bg} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Doctor Name</label>
                                <input type="text" className="form-control" name='dnam' value={data.dnam} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-success" onClick={readValue}>ADD PATIENT</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPatient