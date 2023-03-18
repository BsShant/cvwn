import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingCaseStarts } from "../../store/resourceReducer/resourceStore.actions";
import { server } from "../../utils/fetch";
import CaseStoryData from "../caseStoryData/caseStoryData";
import DataInputModal from "../dataInputmodal/DataInputModal";
import "./styles.css";

const CaseStoryTable = () => {
  let url = `${server}/caseStory`;
  const dispatch = useDispatch();
  const CaseStory = useSelector((state) => state.resourceStore.caseStory);
  const [CaseStoryEditModalVisible, setCaseStoryEditModalVisible] =
    useState(false);
  const [selectedStudy, setSelectedStudy] = useState({});
  const tableItemEdit = (record) => {
    setSelectedStudy(CaseStory.find((data) => data.id == record.id));
    setCaseStoryEditModalVisible(true);
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
        dispatch(fetchingCaseStarts());
        message.success("Case Story Deleted!");
      })
      .catch((error) => {
        message.error("Case Story Deletion Failed!");
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
      <Table dataSource={CaseStory} columns={columns} />
      <DataInputModal
        setDataModalVisible={setCaseStoryEditModalVisible}
        dataModalVisible={CaseStoryEditModalVisible}
      >
        <CaseStoryData updateData={selectedStudy} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default CaseStoryTable;
