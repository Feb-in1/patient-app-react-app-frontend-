import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState(
        []
    )
    const fetchData=()=>{
        axios.get("http://localhost:8080/ViewAll").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch(
            (error)=>{
                console.log()
            }
        ).finally()
        
    }
    useEffect(() => { fetchData() }, [])
  return (
    <div> 
        <Nav/>
        <div class="container mt-5">
                <div class="row g-3">


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
                                    data.map(
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

export default ViewAll