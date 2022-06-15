import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingLoanTypeStarts } from "../../store/loanReducer/loanStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import LoanIntroData from "../loanIntroData/loanIntroData";
import LoanTypeData from "../loanTypeData/LoanTypeData";
import "./styles.css";

const LoanTypeTable = () => {
  let url = `${server}/loanType`;
  const dispatch = useDispatch();
  const loanType = useSelector((state) => state.loanStore.loanType);
  const [loanTypeEditModalVisible, setLoanTypeEditModalVisible] =
    useState(false);
  const [selectedLoanType, setSelectedLoanType] = useState({});
  const tableItemEdit = (record) => {
    setSelectedLoanType(loanType.find((data) => data.id == record.id));
    setLoanTypeEditModalVisible(true);
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
        dispatch(fetchingLoanTypeStarts());
        console.log("Deleteing Loan Type Success");
        message.success("Loan Type Deleted!");
      })
      .catch((error) => {
        console.log("Deleteing Loan Type Failed: ", error);
        message.error("Loan Type Deletion Failed!");
      });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="category-table-name">{text}</div>
      ),
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
      <Table dataSource={loanType} columns={columns} />
      <DataInputModal
        setDataModalVisible={setLoanTypeEditModalVisible}
        dataModalVisible={loanTypeEditModalVisible}
      >
        <LoanTypeData updateData={selectedLoanType} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default LoanTypeTable;
