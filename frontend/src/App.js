import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history'

//import { Redirect } from 'react-router-dom';

import Signin from './Component/Signin';
import Signup from './Component/Signup';
import Customer from './Component/Customer';
import Vendor from './Component/Vendor';
import Deleteprofile from './CustomerScreens/Deleteprofile';
import Home from './Component/Home';
import dashboard from './Component/dashboard';




const history = createBrowserHistory();

function App() {

  return (

    <div>
      
      <BrowserRouter history={history}>
      
        {/* <nav className="navbar navbar-expand-lg navbar-light heading">
          <div className="container-fluid">
          {/* < NavLink className="navbar-brand" to="/">style={{ height: "50px" }} alt="logo" />
                </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> 
          */}
        {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">

                <li>
                  <Link className="nav-link" to="/signin">
                   <b> Signin</b>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/signup">
                    <b>Signup</b>
                  </Link>
                  </li>
              </ul>
            </div>
          </div>
        </nav>*/}
        <div>
          <Switch>
            <Route path="/" exact component={Home}></Route>
          </Switch>
        </div>

        <div className="">
          <Switch>
          <Route path="/d" component={dashboard} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/customer" component={Customer} />
            <Route path="/vendor" component={Vendor} />
            <Route path="/deleteprofile" component={Deleteprofile} />
          </Switch>

        </div>
      </BrowserRouter>


    </div>

  )
}

export default App