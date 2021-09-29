// const Customer =()=>{
//     return (
//     <div>
//     <h1>Customer Page</h1>
//     </div>
//     )
// }
// export default Customer

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'
import Profile from '../CustomerScreens/Profile'
import Editprofile from '../CustomerScreens/Editprofile'
import Deleteprofile from '../CustomerScreens/Deleteprofile'
import Customerrequest from '../CustomerScreens/Customerrequest'
import Placerequest from '../CustomerScreens/Placerequest'
import Vendorlist from '../CustomerScreens/Vendorlist'
import Requeststatus from './../CustomerScreens/Requeststatus';
import Requestvdetails from './../CustomerScreens/Requestvdeatils';
import Requestpdetails from './../CustomerScreens/Requestpdetails';
import Payment from './../CustomerScreens/Payment';
import Raterequest from './../CustomerScreens/Raterequest';
import Logout from './Logout';



const Customer = () => {
  return (

    <div>
      <BrowserRouter>
        {/* <br></br> */}
        <div className="container">
          <ListGroup horizontal>

            <ListGroupItem>
              <NavLink className="nav-link" exact to="/customerDashboard">
                <h5 className="text-center">
                  {' '}
                  <i className="fa fa-dashboard"></i>
                  <p>Customer Dashboard</p>
                </h5>
              </NavLink>
            </ListGroupItem>

            <ListGroupItem>
              <NavLink className="nav-link" exact to="/Profile">
                <Button outline color="success">
                  Profile
                </Button>
              </NavLink>
            </ListGroupItem>

            <ListGroupItem>
              <NavLink className="nav-link" exact to="/Editprofile">
                <Button outline color="success">
                  Edit Profile
                </Button>
              </NavLink>
            </ListGroupItem>
            <ListGroupItem>

              <NavLink className="nav-link" exact to="/Request">
                <Button outline color="success">
                  Make Request
                </Button>
              </NavLink>
            </ListGroupItem>

            <ListGroupItem>
              <NavLink className="nav-link" exact to="/Customerrequest">
                <Button outline color="success">
                  View Requests
                </Button>
              </NavLink>
            </ListGroupItem>
            <ListGroupItem>
              <NavLink className="nav-link" exact to="/Logout">
                <Button color="danger">
                  <i class="fa fa-sign-out " aria-hidden="true"></i>
                  Log out
                </Button>
              </NavLink>
            </ListGroupItem>

          </ListGroup>
        </div>

        <div>
          <Switch>
            <Route path="/Profile" component={Profile} />
            <Route path="/Editprofile" component={Editprofile} />
            <Route path="/Request" component={Vendorlist} />
            <Route path="/Customerrequest" component={Customerrequest} />
            <Route path="/Placerequest" component={Placerequest} />
            <Route path="/Requeststatus" component={Requeststatus} />
            <Route path="/Requestvdetails" component={Requestvdetails} />
            <Route path="/Requestpdetails" component={Requestpdetails} />
            <Route path="/Payment" component={Payment} />
            <Route path="/Raterequest" component={Raterequest} />
            <Route path="/Logout" component={Logout} />
          </Switch>
        </div>

      </BrowserRouter>
    </div>


  )
}



export default Customer