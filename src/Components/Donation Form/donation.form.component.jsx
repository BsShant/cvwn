import { message } from "antd";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { server } from "../../utils/fetch";
import CustomButton from "../Custom button/custom-button.component";
import "./donation.form.styles.scss";
import Esewa from "./esewa.jpg";
import Khalti from "./khalti.png";
import NicAsia from "./nic-asia.png";
import { UploadImage } from "./uploadImage/uploadImage";

export default function DonationForm() {
  const [showEsewa, setShowEsewa] = useState(false);
  const [showKhalti, setShowKhalti] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [images, setImages] = React.useState([]);
  const sendDonation = async () => {
    if (
      !country ||
      !address ||
      !phone ||
      !email ||
      !name ||
      !images.length > 0
    ) {
      message.error("Please provide us all the required values!");
      return;
    }
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("country", country);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("image", images[0].file);
    try {
      const res = await fetch(`${server}/donation`, {
        method: "POST",
        body: formData,
      });
      if (res.status == 200) {
        message.success("The donation submission succeded. Thank You!");
      }
      const data = await res.json();
    } catch (error) {
      console.log("Error sending donation: ", error);
      message.error("The submission failed! Please try again later.");
    }
  };
  return (
    <div className="donationform">
      <div className="donationSection">
        <div className="row">
          <div className="col-lg-12" style={{ margin: "auto" }}>
            <span
              className="title tittle"
              style={{ textAlign: "left", justifyContent: "left" }}
            >
              Donate via your preferred method
            </span>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="finance-friends">
              <img
                onClick={() => setShowEsewa(true)}
                src={Esewa}
                height={70}
                width={70}
              />
              <img
                onClick={() => setShowKhalti(true)}
                src={Khalti}
                height={100}
                width={100}
                style={{ marginLeft: "40px" }}
              />
              <img
                onClick={() => setShowBank(true)}
                src={NicAsia}
                height={140}
                width={140}
              />
              {/* <div>Tap on the icon to view descriptions</div> */}

              <Modal
                show={showEsewa}
                onHide={() => setShowEsewa(false)}
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <div className="finance-panel" style={{ width: "100%" }}>
                  <div className="row" style={{ margin: "5%" }}>
                    <div className="col-6 col-lg-6 col-sm-6 col-md-6 ">
                      <div className="image">
                        <img src={Esewa} height={50} width={50} />
                      </div>
                    </div>
                    <div
                      className="col-6 col-lg-6 col-sm-6 col-md-6"
                      style={{
                        borderLeft: "3px solid green",
                        paddingLeft: "8%",
                      }}
                    >
                      <div style={{ marginTop: "22%" }}>
                        <b>Esewa Credentials</b>
                        <br />
                        <br />
                        <p style={{ fontSize: "14px" }}>
                          <b>
                            Esewa Id : 9803666989
                            <br />
                            Name: CVWN
                          </b>
                        </p>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
              <Modal
                show={showKhalti}
                onHide={() => setShowKhalti(false)}
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <div className="finance-panel" style={{ width: "100%" }}>
                  <div className="row" style={{ margin: "5%" }}>
                    <div className="col-6 col-lg-6 col-sm-6 col-md-6 ">
                      <div className="image">
                        <img src={Khalti} height={50} width={50} />
                      </div>
                    </div>

                    <div
                      className="col-6 col-lg-6 col-sm-6 col-md-6"
                      style={{
                        borderLeft: "3px solid purple",
                        paddingLeft: "8%",
                      }}
                    >
                      <div style={{ marginTop: "22%" }}>
                        <b>Khalti Credentials</b>
                        <br />
                        <br />
                        <p style={{ fontSize: "14px" }}>
                          <b>
                            Khalti Id : 9803666989
                            <br />
                            Name: CVWN
                          </b>
                        </p>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
              <Modal
                show={showBank}
                onHide={() => setShowBank(false)}
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <div className="finance-panel" style={{ width: "100%" }}>
                  <div className="row" style={{ margin: "5%" }}>
                    <div className="col-6 col-lg-6 col-sm-6 col-md-6 ">
                      <div
                        className="image1"
                        style={{
                          marginTop: "24%",
                          marginLeft: "15%",
                          height: "125px",
                          width: "125px",
                        }}
                      >
                        <img src={NicAsia} height={125} width={125} />
                      </div>
                    </div>
                    <div
                      className="col-6 col-lg-6 col-sm-6 col-md-6"
                      style={{ borderLeft: "3px solid red", paddingLeft: "8%" }}
                    >
                      <div style={{ marginTop: "22%" }}>
                        <b>Bank Credentials</b>
                        <br />
                        <br />
                        <p style={{ fontSize: "14px" }}>
                          <b>
                            Acc No: 9803 6669 8900
                            <br />
                            Name: CVWN
                          </b>
                        </p>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12"
            style={{ display: "flex" }}
          >
            <div className="tap-to-view">
              <i class="fas fa-arrow-left leftarrow d-none d-sm-none d-lg-block d-md-block"></i>
              <i class="fas fa-arrow-up uparrow d-sm-block d-lg-none d-md-none"></i>
              Tap on the icon to view descriptions
            </div>
          </div>
        </div>
        <h4 style={{ marginBottom: "3%", marginTop: "30px", fontSize: "22px" }}>
          Submit your detail after donating
        </h4>
        <div className="row inputRow">
          <div className="col-lg-3">
            <span className="title">
              Name<span style={{ color: "red" }}>*</span>
            </span>
          </div>
          <div className="col-lg-9">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row inputRow">
          <div className="col-lg-3">
            <span className="title">
              Email<span style={{ color: "red" }}>*</span>
            </span>
          </div>
          <div className="col-lg-9">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row inputRow">
          <div className="col-lg-3">
            <span className="title">
              Phone<span style={{ color: "red" }}>*</span>
            </span>
          </div>
          <div className="col-lg-9">
            <input
              type="text"
              name="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="row inputRow">
          <div className="col-lg-3">
            <span className="title">
              Address<span style={{ color: "red" }}>*</span>
            </span>
          </div>
          <div className="col-lg-9">
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="row inputRow">
          <div className="col-lg-3">
            <span className="title">
              Country<span style={{ color: "red" }}>*</span>
            </span>
          </div>
          <div className="col-lg-9">
            <input
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>
      </div>
      <h6 style={{ color: "#e83802" }}>
        Please drop the screenshot of payment
      </h6>
      <UploadImage setImages={setImages} images={images} />
      <div className="infoContainer">
        <p>
          Please share your personal{" "}
          <span>Email ID, Mobile Number and Address </span>. so that we can send
          you the reciept certificate & share updates on our programmes with
          you.<br></br>
          <span> To know more please sms SF to 56161</span>
          <br></br>
          <span> (Registration No. - 6382)</span>
        </p>
      </div>
      <div>
        <CustomButton children={"Submit"} onSubmit={sendDonation} />
      </div>
    </div>
  );
}
