import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingLoanFactorsStarts } from "../../store/loanReducer/loanStore.actions";

const LoanFactorData = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [loanFactorsValues, setLoanFactorsValues] = useState({
    title: "",
    detail: "",
    loanType: "",
    image: "",
  });
  const loanType = useSelector(
    (state) => state.loanStore.loanType
  );

  useEffect(() => {
    setLoanFactorsValues({
      title: props.updateData ? props.updateData.title : "",
      image: props.updateData ? props.updateData.image : "",
      detail: props.updateData ? props.updateData.detail : "",
      loanType: props.updateData ? props.updateData.loanType : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !loanFactorsValues.title ||
      !loanFactorsValues.image ||
      !loanFactorsValues.detail ||
      !loanFactorsValues.loanType
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
          ? { ...loanFactorsValues, id: props.updateData.id }
          : { ...loanFactorsValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingLoanFactorsStarts());
        console.log(
          `Loan Factors ${props.updateData ? "Updated" : "Added"}`
        );
        message.success(
          `Loan Factors ${props.updateData ? "Updated" : "Added"}!`
        );
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(
          `${props.updateData ? "Updating" : "Adding"} Loan Factors Failed`
        );
        message.error(
          `${
            props.updateData ? "Updating" : "Adding"
          } New Loan Factors Failed!`
        );
      });
  };
  function onChange(value) {
    setLoanFactorsValues((prev) => ({ ...prev, loanType: value }));
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
        <div className="data-heading">Loan Type</div>
          <Select placeholder="Select Loan Type" onChange={onChange}>
            {loanType.map((category, index) => {
              return (
                <Option key={index} value={category.route}>
                  {category.name}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={loanFactorsValues}
            onTextAreaValueChange={setLoanFactorsValues}
            textName="title"
            name="loanFactorsTitle"
            title="Title"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={loanFactorsValues}
            onTextAreaValueChange={setLoanFactorsValues}
            textName="detail"
            name="loanFactorsDetail"
            title="Detail"
          />
        </div>
      </div>

      <div className="image-select-heading">Select Loan Factors Image</div>
      <ImageSelect
        myImage={loanFactorsValues.image}
        setMyImage={setLoanFactorsValues}
        name="image"
      />

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default LoanFactorData;
