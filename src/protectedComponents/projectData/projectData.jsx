import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import { message, Select, DatePicker } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingProjectStarts } from "../../store/projectReducer/projectStore.actions";
import ImageSelectMultiple from "../imageSelect/ImageSelectMultiple";

const ProductData = (props) => {
  const { RangePicker } = DatePicker;
  const dispatch = useDispatch();
  const [projectValues, setProjectValues] = useState({
    title: "",
    para1: "",
    para2: "",
    para3: "",
    para4: "",
    image: [],
    start: "2056/04/30",
    end: "2156/04/30",
    duration: "1 year",
  });
  useEffect(() => {
    setProjectValues({
      title: props.updateData ? props.updateData.title : "",
      para1: props.updateData ? props.updateData.para1 : "",
      para2: props.updateData ? props.updateData.para2 : "",
      para3: props.updateData ? props.updateData.para3 : "",
      para4: props.updateData ? props.updateData.para4 : "",
      image: props.updateData ? JSON.parse(props.updateData.image) : "",
      start: props.updateData ? props.updateData.start : "2056/04/30",
      end: props.updateData ? props.updateData.end : "2156/04/30",
      duration: props.updateData ? props.updateData.duration : "1 year",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !projectValues.title ||
      !projectValues.para1 ||
      !projectValues.image ||
      !projectValues.start ||
      !projectValues.end ||
      !projectValues.duration
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
          ? {
              ...projectValues,
              id: props.updateData.id,
              image: JSON.stringify(projectValues.image),
            }
          : { ...projectValues, image: JSON.stringify(projectValues.image) }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingProjectStarts());
        message.success(`Project ${props.updateData ? "Updated" : "Added"}!`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Project Failed!`
        );
      });
  };
  function onDateChange(s, e) {
    setProjectValues((prev) => ({ ...prev, start: e[0], end: e[1] }));
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={projectValues}
            onTextAreaValueChange={setProjectValues}
            textName="title"
            name="projectTitle"
            title="Title"
          />
        </div>
        {/* <div className="col-md-6">
          <div className="data-heading">Select Start And End Date</div>
          <RangePicker onChange={(s, e) => onDateChange(s, e)} />
        </div> */}
        {/* <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={projectValues}
            onTextAreaValueChange={setProjectValues}
            textName="duration"
            name="projectDuration"
            title="Duration"
          />
        </div> */}
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={projectValues}
            onTextAreaValueChange={setProjectValues}
            textName="para1"
            name="projectPara1"
            title="Para1"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={projectValues}
            onTextAreaValueChange={setProjectValues}
            textName="para2"
            name="projectPara2"
            title="Para2"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={projectValues}
            onTextAreaValueChange={setProjectValues}
            textName="para3"
            name="projectPara3"
            title="Para3"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={projectValues}
            onTextAreaValueChange={setProjectValues}
            textName="para4"
            name="projectPara4"
            title="Para4"
          />
        </div>
      </div>

      <div className="image-select-heading">
        Select Project Image (You Can Select Multiple Images)
      </div>
      <ImageSelectMultiple
        myImage={projectValues.image}
        setMyImage={setProjectValues}
        name="image"
        multiple
      />

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default ProductData;
