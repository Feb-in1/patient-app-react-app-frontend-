import React from 'react'

const Nav = () => {
  return (
    <div> <nav class="navbar navbar-expand-lg bg-warning">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">PATIENT APP</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
              <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Add Patient</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  " href="/search">Search Patient</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/ViewAll">View All</a>
          </li>
           
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Nav