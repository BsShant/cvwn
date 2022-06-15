import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingProductsStarts } from "../../store/productReducer/productStore.actions";
import { fetchingTestimonialStarts } from "../../store/landingReducer/landingStore.actions";

const TestimonialData = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [testimonialValues, setTestimonialValues] = useState({
    name: "",
    role: "",
    rank: "",
    detail: "",
  });

  useEffect(() => {
    setTestimonialValues({
      name: props.updateData ? props.updateData.name : "",
      role: props.updateData ? props.updateData.role : "",
      detail: props.updateData ? props.updateData.detail : "",
      rank: props.updateData ? props.updateData.rank : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !testimonialValues.name ||
      !testimonialValues.role ||
      !testimonialValues.rank ||
      !testimonialValues.detail
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
          ? { ...testimonialValues, id: props.updateData.id }
          : { ...testimonialValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingTestimonialStarts());
        console.log(`Testimonial ${props.updateData ? "Updated" : "Added"}`);
        message.success(
          `Testimonial ${props.updateData ? "Updated" : "Added"}!`
        );
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(
          `${props.updateData ? "Updating" : "Adding"} Testimonial Failed`
        );
        message.error(
          `${props.updateData ? "Updating" : "Adding"} Testimonial Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={testimonialValues}
            onTextAreaValueChange={setTestimonialValues}
            textName="name"
            name="testimonialName"
            title="Name"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={testimonialValues}
            onTextAreaValueChange={setTestimonialValues}
            textName="role"
            name="testimonialRole"
            title="Role"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={testimonialValues}
            onTextAreaValueChange={setTestimonialValues}
            textName="rank"
            name="testimonialRank"
            title="Rank"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={testimonialValues}
            onTextAreaValueChange={setTestimonialValues}
            textName="detail"
            name="testimonialDetail"
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

export default TestimonialData;
