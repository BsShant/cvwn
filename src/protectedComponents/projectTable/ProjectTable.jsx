import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingProjectStarts } from "../../store/projectReducer/projectStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import ProductData from "../projectData/projectData";
import "./styles.css";

const ProjectTable = () => {
  let url = `${server}/project`;
  const dispatch = useDispatch();
  const project = useSelector((state) => state.projectStore.project);
  const [projectEditModalVisible, setProjectEditModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const tableItemEdit = (record) => {
    setSelectedProject(project.find((data) => data.id == record.id));
    setProjectEditModalVisible(true);
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
        dispatch(fetchingProjectStarts());
        message.success("Project Deleted!");
      })
      .catch((error) => {
        message.error("Project Deletion Failed!");
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
      <Table dataSource={project} columns={columns} />
      <DataInputModal
        setDataModalVisible={setProjectEditModalVisible}
        dataModalVisible={projectEditModalVisible}
      >
        <ProductData updateData={selectedProject} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default ProjectTable;
