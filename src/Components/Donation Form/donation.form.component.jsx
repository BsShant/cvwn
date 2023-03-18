import { message } from "antd";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { server } from "../../utils/fetch";
import CustomButton from "../Custom button/custom-button.component";
import "./donation.form.styles.scss";
import Esewa from "./esewa.jpg";
import Khalti from "./khalti.png";
import NicAsia from "./nic-asia.png";
import { UploadImage } from "./uploadImage/uploadImage";

export default function DonationForm() {
  const footerLinks = useSelector((state) => state.footerStore.footerLinks);
  const donationInfo = useSelector(
    (state) => state.getInvolvedStore.donationInfo
  );

  const [showEsewa, setShowEsewa] = useState(false);
  const [showKhalti, setShowKhalti] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [images, setImages] = React.useState([]);
  const [myInfo, setMyInfo] = useState(null);
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
      message.error("The submission failed! Please try again later.");
    }
  };
  return (
    <div className="donationform">
      <div className="donationSection">
        <div className="row">
          <div className="col-lg-12 mb-4" style={{ margin: "auto" }}>
            <span
              className="title tittle"
              style={{ textAlign: "left", justifyContent: "left" }}
            >
              Donate via your preferred method
            </span>
          </div>
          {donationInfo.length > 0
            ? donationInfo.map((dInfo) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-4 col-6 mb-3">
                    {/* <div className="finance-friends"> */}
                    <img
                      onClick={() => {
                        setMyInfo(dInfo);
                        setShowEsewa(true);
                      }}
                      src={`${server}/${dInfo.image}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        marginTop: "0",
                        cursor:"pointer"
                      }}
                    />

                    <Modal
                      show={showEsewa}
                      onHide={() => setShowEsewa(false)}
                      dialogClassName="modal-90w"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <div className="finance-panel" style={{ width: "100%" }}>
                        <div className="row" style={{ margin: "5%" }}>
                          <div
                            className="col-6 col-lg-6 col-sm-6 col-md-6 "
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <div className="image">
                              <img
                                src={`${server}/${myInfo?.image}`}
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  marginTop: "0",
                                }}
                              />
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
                              <b>{myInfo?.heading}</b>
                              <br />
                              <br />
                              <p style={{ fontSize: "14px" }}>
                                <b>
                                  Id : {myInfo?.pid}
                                  <br />
                                  Name: {myInfo?.name}
                                </b>
                              </p>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal>
                    {/* </div> */}
                  </div>
                );
              })
            : null}
          <div
            className="col-lg-4 col-md-4 col-sm-4 col-6"
            style={{ display: "flex", marginLeft:"auto" }}
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
      <h6 style={{ color: "#f45a2f" }}>
        Please drop the screenshot of payment
      </h6>
      <UploadImage
        setImages={setImages}
        images={images}
        sendDonation={sendDonation}
      />
      {/* <div className="infoContainer">
        <p>
          Please share your personal{" "}
          <span>Email ID, Mobile Number and Address </span>. so that we can send
          you the reciept certificate & share updates on our programmes with
          you.<br></br>
        </p>
      </div> */}
      <CustomButton
        style={{ backgroundColor: "white", color: "black" }}
        children={"Submit"}
        onSubmit={sendDonation}
      />
      <div></div>
    </div>
  );
}
