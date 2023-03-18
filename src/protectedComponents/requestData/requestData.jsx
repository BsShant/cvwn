import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingArticleStarts } from "../../store/resourceReducer/resourceStore.actions";
import { fetchingDonationStarts } from "../../store/getInvolvedReducer/getInvolvedStore.actions";
import ImageSelect from "../imageSelect/ImageSelect";
import { fetchingRequestStarts } from "../../store/eventReducer/eventStore.actions";

const RequestData = (props) => {
  const dispatch = useDispatch();
  const [requestValues, setRequestValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    setRequestValues({
      name: props.updateData ? props.updateData.name : "",
      email: props.updateData ? props.updateData.email : "",
      phone: props.updateData ? props.updateData.phone : "",
      message: props.updateData ? props.updateData.message : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !requestValues.name ||
      !requestValues.email ||
      !requestValues.phone ||
      !requestValues.message
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
          ? { ...requestValues, id: props.updateData.id }
          : { ...requestValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingRequestStarts());
        message.success(`Request ${props.updateData ? "Updated" : "Added"}!`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Request Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={requestValues}
            onTextAreaValueChange={setRequestValues}
            textName="name"
            name="Requestname"
            title="Name"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={requestValues}
            onTextAreaValueChange={setRequestValues}
            textName="email"
            name="RequestEmail"
            title="Email"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={requestValues}
            onTextAreaValueChange={setRequestValues}
            textName="phone"
            name="RequestPhone"
            title="Phone"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={requestValues}
            onTextAreaValueChange={setRequestValues}
            textName="message"
            name="RequestMessage"
            title="Message"
          />
        </div>
      </div>
      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default RequestData;
