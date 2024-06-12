import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const SearchPatient = () => {
    const [data, setData] = useState(
        {
            "nam": ""
        }
    )
    const [result, setResult] = useState([])
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        axios.post("http://localhost:8080/search", data).then((response) => {
            setResult(response.data)
        }

        ).catch(
            (error) => {
                console.log(error)
            }

        ).finally()

    }
    return (
        <div>
            <Nav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <label htmlFor="" className="form-label">Patient Name</label>
                                <input type="text" className="form-control" name='nam' value={data.nam} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Search</button>
                            </div>
                        </div>




                    </div>
                </div>

                <div class="row g-3 mt-5">


                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">





                        <table class="table table-dark table-striped table-hover">

                            <thead>
                                <tr>

                                    <th scope="col">Patient Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Blood group</th>
                                    <th scope="col">Doctor Name</th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    result.map(
                                        (value, index) => {
                                            return <tr>

                                                <td>{value.nam}</td>
                                                <td>{value.age}</td>
                                                <td>{value.gen}</td>
                                                <td>{value.mob}</td>
                                                <td>{value.addr}</td>
                                                <td>{value.bg}</td>
                                                <td>{value.dnam}</td>

                                            </tr>
                                        }
                                    )
                                }















                            </tbody>
                        </table>





                    </div>
                </div>





            </div>
        </div>

    )
}

export default SearchPatient