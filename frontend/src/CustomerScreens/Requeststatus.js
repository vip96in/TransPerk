import { Link } from "react-router-dom"
const Requeststatus =()=>{
    const status = JSON.parse(sessionStorage.getItem('requestStatus'))
    return (
        
    <div>
    <h1 className="page-title">REQUEST STATUS</h1>
    {/* <Link className="nav-link" to="/sellerDashboard" style={{marginLeft:'1000px'}}>
                <button type="submit" className="btn btn-primary"  > DashBoard </button>   
      </Link> */}
    <table className="table table-striped border" >
            

            <thead>
                
                <th>Request Status</th>
                
            </thead>
           <tbody>
            <tr>
                <td>
                    {status.requestStatus}
                </td>
            </tr>
           </tbody>
    </table>
    </div>
    )
}
export default Requeststatus