import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingAnnouncementStarts } from "../../store/getInvolvedReducer/getInvolvedStore.actions";

const AnnouncementData = (props) => {
  const dispatch = useDispatch();
  const [announcementValues, setAnnouncementValues] = useState({
    title: "",
    detail: "",
  });


  useEffect(() => {
    setAnnouncementValues({
      title: props.updateData ? props.updateData.title : "",
      detail: props.updateData ? props.updateData.detail : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !announcementValues.title ||
      !announcementValues.detail
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
        console.log(
          `Announcement ${props.updateData ? "Updated" : "Added"}`
        );
        message.success(
          `Announcement ${props.updateData ? "Updated" : "Added"}!`
        );
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(
          `${props.updateData ? "Updating" : "Adding"} Announcement Failed`
        );
        message.error(
          `${
            props.updateData ? "Updating" : "Adding"
          } New Announcement Failed!`
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
      </div>
      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default AnnouncementData;
