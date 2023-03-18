import { message, Select, DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingContactStarts } from "../../store/contactReducer/contactStore.actions";

const SubscriberData = (props) => {
  const dispatch = useDispatch();
  const [subscriberValues, setsubScriberValues] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    setsubScriberValues({
      name: props.updateData ? props.updateData.name : "",
      email: props.updateData ? props.updateData.email : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (!subscriberValues.name || !subscriberValues.email) {
      return message.error("Please insert required values!");
    }
    fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        props.updateData
          ? { ...subscriberValues, id: props.updateData.id }
          : { ...subscriberValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingContactStarts());
        message.success(
          `Subscriber ${props.updateData ? "Updated" : "Added"}!`
        );
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        message.error(
          `${props.updateData ? "Updating" : "Adding"} Subscriber Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={subscriberValues}
            onTextAreaValueChange={setsubScriberValues}
            textName="name"
            name="SubscriberName"
            title="Name"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={subscriberValues}
            onTextAreaValueChange={setsubScriberValues}
            textName="email"
            name="subscriberEmail"
            title="Email"
          />
        </div>
      </div>

      {/* <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button> */}
    </div>
  );
};

export default SubscriberData;
