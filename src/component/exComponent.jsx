import HomePage from "../Page/HomePage";
import Loginpage from "../Page/Login-sup/Loginpage";
import WithDrow from "../Page/myAccount/withDrowAnd";

function HomeEl() {
    
    return(
        <HomePage/>
    )
}

function LoginEl() {
    return(
        <Loginpage/>
    )
}
function WithEl(params) {
    return(
        <WithDrow/>
    )
}
export {HomeEl,LoginEl,WithEl}