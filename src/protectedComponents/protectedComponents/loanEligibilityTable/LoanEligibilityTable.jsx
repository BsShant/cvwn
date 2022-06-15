import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";
import { fetchingLoanEligibilityStarts } from "../../store/loanReducer/loanStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import LoanELigibilityData from "../loanEligibilityData/LoanEligibilityData";
import LoanFactorData from "../loanFactorData/LoanFactorData";
import "./styles.css";

const LoanEligibilityTable = () => {
  let url = `${server}/loanEligibility`;
  const dispatch = useDispatch();
  const loanEligibility = useSelector(
    (state) => state.loanStore.loanEligibility
  );
  const [loanEligibilityEditModalVisible, setLoanEligibilityEditModalVisible] =
    useState(false);
  const [selectedLoanEligibility, setSelectedLoanEligibility] = useState({});
  const tableItemEdit = (record) => {
    setSelectedLoanEligibility(
      loanEligibility.find((data) => data.id == record.id)
    );
    setLoanEligibilityEditModalVisible(true);
  };
  const tableItemDelete = (record) => {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: record.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingLoanEligibilityStarts());
        console.log("Deleteing Loan Eligibility Success");
        message.success("Loan Eligibility Deleted!");
      })
      .catch((error) => {
        console.log("Deleteing Loan Eligibility Failed: ", error);
        message.error("Loan Eligibility Deletion Failed!");
      });
  };
  const columns = [
    {
      title: "Point 1",
      dataIndex: "point1",
      key: "point1",
      render: (text, record) => (
        <div className="category-table-name">{text}</div>
      ),
    },
    {
      title: "Point 2",
      dataIndex: "point2",
      key: "point2",
    },
    {
      title: "Point 3",
      dataIndex: "point3",
      key: "point3",
    },
    {
      title: "Point 4",
      dataIndex: "point4",
      key: "point4",
    },
    {
      title: "Point 5",
      dataIndex: "point5",
      key: "point5",
    },
    {
      title: "Loan Type",
      dataIndex: "loanType",
      key: "loanType",
    },
    {
      title: "Edit",
      key: "edit",
      render: (text, record) => (
        <button className="table-button" onClick={() => tableItemEdit(record)}>
          Edit
        </button>
      ),
      responsive: ["lg"],
    },
    {
      title: "Delete",
      key: "delete",
      render: (text, record) => (
        <button
          className="table-button"
          onClick={() => tableItemDelete(record)}
        >
          Delete
        </button>
      ),
      responsive: ["lg"],
    },
  ];
  return (
    <div>
      <Table dataSource={loanEligibility} columns={columns} />
      <DataInputModal
        setDataModalVisible={setLoanEligibilityEditModalVisible}
        dataModalVisible={loanEligibilityEditModalVisible}
      >
        <LoanELigibilityData
          updateData={selectedLoanEligibility}
          url={url}
          method="PUT"
        />
      </DataInputModal>
    </div>
  );
};

export default LoanEligibilityTable;
