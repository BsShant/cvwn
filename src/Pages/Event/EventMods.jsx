import { Image, message } from "antd";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { server } from "../../utils/fetch";
const EventMods = (props) => {
  const { event, showJoin, setShowJoin } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mesage, setMessage] = useState("");
  const onRequest = async () => {
    if (!name || !email || !phone || !mesage) {
      setShowJoin(false);

      return message.error("Please insert required values!");
    }
    const formdata = JSON.stringify({
      name,
      email,
      message: mesage,
      phone,
      event: event.id,
    });
    try {
      const res = await fetch(`${server}/request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formdata,
      });
      if (res.status == 200) {
        setShowJoin(false);
        message.success(
          "The request succeded. Please wait while we reach out to you!"
        );
      }
      const data = await res.json();
    } catch (error) {
      setShowJoin(false);
      message.error("The submission failed! Please try again later.");
    }
  };
  return (
    <div>
      <Modal
        show={showJoin}
        onHide={() => setShowJoin(false)}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="eventjoin-panel" style={{ width: "75%" }}>
          <div className="eventimage">
            <Image src={`${server}/${event ? event.image : ""}`} width={100} />
          </div>

          <div className="join-us-form">
            <h6
              style={{
                textAlign: "center",
                marginTop: "10%",
                marginBottom: "10%",
              }}
            >
              I would like to join your{" "}
              <q>
                <b>{event ? event.title : ""}</b>
              </q>{" "}
              event on <b>{event ? event.date : ""}</b>.
              <br />
              <br />
              Please be kind to consider my request.
            </h6>

            <form className="joinusForm">
              <div className="row inputSection">
                <div className="col-md-12 col-sm-12">
                  <input
                    type="text"
                    placeholder="Name"
                    name="fName"
                    style={{ width: "100%" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-md-12 col-sm-12">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    style={{ width: "100%" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-12 col-sm-12">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    style={{ width: "100%" }}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="row textAreazcont">
                <div className="col-md-12">
                  <textarea
                    type="text"
                    placeholder="My Motive to Join this Event"
                    name="message"
                    style={{
                      width: "100%",
                      border: "1px solid #f45a2f",
                      borderRadius: "5px",
                      fontSize: "12px",
                      paddingLeft: "4px",
                      paddingTop: "6px",
                    }}
                    value={mesage}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
            </form>
            <button
              className="joinButton"
              type="submit"
              style={{
                width: "100%",
                marginBottom: "25%",
                marginTop: "10%",
              }}
              onClick={() => onRequest()}
            >
              Request for Invitation
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EventMods;
