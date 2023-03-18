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
import { fetchingPartnerStarts } from "../../store/landingReducer/landingStore.actions";

const PartnerData = (props) => {
  const dispatch = useDispatch();
  const { Option } = Select;
  const [partnerValues, setPartnerValues] = useState({
    name: "",
    image: "",
    link: "",
    type: "",
  });

  useEffect(() => {
    setPartnerValues({
      name: props.updateData ? props.updateData.name : "",
      link: props.updateData ? props.updateData.link : "",
      image: props.updateData ? props.updateData.image : "",
      type: props.updateData ? props.updateData.type : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (!partnerValues.name || !partnerValues.image) {
      return message.error("Please insert required values!");
    }
    fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        props.updateData
          ? { ...partnerValues, id: props.updateData.id }
          : { ...partnerValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingPartnerStarts());
        message.success(`Partner ${props.updateData ? "Updated" : "Added"}!`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Partner Failed!`
        );
      });
  };
  function onChange(value) {
    setPartnerValues((prev) => ({ ...prev, type: value }));
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="data-heading">Partner Type</div>
          <Select placeholder="Select Partner Type" onChange={onChange}>
            {["Main", "Event"].map((status, index) => {
              return (
                <Option key={index} value={status}>
                  {status}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={partnerValues}
            onTextAreaValueChange={setPartnerValues}
            textName="name"
            name="Partnername"
            title="Name"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={partnerValues}
            onTextAreaValueChange={setPartnerValues}
            textName="link"
            name="PartnerLink"
            title="Link"
          />
        </div>

        <div className="image-select-heading">Select Partner Image</div>
        <ImageSelect
          myImage={partnerValues.image}
          setMyImage={setPartnerValues}
          name="image"
        />
      </div>
      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default PartnerData;
