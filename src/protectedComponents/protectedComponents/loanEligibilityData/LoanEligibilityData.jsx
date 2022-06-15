import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingLoanEligibilityStarts, fetchingLoanEligibilitySuccess } from "../../store/loanReducer/loanStore.actions";

const LoanELigibilityData = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [loanEligibilityValues, setLoanEligibilityValues] = useState({
    point1: "",
    point2: "",
    point3: "",
    point4: "",
    point5: "",
    loanType: "",
  });
  const loanType = useSelector(
    (state) => state.loanStore.loanType
  );

  useEffect(() => {
    setLoanEligibilityValues({
      point5: props.updateData ? props.updateData.point5 : "",
      point4: props.updateData ? props.updateData.point4 : "",
      point3: props.updateData ? props.updateData.point3 : "",
      point2: props.updateData ? props.updateData.point2 : "",
      point1: props.updateData ? props.updateData.point1 : "",
      loanType: props.updateData ? props.updateData.loanType : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !loanEligibilityValues.loanType ||
      !loanEligibilityValues.point1
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
          ? { ...loanEligibilityValues, id: props.updateData.id }
          : { ...loanEligibilityValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingLoanEligibilityStarts());
        console.log(`Loan Eligibility ${props.updateData ? "Updated" : "Added"}`);
        message.success(
          `Loan Eligibility ${props.updateData ? "Updated" : "Added"}!`
        );
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(
          `${props.updateData ? "Updating" : "Adding"} Loan Eligibility Failed: `, error
        );
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Loan Eligibility Failed!`
        );
      });
  };
  function onChange(value) {
    setLoanEligibilityValues((prev) => ({ ...prev, loanType: value }));
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
            textAreaValue={loanEligibilityValues}
            onTextAreaValueChange={setLoanEligibilityValues}
            textName="point1"
            name="loanEligibilityPoint1"
            title="Point 1"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={loanEligibilityValues}
            onTextAreaValueChange={setLoanEligibilityValues}
            textName="point2"
            name="loanEligibilityPoint2"
            title="Point 2"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={loanEligibilityValues}
            onTextAreaValueChange={setLoanEligibilityValues}
            textName="point3"
            name="loanEligibilityPoint3"
            title="Point 3"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={loanEligibilityValues}
            onTextAreaValueChange={setLoanEligibilityValues}
            textName="point4"
            name="loanEligibilityPoint4"
            title="Point 4"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={loanEligibilityValues}
            onTextAreaValueChange={setLoanEligibilityValues}
            textName="point5"
            name="loanEligibilityPoint5"
            title="Point 5"
          />
        </div>
        
      </div>

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default LoanELigibilityData;
