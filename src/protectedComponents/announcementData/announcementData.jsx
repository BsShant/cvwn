import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingAnnouncementStarts } from "../../store/getInvolvedReducer/getInvolvedStore.actions";
import ImageSelect from "../imageSelect/ImageSelect";

const AnnouncementData = (props) => {
  const dispatch = useDispatch();
  const [announcementValues, setAnnouncementValues] = useState({
    title: "",
    detail: "",
    file: "",
    image: "",
  });

  useEffect(() => {
    setAnnouncementValues({
      title: props.updateData ? props.updateData.title : "",
      detail: props.updateData ? props.updateData.detail : "",
      file: props.updateData ? props.updateData.file : "",
      image: props.updateData ? props.updateData.image : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !announcementValues.title ||
      !announcementValues.detail ||
      !announcementValues.file ||
      !announcementValues.image
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
          ? { ...announcementValues, id: props.updateData.id }
          : { ...announcementValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingAnnouncementStarts());
        message.success(
          `Announcement ${props.updateData ? "Updated" : "Added"}!`
        );
        props.setDataModalVisible(false);
      })
      .catch((error) => {
       
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Announcement Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={announcementValues}
            onTextAreaValueChange={setAnnouncementValues}
            textName="title"
            name="AnnouncementTitle"
            title="Title"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={announcementValues}
            onTextAreaValueChange={setAnnouncementValues}
            textName="detail"
            name="AnnouncementDetail"
            title="Detail"
          />
        </div>

        <div className="image-select-heading"> Announcement Image</div>

        <ImageSelect
          myImage={announcementValues.image}
          setMyImage={setAnnouncementValues}
          name="image"
        />

        <div className="image-select-heading">Select Announcement File</div>
        <ImageSelect
          myImage={announcementValues.file}
          setMyImage={setAnnouncementValues}
          name="file"
        />
      </div>

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default AnnouncementData;
