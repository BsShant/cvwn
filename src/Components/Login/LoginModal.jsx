import React, { useEffect, useState } from "react";
import "./LoginModal.css";
import { Modal } from "react-bootstrap";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import { useDispatch, useSelector } from "react-redux";
import { subscriberAuthProcessStarts } from "../../store/authStore/auth.action";
import { message } from "antd";

const LoginModal = () => {
  const dispatch = useDispatch();
  const [authUser, setAuthUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const subscriber = useSelector((state) => state.authStore.subscriber);
  console.log("subscriber", subscriber)
  useEffect(() => {
    if (subscriber) {
      setShowLogin(false);
    }
  }, [subscriber]);
  const onSubsSubmit = () => {
    if (!email || !name) {
      return message.error("Please Provide Us Your Details!");
    }
    dispatch(subscriberAuthProcessStarts({email,name}));
  };
  return (
    <div className="LoginModal">
      <Modal
        show={showLogin}
        onHide={() => setShowLogin(false)}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        keyboard={false}
        centered
        className="login-modal-container"
        // style={{width:"60%"}}
      >
        <div className="eventjoin-panel" style={{ width: "75%" }}>
          <div className="eventimage"></div>

          <div className="join-us-form">
            <h6
              style={{
                textAlign: "center",
                marginTop: "10%",
                marginBottom: "10%",
              }}
            ></h6>

            <form className="joinusForm">
              <diV className="login-into">Please send us your Email</diV>
              <div className="row inputSection">
                <diV className="col-md-12 col-sm-12">
                  <input
                    type="text"
                    placeholder="Name"
                    name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </diV>
                <diV className="col-md-12 col-sm-12">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </diV>
              </div>
            </form>
            <div className=" row buttons">
              <div className="col-6">
                <button
                  className="joinButton"
                  type="submit"
                  onClick={() => onSubsSubmit()}
                  style={{ width: "71%", marginBottom: "5%", marginTop: "0%" }}
                >
                  Send
                </button>
              </div>
              <div
                className="col-6"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <GoogleAuth authUser={authUser} setAuthUser={setAuthUser} />
              </div>
            </div>
          </div>
          <hr style={{ height: "2px", opacity: "1" }} />
          <div className="new-account">
            <div style={{ fontSize: "14px", color: "grey" }}>
              You need to link your email in order to learn more about this
              article.
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;
