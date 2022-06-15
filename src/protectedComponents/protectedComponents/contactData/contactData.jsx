import { message, Select, DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingFundRaiserStarts } from "../../store/fundRaiserReducer/fundRaiserStore.actions";

const ContactData = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [contactValues, setContactValues] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    message: "",
    subject: "",
  });
  const fundRaiserCategory = useSelector(
    (state) => state.fundCategoryStore.fundRaiserCategory
  );

  useEffect(() => {
    setContactValues({
      name: props.updateData ? props.updateData.name : "",
      address: props.updateData ? props.updateData.address : "",
      phone: props.updateData ? props.updateData.phone : "",
      email: props.updateData ? props.updateData.email : "",
      message: props.updateData ? props.updateData.message : "",
      subject: props.updateData ? props.updateData.subject : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !contactValues.name ||
      !contactValues.address ||
      !contactValues.phone ||
      !contactValues.email ||
      !contactValues.message ||
      !contactValues.subject
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
          ? { ...contactValues, id: props.updateData.id }
          : { ...contactValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingFundRaiserStarts());
        console.log(`Contact ${props.updateData ? "Updated" : "Added"}`);
        message.success(`Contact ${props.updateData ? "Updated" : "Added"}!`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(
          `${props.updateData ? "Updating" : "Adding"} Contact Failed`
        );
        message.error(
          `${props.updateData ? "Updating" : "Adding"} Contact Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={contactValues}
            onTextAreaValueChange={setContactValues}
            textName="name"
            name="contactName"
            title="Name"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={contactValues}
            onTextAreaValueChange={setContactValues}
            textName="address"
            name="contactAddress"
            title="Address"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={contactValues}
            onTextAreaValueChange={setContactValues}
            textName="phone"
            name="contactPhone"
            title="Phone"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={contactValues}
            onTextAreaValueChange={setContactValues}
            textName="email"
            name="contactEmail"
            title="Email"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={contactValues}
            onTextAreaValueChange={setContactValues}
            textName="message"
            name="contactMessage"
            title="Message"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={contactValues}
            onTextAreaValueChange={setContactValues}
            textName="subject"
            name="contactSubject"
            title="Subject"
          />
        </div>
      </div>

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default ContactData;
