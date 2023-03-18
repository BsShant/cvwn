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
import { fetchingMemberStarts } from "../../store/landingReducer/landingStore.actions";

const MembersData = (props) => {
  const dispatch = useDispatch();
  const [MemberValues, setMemberValues] = useState({
    name: "",
    image: "",
    link: "",
    district: "",
  });

  useEffect(() => {
    setMemberValues({
      name: props.updateData ? props.updateData.name : "",
      link: props.updateData ? props.updateData.link : "",
      image: props.updateData ? props.updateData.image : "",
      district: props.updateData ? props.updateData.district : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (!MemberValues.name || !MemberValues.image || !MemberValues.district) {
      return message.error("Please insert required values!");
    }
    fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        props.updateData
          ? { ...MemberValues, id: props.updateData.id }
          : { ...MemberValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingMemberStarts());
        message.success(`Members ${props.updateData ? "Updated" : "Added"}!`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Members Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={MemberValues}
            onTextAreaValueChange={setMemberValues}
            textName="name"
            name="Membername"
            title="Name"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={MemberValues}
            onTextAreaValueChange={setMemberValues}
            textName="link"
            name="MemberLink"
            title="Link"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={MemberValues}
            onTextAreaValueChange={setMemberValues}
            textName="district"
            name="MemberDistrict"
            title="District"
          />
        </div>

        <div className="image-select-heading">Select Member Image</div>
        <ImageSelect
          myImage={MemberValues.image}
          setMyImage={setMemberValues}
          name="image"
        />
      </div>
      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default MembersData;
