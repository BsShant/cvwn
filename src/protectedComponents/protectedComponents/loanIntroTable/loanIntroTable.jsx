import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingLoanWhatIsStarts } from "../../store/loanReducer/loanStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import LoanIntroData from "../loanIntroData/loanIntroData";
import "./styles.css";

const LoanIntroTable = () => {
  let url = `${server}/loanWhatIs`;
  const dispatch = useDispatch();
  const loanWhatIs = useSelector(
    (state) => state.loanStore.loanWhatIs
  );
  const [loanIntroEditModalVisible, setLoanIntroEditModalVisible] =
    useState(false);
  const [selectedLoanIntro, setSelectedLoanIntro] = useState({});
  const tableItemEdit = (record) => {
    setSelectedLoanIntro(
      loanWhatIs.find((data) => data.id == record.id)
    );
    setLoanIntroEditModalVisible(true);
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
        dispatch(fetchingLoanWhatIsStarts());
        console.log("Deleteing Loan Intro Success");
        message.success("Loan Intro Deleted!");
      })
      .catch((error) => {
        console.log("Deleteing Loan Intro Failed: ", error);
        message.error("Loan Intro Deletion Failed!");
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
      render: (text, record) => (
        <div className="category-table-name">{text.replaceAll('-', " ")}</div>
      ),
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
      <Table dataSource={loanWhatIs} columns={columns} />
      <DataInputModal
        setDataModalVisible={setLoanIntroEditModalVisible}
        dataModalVisible={loanIntroEditModalVisible}
      >
        <LoanIntroData
          updateData={selectedLoanIntro}
          url={url}
          method="PUT"
        />
      </DataInputModal>
    </div>
  );
};

export default LoanIntroTable;
