import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker } from "antd";
import { fetchingReportStarts } from "../../store/resourceReducer/resourceStore.actions";
const ReportData = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [reportValues, setReportValues] = useState({
    title: "",
    image: "",
  });

  useEffect(() => {
    setReportValues({
      title: props.updateData ? props.updateData.title : "",
      image: props.updateData ? props.updateData.image : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (!reportValues.title || !reportValues.image) {
      return message.error("Please insert required values!");
    }
    fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        props.updateData
          ? { ...reportValues, id: props.updateData.id }
          : { ...reportValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingReportStarts());
        message.success(
          `Annual Report ${props.updateData ? "Updated" : "Added"}!`
        );
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        message.error(
          `${
            props.updateData ? "Updating" : "Adding"
          } New Annual Report Failed!`
        );
      });
  };
  function onChange(value) {
    // setLoanFactorsValues((prev) => ({ ...prev, loanType: value }));
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={reportValues}
            onTextAreaValueChange={setReportValues}
            textName="title"
            name="reportTitle"
            title="Title"
          />
        </div>
      </div>

      <div className="image-select-heading">Select Report Image</div>
      <ImageSelect
        myImage={reportValues.image}
        setMyImage={setReportValues}
        name="image"
      />

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default ReportData;
