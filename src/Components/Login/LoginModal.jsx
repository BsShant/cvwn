import React, { useEffect, useState } from 'react'
import './LoginModal.css'
import { Modal } from 'react-bootstrap'
import GoogleAuth from '../GoogleAuth/GoogleAuth'

const LoginModal = () => {
    const [authUser, setAuthUser] = useState(null)
    const [showLogin, setShowLogin] = useState(true)
    useEffect(() => {
        if (authUser) {
            setShowLogin(false)
        }
    }, [authUser])

    return (
        <div className='LoginModal'>
            <Modal
                show={showLogin}
                onHide={() => setShowLogin(false)}
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop="static"
                keyboard={false}
                centered
                className='login-modal-container'
                // style={{width:"60%"}}
            >
                <div className='eventjoin-panel' style={{ width: "75%" }}>
                    <div className='eventimage'>
                    </div>

                    <div className='join-us-form'>

                        <h6 style={{ textAlign: "center", marginTop: "10%", marginBottom: "10%" }}>

                        </h6>

                        <form className='joinusForm'>
                        <diV className="login-into">Login</diV>
                            <div className='row inputSection'>

                                <diV className="col-md-12 col-sm-12">
                                    <input type='email' placeholder='Email' name='email' style={{ width: "100%" }} />
                                </diV>
                                <diV className="col-md-12 col-sm-12">
                                    <input type='password' placeholder="password" name='password' style={{ width: "100%" }} />
                                    <div style={{    margin: "10px 0px 10px 0px"}}>
                                    <a href="#lk" className='forget-password'>Forget password?</a>
                                    </div>
                                </diV>

                            </div>

                        </form>
                        <div className=' row buttons'>
                            <div className='col-6'>
                            <button className='joinButton' type='submit' style={{ width: "71%", marginBottom: "5%", marginTop: "0%" }}>LOGIN</button>
                            </div>
                            <div className='col-6' style={{display:"flex",justifyContent:"flex-end"}}>
                            <GoogleAuth authUser={authUser} setAuthUser={setAuthUser} />
                            </div>
                        </div>
                        </div>
                    <hr  style={{height:"2px",opacity:"1"}}/>
                    <div className='new-account'>
                        <div style={{fontSize:"14px",color:"grey"}}>Don't have an account yet?</div>
                        <a href="#jj" className='new-acc'>Create New Account</a>

                    </div>

                </div>
              
            </Modal>
        </div>
    )
}

export default LoginModal