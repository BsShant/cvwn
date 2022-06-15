import React from "react";
import "./GoogleAuth.css";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { subscriberAuthProcessStarts } from "../../store/authStore/auth.action";
const GoogleAuth = (props) => {
  const dispatch = useDispatch();
  const responseGoogle = (response) => {
    const { name, email } = response.profileObj;
    dispatch(subscriberAuthProcessStarts({ name, email }));
  };

  return (
    <div>
      <GoogleLogin
        clientId="836305785268-kvgn4buc52pdgejr98udrqn3snj2md89.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={(res) => responseGoogle(res)}
        onFailure={(res) => responseGoogle(res)}
        cookiePolicy={"single_host_origin"}
        className="google-auth-button"
      />
    </div>
  );
};

export default GoogleAuth;
