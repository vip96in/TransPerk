import './newdashboard.css'
import React from 'react';


export const newdashboard = () => {
    return (
        <>

            <div>
                <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#">Sign out</a>
                        </li>
                    </ul>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                            <div className="position-sticky pt-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active" exact to="/vendorDashboard" aria-current="page">
                                            <span data-feather="home" />
                                            Dashboard
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link"  exact to="/Profile" >
                                            <span data-feather="file" />
                                            Profile
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="shopping-cart" />
                                            Products
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="users" />
                                            Customers
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="bar-chart-2" />
                                            Reports
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="layers" />
                                            Integrations
                                        </a>
                                    </li>
                                </ul>
                                {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                    <span>Saved reports</span>
                                    <a className="link-secondary" href="#" aria-label="Add a new report">
                                        <span data-feather="plus-circle" />
                                    </a>
                                </h6>
                                <ul className="nav flex-column mb-2">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text" />
                                            Current month
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text" />
                                            Last quarter
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text" />
                                            Social engagement
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text" />
                                            Year-end sale
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </nav>
                        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Dashboard</h1>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group mr-2">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                    </div>
                                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                        <span data-feather="calendar" />
                                        This week
                                    </button>
                                </div>
                            </div>
                            <h1>hello</h1>
                            {/* <canvas class="my-4 w-100" id="myChart" width="900" height="380">

   
  </canvas> */}
                        </main>
                    </div>
                </div>
            </div>

        </>
    )
}
