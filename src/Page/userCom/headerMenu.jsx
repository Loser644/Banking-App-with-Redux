import {Link} from 'react-router-dom'
export default function UserHeaderMenu() {
    
    return(
        <div className="header">
            <div className="logoDiv">
                <img src="/Image/logo1.png" alt="Logo" />
            </div>
            <div className="userMenu">
                <ul>
                    <li><Link to={'/'}><i className="bx bxs-home"></i>Home</Link></li>
                    <li><Link to={'/Account'}><i className="bx bxs-bank"></i>MyAccount</Link></li>
                    <li><i className="bx bx-git-pull-request"></i>Request</li>
                    <li><i className="bx bxs-contact"></i>Contact</li>
                    <li><Link to={'/Login'}><i className="bx bxs-user-circle"></i><span>Sign Up |</span> Login</Link></li>
                </ul>    
            </div>       
        </div>
    )
}