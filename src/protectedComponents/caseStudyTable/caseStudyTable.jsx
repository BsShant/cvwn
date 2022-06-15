import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingCaseStarts } from "../../store/resourceReducer/resourceStore.actions";
import { server } from "../../utils/fetch";
import CaseStudyData from "../caseStudyData/caseStudyData";
import DataInputModal from "../dataInputmodal/DataInputModal";
import "./styles.css";

const CaseStudyTable = () => {
  let url = `${server}/case`;
  const dispatch = useDispatch();
  const caseStudy = useSelector((state) => state.resourceStore.case);
  const [caseStudyEditModalVisible, setCaseStudyEditModalVisible] =
    useState(false);
  const [selectedStudy, setSelectedStudy] = useState({});
  const tableItemEdit = (record) => {
    setSelectedStudy(caseStudy.find((data) => data.id == record.id));
    setCaseStudyEditModalVisible(true);
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
        console.log("Deleteing Case Study Success");
        message.success("Case Study Deleted!");
      })
      .catch((error) => {
        console.log("Deleteing Case Study Failed: ", error);
        message.error("Case Study Deletion Failed!");
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
      <Table dataSource={caseStudy} columns={columns} />
      <DataInputModal
        setDataModalVisible={setCaseStudyEditModalVisible}
        dataModalVisible={caseStudyEditModalVisible}
      >
        <CaseStudyData updateData={selectedStudy} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default CaseStudyTable;
