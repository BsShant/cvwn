import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingReportStarts } from "../../store/resourceReducer/resourceStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import ReportData from "../reportData/reportData";
import "./styles.css";

const ReportTable = () => {
  let url = `${server}/report`;
  const dispatch = useDispatch();
  const report = useSelector((state) => state.resourceStore.report);
  const [ReportEditModalVisible, setReportEditModalVisible] = useState(false);
  const [selectedReport, setSelectedReport] = useState({});
  const tableItemEdit = (record) => {
    setSelectedReport(report.find((data) => data.id == record.id));
    setReportEditModalVisible(true);
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
        dispatch(fetchingReportStarts());
        message.success("Annual Report Deleted!");
      })
      .catch((error) => {
        message.error("Annual Report Deletion Failed!");
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
      <Table dataSource={report} columns={columns} />
      <DataInputModal
        setDataModalVisible={setReportEditModalVisible}
        dataModalVisible={ReportEditModalVisible}
      >
        <ReportData updateData={selectedReport} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default ReportTable;
