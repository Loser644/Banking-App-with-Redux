export default function UserHeaderMenu() {
    
    return(
        <div className="header">
            <div className="logoDiv">
                <img src="/Image/logo1.png" alt="Logo" />
            </div>
            <div className="userMenu">
                <ul>
                    <li><i className="bx bxs-home"></i>Home</li>
                    <li><i className="bx bxs-bank"></i>MyAccount</li>
                    <li><i className="bx bx-git-pull-request"></i>Request</li>
                    <li><i className="bx bxs-contact"></i>Contact</li>
                    <li><i className="bx bxs-user-circle"></i><span>Sign Up |</span> Login</li>
                </ul>    
            </div>       
        </div>
    )
}