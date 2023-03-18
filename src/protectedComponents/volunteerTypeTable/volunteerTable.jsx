import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingVolunteerTypeStarts } from "../../store/getInvolvedReducer/getInvolvedStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import VolunteerTypeData from "../VolunteerTypeData/VolunteerTypeData";
import "./styles.css";

const VolunteerTypeTable = () => {
  let url = `${server}/volunteerType`;
  const dispatch = useDispatch();
  const volunteerType = useSelector((state) => state.getInvolvedStore.volunteerType);
  const [VolunteerTypeEditModalVisible, setVolunteerTypeEditModalVisible] =
    useState(false);
  const [selectedVolunteerType, setSelectedVolunteerType] = useState({});
  const tableItemEdit = (record) => {
    setSelectedVolunteerType(volunteerType.find((data) => data.id == record.id));
    setVolunteerTypeEditModalVisible(true);
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
        dispatch(fetchingVolunteerTypeStarts());
        message.success("Team Type Deleted!");
      })
      .catch((error) => {
        message.error("Team Type Deletion Failed!");
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
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      responsive: ["lg"],
      sortOrder: "ascend",

      sorter: (a, b) => a.rank - b.rank,
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
      <Table dataSource={volunteerType} columns={columns} />
      <DataInputModal
        setDataModalVisible={setVolunteerTypeEditModalVisible}
        dataModalVisible={VolunteerTypeEditModalVisible}
      >
        <VolunteerTypeData
          updateData={selectedVolunteerType}
          url={url}
          method="PUT"
        />
      </DataInputModal>
    </div>
  );
};

export default VolunteerTypeTable;
