import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";
import { fetchingLoanTypeStarts } from "../../store/loanReducer/loanStore.actions";

const LoanTypeData = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [loanTypeValues, setLoanTypeValues] = useState({
    name: "",
  });


  useEffect(() => {
    setLoanTypeValues({
      name: props.updateData ? props.updateData.name : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (!loanTypeValues.name) {
      return message.error("Please insert required values!");
    }
    fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        props.updateData
          ? { ...loanTypeValues, id: props.updateData.id }
          : { ...loanTypeValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingLoanTypeStarts());
        console.log(`Loan Type ${props.updateData ? "Updated" : "Added"}`);
        message.success(`Loan Type ${props.updateData ? "Updated" : "Added"}!`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(
          `${props.updateData ? "Updating" : "Adding"} Loan Type Failed`
        );
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Loan Type Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={loanTypeValues}
            onTextAreaValueChange={setLoanTypeValues}
            textName="name"
            name="loanTypeName"
            title="Name"
          />
        </div>
      </div>

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default LoanTypeData;
