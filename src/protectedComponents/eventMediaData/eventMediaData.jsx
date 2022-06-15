import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingEventStarts } from "../../store/eventReducer/eventStore.actions";
import ImageSelectMultiple from "../imageSelect/ImageSelectMultiple";
import VideoSelectMultiple from "../imageSelect/VideoSelectMultiple";

const EventMediaData = (props) => {
  const dispatch = useDispatch();
  const [eventValues, setEventValues] = useState({
    title: "",
    mediaImage: [],
    mediaVideo: [],
  });

  useEffect(() => {
    setEventValues({
      title: props.updateData ? props.updateData.title : "",
      mediaImage:
        props.updateData && props.updateData.mediaImage
          ? JSON.parse(props.updateData.mediaImage)
          : [],
      mediaVideo:
        props.updateData && props.updateData.mediaVideo
          ? JSON.parse(props.updateData.mediaVideo)
          : [],
    });
  }, [props.updateData]);
  const addData = () => {
    if (!eventValues.title || !eventValues.mediaImage) {
      return message.error("Please insert required values!");
    }
    fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        props.updateData
          ? {
              mediaImage: JSON.stringify(eventValues.mediaImage),
              mediaVideo: JSON.stringify(eventValues.mediaVideo),
              id: props.updateData.id,
            }
          : { ...eventValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingEventStarts());
        console.log(`Event ${props.updateData ? "Updated" : "Added"}`);
        message.success(`Event ${props.updateData ? "Updated" : "Added"}!`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(`${props.updateData ? "Updating" : "Adding"} Event Failed`);
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Event Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={eventValues}
            onTextAreaValueChange={setEventValues}
            textName="title"
            name="eventTitle"
            title="Title"
          />
        </div>
      </div>

      <div className="image-select-heading">
        Select Events Images (Required)
      </div>
      <ImageSelectMultiple
        myImage={eventValues.mediaImage}
        setMyImage={setEventValues}
        name="mediaImage"
      />
      <div className="image-select-heading">
        Select Events Videos (Optional)
      </div>
      <VideoSelectMultiple
        myVideo={eventValues.mediaVideo}
        setMyVideo={setEventValues}
        name="mediaVideo"
        video
      />

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default EventMediaData;
