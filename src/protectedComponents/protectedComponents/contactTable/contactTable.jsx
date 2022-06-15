import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";
import { fetchingFundRaiserStarts } from "../../store/fundRaiserReducer/fundRaiserStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import FundRaiserData from "../fundRaiserData/fundRaiserData";
import LoanELigibilityData from "../loanEligibilityData/LoanEligibilityData";
import LoanFactorData from "../loanFactorData/LoanFactorData";
import "./styles.css";

const ContactTable = () => {
  let url = `${server}/contact`;
  const dispatch = useDispatch();
  const fundRaiser = useSelector((state) => state.fundRaiserStore.fundRaiser);
  const [contactEditModalVisible, setContactEditModalVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});
  const tableItemEdit = (record) => {
    setSelectedContact(fundRaiser.find((data) => data.id == record.id));
    setContactEditModalVisible(true);
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
        dispatch(fetchingFundRaiserStarts());
        console.log("Deleteing Fund Raiser Success");
        message.success("Fund Raiser Deleted!");
      })
      .catch((error) => {
        console.log("Deleteing Fund Raiser Failed: ", error);
        message.error("Fund Raiser Deletion Failed!");
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
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Edit",
      key: "edit",
      render: (text, record) => (
        <button className="table-button" onClick={() => tableItemEdit(record)}>
          Set Seen
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
      <Table dataSource={fundRaiser} columns={columns} />
      <DataInputModal
        setDataModalVisible={setContactEditModalVisible}
        dataModalVisible={contactEditModalVisible}
      >
        <FundRaiserData updateData={selectedContact} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default ContactTable;
