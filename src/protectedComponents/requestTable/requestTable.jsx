import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingRequestStarts } from "../../store/eventReducer/eventStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import RequestData from "../requestData/requestData";
import "./styles.css";

const RequestTable = () => {
  let url = `${server}/request`;
  const dispatch = useDispatch();
  const request = useSelector((state) => state.eventStore.request);
  console.log("request",request)
  const [requestEditModalVisible, setRequestEditModalVisible] =
    useState(false);
  const [selectedRequest, setRequestDonation] = useState({});
  const tableItemEdit = (record) => {
    setRequestDonation(request.find((data) => data.id == record.id));
    setRequestEditModalVisible(true);
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
        dispatch(fetchingRequestStarts());
        console.log("Deleteing Request Success");
        message.success("Request Deleted!");
      })
      .catch((error) => {
        console.log("Deleteing Request Failed: ", error);
        message.error("Request Deletion Failed!");
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
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
      <Table dataSource={request} columns={columns} />
      <DataInputModal
        setDataModalVisible={setRequestEditModalVisible}
        dataModalVisible={requestEditModalVisible}
      >
        <RequestData updateData={selectedRequest} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default RequestTable;
