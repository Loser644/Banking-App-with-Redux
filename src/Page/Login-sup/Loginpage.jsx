import React, { useState } from 'react'
import '../../assets/style/loginPage.css'
import SginEl from './sginup';
function Loginpage() {
  const [crntMenu,setmenu] = useState({
  login:true,
  sginup:false
})
    const handleBlur = (inp) => {
        if (inp) {
            let labL = inp.nextElementSibling;
            if (inp.value) {
                labL.style.display = 'none'
            }else{
                labL.style.display = 'block'
            }
        }else{
            let inpDiv = document.querySelectorAll('.inputDiv')
            inpDiv.forEach(div=>{
                let labL = div.querySelector('label')
                if (labL) {
                    labL.style.display = 'block'
                }
            })
        }
     }
    
     const handleSubmit = async (e)=>{
        e.preventDefault()
      
     }


  return (
    <div className="underTaker">
       <div className="logComp">
                          <div className="textAndLog">
                             <h1>Where Money</h1>
                             <h1>Meet trust.</h1>
                              <h2>A Boy who is sitting in a dark corner of a dark room waiting for the morning that will never going to be happen</h2>
                          </div>
                              {crntMenu.login && 
                                  <>
                                  <div className="loginDiv">
                               <div className="formDiv">
                                  <form action="" onSubmit={handleSubmit}>
                                      <h1>Login</h1>
                                      <div className="inputDiv">
                                          <input onBlur={(e)=>handleBlur(e.target)} name='UserEmail' autoComplete='Email' type="text" id="userName" />
                                          <label htmlFor="userName"><i className="bx bx-user">Username Or Email</i></label>
                                      </div>
                                      <div className="inputDiv">
                                          <input name='Password'  onBlur={(e)=>handleBlur(e.target)} type='password' id="Password" />
                                          <label htmlFor="Password"><i className="bx bx-key">Password</i></label>
                                          <div className="showPassDiv">
                                          </div>
                                      </div>
                                      <div className="inputDiv">
                                          <p>Forgot Password?</p>
                                      </div>
                                      <div className="inputDiv">
                                         <button type='submit' className="btn login-btn">Login</button>
                                      </div>
                                  </form>
                                  <button className="c-acout" onClick={()=>setmenu(pvev=>({
                                    ...pvev,
                                    login:false,
                                    sginup:true
                                  }))}>Create An Account</button>
                              </div>
                              </div>
                              </>
                              }
      
                       {crntMenu.sginup && <SginEl statep={setmenu}/>}
                      </div>
    </div>
  )
}

export default Loginpage
