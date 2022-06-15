import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingArticleStarts } from "../../store/resourceReducer/resourceStore.actions";
import {
  fetchingDonationStarts,
} from "../../store/getInvolvedReducer/getInvolvedStore.actions";
import ImageSelect from "../imageSelect/ImageSelect";

const DonationData = (props) => {
  const dispatch = useDispatch();
  const [donationValues, setDonationValues] = useState({
    name: "",
    image: "",
    email: "",
    country: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    setDonationValues({
      name: props.updateData ? props.updateData.name : "",
      email: props.updateData ? props.updateData.email : "",
      image: props.updateData ? props.updateData.image : "",
      country: props.updateData ? props.updateData.country : "",
      phone: props.updateData ? props.updateData.phone : "",
      address: props.updateData ? props.updateData.address : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !donationValues.name ||
      !donationValues.email ||
      !donationValues.image ||
      !donationValues.country ||
      !donationValues.phone ||
      !donationValues.address
    ) {
      return message.error("Please insert required values!");
    }
    fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        props.updateData
          ? { ...donationValues, id: props.updateData.id }
          : { ...donationValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingDonationStarts());
        console.log(`Donation ${props.updateData ? "Updated" : "Added"}`);
        message.success(`Donation ${props.updateData ? "Updated" : "Added"}!`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(
          `${props.updateData ? "Updating" : "Adding"} Donation Failed`
        );
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Donation Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={donationValues}
            onTextAreaValueChange={setDonationValues}
            textName="name"
            name="Donationname"
            title="Name"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={donationValues}
            onTextAreaValueChange={setDonationValues}
            textName="email"
            name="VolunteerEmail"
            title="Email"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={donationValues}
            onTextAreaValueChange={setDonationValues}
            textName="country"
            name="VolunteerCountry"
            title="Country"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={donationValues}
            onTextAreaValueChange={setDonationValues}
            textName="address"
            name="VolunteerAddress"
            title="Address"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={donationValues}
            onTextAreaValueChange={setDonationValues}
            textName="phone"
            name="VolunteerPhone"
            title="Phone"
          />
        </div>
        <div className="image-select-heading">Select Donation Image</div>
        <ImageSelect
          myImage={donationValues.image}
          setMyImage={setDonationValues}
          name="image"
        />
      </div>
      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default DonationData;
