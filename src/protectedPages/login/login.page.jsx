import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authProcessStarts } from "../../store/authStore/auth.action";

import "./login.css";
// import { authProcessStarts } from "../../store/authStore/auth.action";
const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = (e) => {
    e.preventDefault()
    dispatch(authProcessStarts({
      email, password
    }))
  }
  return (
    <div className="container" style={{ height: "100vh", display: "flex" }}>
      <div className="admin-login">

        <form className='joinusForm'>
          <diV className="login-into">Login</diV>
          <div className='row inputSection'>

            <diV className="col-md-12 col-sm-12">
              <input type='email' placeholder='Email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} style={{ width: "100%" }} />
            </diV>
            <diV className="col-md-12 col-sm-12">
              <input type='password' placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)} name='password' style={{ width: "100%" }} />
              <div style={{ margin: "10px 0px 10px 0px" }}>
                <a href="#lk" className='forget-password'>Forget password?</a>
              </div>
            </diV>

          </div>

        </form>
        <div className=' row buttons'>
        
            <button className='joinButton' onClick={(e) => onLogin(e)} type='submit' style={{ width: "50%", marginBottom: "5%", marginTop: "0%" ,marginLeft:"0%"}}>LOGIN</button>
        
        </div>

      </div>
    </div>
  )
};

export default Login;
