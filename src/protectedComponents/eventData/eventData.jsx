import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker } from "antd";
import { fetchingEventStarts } from "../../store/eventReducer/eventStore.actions";

const eventStatus = ["completed", "ongoing", "upcoming"];
const EventData = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [eventValues, setEventValues] = useState({
    title: "",
    detail: "",
    image: "",
    date: "",
    time: "",
    location: "",
    status: "",
  });

  useEffect(() => {
    setEventValues({
      title: props.updateData ? props.updateData.title : "",
      image: props.updateData ? props.updateData.image : "",
      detail: props.updateData ? props.updateData.detail : "",
      date: props.updateData ? props.updateData.date : "",
      time: props.updateData ? props.updateData.time : "",
      location: props.updateData ? props.updateData.location : "",
      status: props.updateData ? props.updateData.status : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !eventValues.title ||
      !eventValues.image ||
      !eventValues.detail ||
      !eventValues.date ||
      !eventValues.time ||
      !eventValues.location ||
      !eventValues.status
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
          ? { ...eventValues, id: props.updateData.id }
          : { ...eventValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingEventStarts());
        message.success(`Event ${props.updateData ? "Updated" : "Added"}!`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Event Failed!`
        );
      });
  };
  function onChange(value) {
    setEventValues((prev) => ({ ...prev, status: value }));
  }
  function onDateChange(e) {
    setEventValues((prev) => ({ ...prev, date: e }));
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="data-heading">Project Status</div>
          <Select
         
            placeholder="Select Category"
            onChange={onChange}
          >
            {eventStatus.map((status, index) => {
              return (
                <Option key={index} value={status}>
                  {status.toLocaleUpperCase()}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={eventValues}
            onTextAreaValueChange={setEventValues}
            textName="title"
            name="eventTitle"
            title="Title"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={eventValues}
            onTextAreaValueChange={setEventValues}
            textName="detail"
            name="eventDetail"
            title="Detail"
          />
        </div>
        <div className="col-md-6">
          <div className="data-heading">Select Date</div>
          <DatePicker onChange={(e) => onDateChange(e)} />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={eventValues}
            onTextAreaValueChange={setEventValues}
            textName="time"
            name="eventTime"
            title="Time"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={eventValues}
            onTextAreaValueChange={setEventValues}
            textName="location"
            name="eventlocation"
            title="Location"
          />
        </div>
      </div>

      <div className="image-select-heading">Select Events Image</div>
      <ImageSelect
        myImage={eventValues.image}
        setMyImage={setEventValues}
        name="image"
      />

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default EventData;
