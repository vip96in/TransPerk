import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory} from 'react-router-dom'
//import Admin from './admin';
//import AdminMenuBar from './Adminmenubar';
import '../index.css';
import Header from './Header';
import Logout from './Logout';
//import Changepassword from './ChangePassword';

const Signin =()=>{
    const [Email ,setEmail]=useState('')
    const [Password ,setPassword]=useState('')
    const [role,setRole]=useState('')
    const history = useHistory();

  // useEffect(( ) => {
  //   if(sessionStorage.getItem('user-info')) {
  //     history.push("/add")
  //   }
  // },[])

  const changepassword = () => {
    history.push('/ChangePassword')
  }

  const backToHome = () => {
    history.push('/');
}

    const signinUser =()=>{
        if(role =='' || role.length==0){
            alert("please enter role")
        }
      else if(Email.length===0){
            alert('Please enter email  !!!!')
        }else if(Password.length===0){
            alert('Please enter password  !!!!') 
        }else {
        //const data = new FormData()
        const data = {email:Email,password:Password}
          console.log(data);
        // add the data
       // data.append('email', Email)
       // data.append('password', Password)
       if(role=="CUSTOMER"){
        axios.post(`http://localhost:8080/customer/login`, data).then((response) => {
            const result = response.data
            console.log(result);
            if (result ) {
              alert('successfully Logged in')
              //sessionStorage.setItem('user-info',Email)
              sessionStorage.setItem('customer',JSON.stringify(result))
              sessionStorage.setItem('customerId',result.id)
              //sessionStorage.setItem('city',JSON.stringify(result.city))
              
               
              history.push('/customer')
            } else {
              //history.push('/ChangePassword')
             alert('error while logging in')
            }
          })}else{
            axios.post(`http://localhost:8080/vendor/login`, data).then((response) => {
                const result = response.data
                console.log(result);
                if (result ) {
                  alert('successfully Logged in '+result.id)

                  //sessionStorage.setItem('user-info',Email)
                  sessionStorage.setItem('vendor',JSON.stringify(result))
                  sessionStorage.setItem('vendorId',result.id)
                   
                  history.push('/vendor')
                } else {
                  //history.push('/ChangePassword')
                 alert('error while logging in')
                }
              })
          }
        }
    } 
   return (
       <div >
         
         {/* <br></br>
         <br></br> */}
         
         <div className="sign">
     <h1 >Sign In</h1>
     <br></br> 
     <div className="mb-3"> 
     <label><h5>Login As</h5></label>
     <select className="form-select"
              onChange={(e) => {
              setRole(e.target.value)
            }}>
          <option>select</option>
        <option value="CUSTOMER">customer</option>
        <option value="VENDOR">vendor</option>
        </select>
     </div>
      
        <div className="mb-3">
            <label><h5>Email</h5></label>
            <input value={Email} name="Email" onChange={(event)=>{setEmail(event.target.value)}} className="form-control" type="email" placeholder="Enter email"></input>
        </div>

        <div className="mb-3">
            <label><h5>Password</h5></label>
            <input value={Password} name="Password" onChange={(event)=>{setPassword(event.target.value)}} className="form-control" type="password" placeholder="Enter password"></input>
        </div>

        <div className="mb-3">
            <button onClick={signinUser}className="btn btn-success "><i class="fa fa-sign-in " aria-hidden="true"></i>&nbsp;SignIn</button>
            &nbsp;
            <button onClick={backToHome}className="btn btn-outline-info"> 
              <i class="fa fa-home fa-lg" aria-hidden="true"></i>&nbsp; Home</button>
        </div>

        {/* <div className="mb-3">
            <button onClick={signinUser}className="btn btn-success">ChangePassword</button>
        </div> */}

       </div>
       </div>
   )
}

export default Signin;