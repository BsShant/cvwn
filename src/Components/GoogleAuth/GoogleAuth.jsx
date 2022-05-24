import React from 'react'
import './GoogleAuth.css'
import {GoogleLogin} from 'react-google-login';
const GoogleAuth = (props) => {

    const responseGoogle = (response) => {
        console.log(response);
        // props.setAuthUser({token:'dddd', user:'sss'})
    }

    return (
        <div>
            <GoogleLogin
                clientId="41581370852-nslk9hdir492limlc1bf1333uj39u41b.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={(res)=>responseGoogle(res)}
                onFailure={(res)=>responseGoogle(res)}
                cookiePolicy={'single_host_origin'}
                className="google-auth-button"
            />
        </div>
    )
}

export default GoogleAuth