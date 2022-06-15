import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingAnnouncementStarts } from "../../store/getInvolvedReducer/getInvolvedStore.actions";
import { fetchingArticleStarts } from "../../store/resourceReducer/resourceStore.actions";
import { server } from "../../utils/fetch";
import AnnouncementData from "../announcementData/announcementData";
import ArticleData from "../articleData/articleData";
import DataInputModal from "../dataInputmodal/DataInputModal";
import "./styles.css";

const AnnouncementTable = () => {
  let url = `${server}/announcement`;
  const dispatch = useDispatch();
  const announcement = useSelector(
    (state) => state.getInvolvedStore.announcement
  );
  const [AnnouncementEditModalVisible, setAnnouncementEditModalVisible] =
    useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState({});
  const tableItemEdit = (record) => {
    setSelectedAnnouncement(announcement.find((data) => data.id == record.id));
    setAnnouncementEditModalVisible(true);
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
        dispatch(fetchingAnnouncementStarts());
        console.log("Deleteing Annopuncement Success");
        message.success("Annopuncement Deleted!");
      })
      .catch((error) => {
        console.log("Deleteing Annopuncement Failed: ", error);
        message.error("Annopuncement Deletion Failed!");
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
      title: "Detail",
      dataIndex: "detail",
      key: "detail",
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
      <Table dataSource={announcement} columns={columns} />
      <DataInputModal
        setDataModalVisible={setAnnouncementEditModalVisible}
        dataModalVisible={AnnouncementEditModalVisible}
      >
        <AnnouncementData
          updateData={selectedAnnouncement}
          url={url}
          method="PUT"
        />
      </DataInputModal>
    </div>
  );
};

export default AnnouncementTable;
