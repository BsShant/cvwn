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
  const { Option } = Select;
  const volunteerType = useSelector(
    (state) => state.getInvolvedStore.volunteerType
  );
  const [volunteerValues, setVolunteerValues] = useState({
    name: "",
    image: "",
    role: "",
    facebook: "https://facebook.com",
    insta: "https://insta.com",
    twitter: "https://twitter.com",
    rank: "",
    type: "",
    address: "",
  });
  useEffect(() => {
    setVolunteerValues({
      name: props.updateData ? props.updateData.name : "",
      role: props.updateData ? props.updateData.role : "",
      image: props.updateData ? props.updateData.image : "",
      type: props.updateData ? props.updateData.type : "",
      address: props.updateData ? props.updateData.address : "",

      facebook: props.updateData
        ? props.updateData.facebook
        : "https://insta.com",
      twitter: props.updateData
        ? props.updateData.twitter
        : "https://insta.com",
      insta: props.updateData ? props.updateData.insta : "https://insta.com",
      rank: props.updateData ? props.updateData.rank : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !volunteerValues.name ||
      !volunteerValues.role ||
      !volunteerValues.image ||
      !volunteerValues.facebook ||
      !volunteerValues.twitter ||
      !volunteerValues.insta ||
      !volunteerValues.rank ||
      !volunteerValues.type ||
      !volunteerValues.address
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
        message.success(`Team ${props.updateData ? "Updated" : "Added"}!`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Team Failed!`
        );
      });
  };
  function onChange(value) {
    setVolunteerValues((prev) => ({ ...prev, type: value }));
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="data-heading">Team Type</div>
          <Select
            // defaultValue={volunteerValues.type}
            placeholder="Select Team Type"
            onChange={onChange}
          >
            {volunteerType.map((status, index) => {
              ""
              return (
                <Option key={index} value={status.name}>
                  {status.name.replaceAll("-", " ").toLocaleUpperCase()}
                </Option>
              );
            })}
          </Select>
        </div>
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
            textName="address"
            name="VolunteerAddress"
            title="Address"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={volunteerValues}
            onTextAreaValueChange={setVolunteerValues}
            textName="rank"
            name="VolunteerRank"
            title="Rank"
          />
        </div>
        {/* <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={volunteerValues}
            onTextAreaValueChange={setVolunteerValues}
            textName="facebook"
            name="VolunteerFacebook"
            title="Facebook"
          />
        </div> */}
        {/* <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={volunteerValues}
            onTextAreaValueChange={setVolunteerValues}
            textName="twitter"
            name="VolunteerTwitter"
            title="Twitter"
          />
        </div> */}
        {/* <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={volunteerValues}
            onTextAreaValueChange={setVolunteerValues}
            textName="insta"
            name="VolunteerInsta"
            title="Insta"
          />
        </div> */}
        <div className="image-select-heading">Select Team Image</div>
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
