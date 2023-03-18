import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingMemberStarts } from "../../store/landingReducer/landingStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import MembersData from "../membersData/membersData";
import "./styles.css";

const MembersTable = () => {
  let url = `${server}/member`;
  const dispatch = useDispatch();
  const member = useSelector((state) => state.landingStore.member);
  const [MemberEditModalVisible, setMemberEditModalVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState({});
  const tableItemEdit = (record) => {
    setSelectedMember(member.find((data) => data.id == record.id));
    setMemberEditModalVisible(true);
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
        dispatch(fetchingMemberStarts());
        message.success("Member Deleted!");
      })
      .catch((error) => {
        message.error("Member Deletion Failed!");
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
      title: "District",
      dataIndex: "district",
      key: "district",
      responsive: ["lg"],
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
      <Table dataSource={member} columns={columns} />
      <DataInputModal
        setDataModalVisible={setMemberEditModalVisible}
        dataModalVisible={MemberEditModalVisible}
      >
        <MembersData updateData={selectedMember} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default MembersTable;
