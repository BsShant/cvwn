import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";
import { fetchingLoanWhatIsStarts } from "../../store/loanReducer/loanStore.actions";

const LoanIntroData = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [loanIntroValues, setLoanIntroValues] = useState({
    title: "",
    detail: "",
    loanType: "",
    image: "",
  });
  const loanType = useSelector(
    (state) => state.loanStore.loanType
  );

  useEffect(() => {
    setLoanIntroValues({
      title: props.updateData ? props.updateData.title : "",
      image: props.updateData ? props.updateData.image : "",
      detail: props.updateData ? props.updateData.detail : "",
      loanType: props.updateData ? props.updateData.loanType : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !loanIntroValues.title ||
      !loanIntroValues.image ||
      !loanIntroValues.detail ||
      !loanIntroValues.loanType
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
          ? { ...loanIntroValues, id: props.updateData.id }
          : { ...loanIntroValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingLoanWhatIsStarts());
        console.log(
          `Loan Intro ${props.updateData ? "Updated" : "Added"}`
        );
        message.success(
          `Loan Intro ${props.updateData ? "Updated" : "Added"}!`
        );
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(
          `${props.updateData ? "Updating" : "Adding"} Loan Intro Failed`
        );
        message.error(
          `${
            props.updateData ? "Updating" : "Adding"
          } New Loan Intro Failed!`
        );
      });
  };
  function onChange(value) {
    setLoanIntroValues((prev) => ({ ...prev, loanType: value }));
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
            textAreaValue={loanIntroValues}
            onTextAreaValueChange={setLoanIntroValues}
            textName="title"
            name="loanIntroTitle"
            title="Title"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={loanIntroValues}
            onTextAreaValueChange={setLoanIntroValues}
            textName="detail"
            name="loanIntroDetail"
            title="Detail"
          />
        </div>
      </div>

      <div className="image-select-heading">Select Loan Intro Image</div>
      <ImageSelect
        myImage={loanIntroValues.image}
        setMyImage={setLoanIntroValues}
        name="image"
      />

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default LoanIntroData;
