import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingVolunteerStarts } from "../../store/getInvolvedReducer/getInvolvedStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import VolunteerData from "../volunteerData/volunteerData";
import "./styles.css";

const VolunteerTable = () => {
  let url = `${server}/volunteer`;
  const dispatch = useDispatch();
  const volunteer = useSelector((state) => state.getInvolvedStore.volunteer);
  const [VolunteerEditModalVisible, setVolunteerEditModalVisible] =
    useState(false);
  const [selectedVolunteer, setSelectedVolunteer] = useState({});
  const tableItemEdit = (record) => {
    setSelectedVolunteer(volunteer.find((data) => data.id == record.id));
    setVolunteerEditModalVisible(true);
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
        dispatch(fetchingVolunteerStarts());
        message.success("Team Deleted!");
      })
      .catch((error) => {
        message.error("Team Deletion Failed!");
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
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      responsive: ["lg"],
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      responsive: ["lg"],
      sortOrder: "ascend",

      sorter: (a, b) => a.rank - b.rank,
    },
    // {
    //   title: "Facebook",
    //   dataIndex: "facebook",
    //   key: "facebook",
    //   responsive: ["lg"],

    // },

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
      <Table dataSource={volunteer} columns={columns} />
      <DataInputModal
        setDataModalVisible={setVolunteerEditModalVisible}
        dataModalVisible={VolunteerEditModalVisible}
      >
        <VolunteerData updateData={selectedVolunteer} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default VolunteerTable;
