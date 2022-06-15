import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingArticleStarts } from "../../store/resourceReducer/resourceStore.actions";
import {
  fetchingAnnouncementStarts,
  fetchingVolunteerStarts,
} from "../../store/getInvolvedReducer/getInvolvedStore.actions";
import ImageSelect from "../imageSelect/ImageSelect";

const VolunteerData = (props) => {
  const dispatch = useDispatch();
  const [volunteerValues, setVolunteerValues] = useState({
    name: "",
    image: "",
    role: "",
    facebook: "",
    insta: "",
    twitter: "",
  });

  useEffect(() => {
    setVolunteerValues({
      name: props.updateData ? props.updateData.name : "",
      role: props.updateData ? props.updateData.role : "",
      image: props.updateData ? props.updateData.image : "",
      facebook: props.updateData ? props.updateData.facebook : "",
      twitter: props.updateData ? props.updateData.twitter : "",
      insta: props.updateData ? props.updateData.insta : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !volunteerValues.name ||
      !volunteerValues.role ||
      !volunteerValues.image ||
      !volunteerValues.facebook ||
      !volunteerValues.twitter ||
      !volunteerValues.insta
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
          ? { ...volunteerValues, id: props.updateData.id }
          : { ...volunteerValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingVolunteerStarts());
        console.log(`Volunteer ${props.updateData ? "Updated" : "Added"}`);
        message.success(`Volunteer ${props.updateData ? "Updated" : "Added"}!`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(
          `${props.updateData ? "Updating" : "Adding"} Volunteer Failed`
        );
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Volunteer Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={volunteerValues}
            onTextAreaValueChange={setVolunteerValues}
            textName="name"
            name="Volunteername"
            title="Name"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={volunteerValues}
            onTextAreaValueChange={setVolunteerValues}
            textName="role"
            name="VolunteerRole"
            title="Role"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={volunteerValues}
            onTextAreaValueChange={setVolunteerValues}
            textName="facebook"
            name="VolunteerFacebook"
            title="Facebook"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={volunteerValues}
            onTextAreaValueChange={setVolunteerValues}
            textName="twitter"
            name="VolunteerTwitter"
            title="Twitter"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={volunteerValues}
            onTextAreaValueChange={setVolunteerValues}
            textName="insta"
            name="VolunteerInsta"
            title="Insta"
          />
        </div>
        <div className="image-select-heading">Select Volunteer Image</div>
        <ImageSelect
          myImage={volunteerValues.image}
          setMyImage={setVolunteerValues}
          name="image"
        />
      </div>
      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default VolunteerData;
