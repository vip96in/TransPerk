// const Profile =()=>{
//     return (
//     <div>
//     <h1>Profile Page</h1>
//     </div>
//     )
// }
// export default Profile

import { Link ,useHistory } from 'react-router-dom';
import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { url } from '../common/constants'
// import Signin from '../Component/Signin';

const Profile=()=>{
const history = useHistory()
 //  const user= JSON.parse(localStorage.getItem('user'))  //u=user
 const customer= JSON.parse(sessionStorage.getItem('customer'))
 const customerId=sessionStorage.getItem('customerId')
 console.log(sessionStorage.getItem('customer'))

  //  const [user, setUser] = useState([])

//    useEffect(() => {
//      console.log(`User got loaded`)
//      getUser()
//    }, [])
 
//    const getUser = () => {
//      axios.get(url + `/customer/${customer.customerId}`).then((response) => {
//        const result = response.data
//        if (result) {
//          //setUser(result.data)
//          sessionStorage.setItem('customer',JSON.stringify(result))
//        } else {
//          alert('error while loading the user')
//        }
//      })
//    }
const deleteAccount=()=>{
    axios.delete(`http://localhost:8080/customer/${customerId}`).then(response => {
        const result = response.data;
        if (result){
          alert('Customer Account Deleted')
          
            sessionStorage.removeItem('customer')
          history.push('/Signin')
          window.location.reload();
        }
        else {
          alert('error')
        }
      }).catch(err =>{
        console.log(err)
      }) 
  
}
 
   return (
     <div>
       <h1 className="page-title"> MY PROFILE</h1>

       {/* <Link className="nav-link" to="/sellerDashboard" style={{marginLeft:'1000px'}}>
                <button type="submit" className="btn btn-primary"  > DashBoard </button>   
      </Link> */}

       {/* <button
          onClick={() => {
            history.push(`/EditProfile/${users.id}`)
          }}
          className="btn btn-secondary btn-sm" >
                Edit 
       </button>


                    <button
                       onClick={() => {
                         history.push(`/changeSellerPassword/${users.id}`, {seller:seller})
                        }}
                       className="btn btn-danger btn-sm">
                             Changepassword
                      </button> */}
 

       <table className="table table-striped border">
         <thead>
           <tr>
           <th> Id</th>
             <th>Name</th>
             <th>Email</th>
             <th>Password</th>
             <th>Address</th>
             <th>PhoneNo</th>
             <th>City</th>
             <th>State</th>
             <th>Postal Code</th>
             <th>Action</th>
           </tr>
         </thead>
         <tbody>
           <tr>
               <td> {customer.id} </td> 
               <td> {customer.name}</td>
               <td>{customer.email}</td>
               <td>{customer.password}</td>
               <td>{customer.address}</td>
               <td>{customer.phoneNo}</td>
               <td>{customer.city}</td>
               <td>{customer.state}</td>
               <td>{customer.postalCode}</td>
              <td><button onClick={deleteAccount} className="btn btn-danger btn-sm">Delete Account </button></td>
           </tr>

           <tr>
                      
           </tr>
         </tbody>
       </table>
     </div>
   )
}
export default Profile;
