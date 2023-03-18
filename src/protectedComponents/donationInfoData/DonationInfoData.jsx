import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker } from "antd";
import { fetchingEventStarts } from "../../store/eventReducer/eventStore.actions";
import { fetchingDonationStarts } from "../../store/getInvolvedReducer/getInvolvedStore.actions";

const eventStatus = ["completed", "ongoing", "upcoming"];
const DonationInfoData = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [DonationInfoValues, setDonationInfoValues] = useState({
    heading: "",
    image: "",
    name: "",
    pid: "",
  });

  useEffect(() => {
    setDonationInfoValues({
      heading: props.updateData ? props.updateData.heading : "",
      name: props.updateData ? props.updateData.name : "",
      pid: props.updateData ? props.updateData.pid : "",

      image: props.updateData ? props.updateData.image : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !DonationInfoValues.heading ||
      !DonationInfoValues.image ||
      !DonationInfoValues.name ||
      !DonationInfoValues.pid
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
          ? { ...DonationInfoValues, id: props.updateData.id }
          : { ...DonationInfoValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingDonationStarts());
        message.success(
          `Donation Info ${props.updateData ? "Updated" : "Added"}!`
        );
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        message.error(
          `${
            props.updateData ? "Updating" : "Adding"
          } New Donation Info Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={DonationInfoValues}
            onTextAreaValueChange={setDonationInfoValues}
            textName="heading"
            name="donInfoHeading"
            title="Heading"
          />
          <AdminModalTextArea
            textAreaValue={DonationInfoValues}
            onTextAreaValueChange={setDonationInfoValues}
            textName="pid"
            name="donInfoPid"
            title="Account ID"
          />
          <AdminModalTextArea
            textAreaValue={DonationInfoValues}
            onTextAreaValueChange={setDonationInfoValues}
            textName="name"
            name="donInfoName"
            title="Account Name"
          />
        </div>
      </div>
      <div className="image-select-heading">Select Donation Info Image</div>
      <ImageSelect
        myImage={DonationInfoValues.image}
        setMyImage={setDonationInfoValues}
        name="image"
      />

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default DonationInfoData;
