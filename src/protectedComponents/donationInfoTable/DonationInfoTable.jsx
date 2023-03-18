import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingEventStarts } from "../../store/eventReducer/eventStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import EventData from "../eventData/eventData";
import EventMediaData from "../eventMediaData/eventMediaData";
import DonationInfoData from "../donationInfoData/DonationInfoData";
import "./styles.css";
import { fetchingDonationStarts } from "../../store/getInvolvedReducer/getInvolvedStore.actions";

const DonationInfoTable = () => {
  let url = `${server}/donationInfo`;
  const dispatch = useDispatch();
  const donationInfo = useSelector((state) => state.getInvolvedStore.donationInfo);
  const [DonationInfoEditModalVisible, setDonationInfoEditModalVisible] = useState(false);
  const [selectedDonationInfo, setSelectedDonationInfo] = useState({});
  const tableItemEdit = (record) => {
    setSelectedDonationInfo(donationInfo.find((data) => data.id == record.id));
    setDonationInfoEditModalVisible(true);
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
        dispatch(fetchingDonationStarts());
        message.success("Donation Info Deleted!");
      })
      .catch((error) => {
        message.error("Donation Info Deletion Failed!");
      });
  };
  const columns = [
    {
      title: "Heading",
      dataIndex: "heading",
      key: "heading",
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
      <Table dataSource={donationInfo} columns={columns} />
      <DataInputModal
        setDataModalVisible={setDonationInfoEditModalVisible}
        dataModalVisible={DonationInfoEditModalVisible}
      >
        <DonationInfoData updateData={selectedDonationInfo} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default DonationInfoTable;
