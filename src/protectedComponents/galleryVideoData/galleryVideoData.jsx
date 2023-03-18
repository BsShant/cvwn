import { message, Select } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchingAboutStarts } from "../../store/aboutReducer/aboutStore.actions";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import VideoSelect from "../imageSelect/VideoSelect";

const eventStatus = ["completed", "ongoing", "upcoming"];
const GalleryVideoData = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [GalleryVideoValues, setGalleryVideoValues] = useState({
    title: "",
    video: "",
  });

  useEffect(() => {
    setGalleryVideoValues({
      title: props.updateData ? props.updateData.title : "",
      video: props.updateData ? props.updateData.video : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (!GalleryVideoValues.title || !GalleryVideoValues.video) {
      return message.error("Please insert required values!");
    }
    fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        props.updateData
          ? { ...GalleryVideoValues, id: props.updateData.id }
          : { ...GalleryVideoValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingAboutStarts());
        message.success(
          `Gallery Video ${props.updateData ? "Updated" : "Added"}!`
        );
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        message.error(
          `${
            props.updateData ? "Updating" : "Adding"
          } New Gallery Video Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={GalleryVideoValues}
            onTextAreaValueChange={setGalleryVideoValues}
            textName="title"
            name="galVideoTitle"
            title="Title"
          />
        </div>
      </div>
      <div className="image-select-heading">Select Gallery Video</div>
      <VideoSelect
        myVideo={GalleryVideoValues.video}
        setMyVideo={setGalleryVideoValues}
        name="video"
      />

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default GalleryVideoData;
