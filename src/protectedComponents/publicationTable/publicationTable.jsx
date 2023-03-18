import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingVolunteerStarts } from "../../store/getInvolvedReducer/getInvolvedStore.actions";
import { fetchingPartnerStarts, fetchingPublicationStarts } from "../../store/landingReducer/landingStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import PublicationData from "../publicationData/publicationData";
import VolunteerData from "../volunteerData/volunteerData";
import "./styles.css";

const PublicationTable = () => {
  let url = `${server}/publication`;
  const dispatch = useDispatch();
  const Publication = useSelector((state) => state.landingStore.publication);
  const [PublicationEditModalVisible, setPublicationEditModalVisible] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState({});
  const tableItemEdit = (record) => {
    setSelectedPublication(Publication.find((data) => data.id == record.id));
    setPublicationEditModalVisible(true);
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
        dispatch(fetchingPartnerStarts());
        message.success("Publication Deleted!");
      })
      .catch((error) => {
        message.error("Publication Deletion Failed!");
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
      title: "Link",
      dataIndex: "link",
      key: "link",
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
      <Table dataSource={Publication} columns={columns} />
      <DataInputModal
        setDataModalVisible={setPublicationEditModalVisible}
        dataModalVisible={PublicationEditModalVisible}
      >
        <PublicationData updateData={selectedPublication} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default PublicationTable;
