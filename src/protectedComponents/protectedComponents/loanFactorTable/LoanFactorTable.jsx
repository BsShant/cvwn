import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";
import { fetchingLoanFactorsStarts } from "../../store/loanReducer/loanStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import LoanFactorData from "../loanFactorData/LoanFactorData";
import "./styles.css";

const LoanFactorTable = () => {
  let url = `${server}/loanFactors`;
  const dispatch = useDispatch();
  const loanFactors = useSelector(
    (state) => state.loanStore.loanFactors
  );
  const [loanFactorEditModalVisible, setLoanFactorEditModalVisible] =
    useState(false);
  const [selectedLoanFactor, setSelectedLoanFactor] = useState({});
  const tableItemEdit = (record) => {
    setSelectedLoanFactor(
      loanFactors.find((data) => data.id == record.id)
    );
    setLoanFactorEditModalVisible(true);
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
        dispatch(fetchingLoanFactorsStarts());
        console.log("Deleteing Loan Factor Success");
        message.success("Loan Factor Deleted!");
      })
      .catch((error) => {
        console.log("Deleteing Loan Factor Failed: ", error);
        message.error("Loan Factor Deletion Failed!");
      });
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <div className="category-table-name">{text}</div>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
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
        <button
          className="table-button"
          onClick={() => tableItemEdit(record)}
        >
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
      <Table dataSource={loanFactors} columns={columns}/>
      <DataInputModal
        setDataModalVisible={setLoanFactorEditModalVisible}
        dataModalVisible={loanFactorEditModalVisible}
      >
        <LoanFactorData
          updateData={selectedLoanFactor}
          url={url}
          method="PUT"
        />
      </DataInputModal>
    </div>
  );
};

export default LoanFactorTable;
