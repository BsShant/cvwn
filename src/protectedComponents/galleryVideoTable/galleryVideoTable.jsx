import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingAboutStarts } from "../../store/aboutReducer/aboutStore.actions";
import { fetchingEventStarts } from "../../store/eventReducer/eventStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import EventData from "../eventData/eventData";
import EventMediaData from "../eventMediaData/eventMediaData";
import GalleryVideoData from "../galleryVideoData/galleryVideoData";
import "./styles.css";

const GalleryVideoTable = () => {
  let url = `${server}/galleryVideo`;
  const dispatch = useDispatch();
  const galleryVideo = useSelector((state) => state.aboutStore.galleryVideo)
  const [GalleryVideoEditModalVisible, setGalleryVideoEditModalVisible] = useState(false);
  const [selectedGalleryVideo, setSelectedGalleryVideo] = useState({});
  const tableItemEdit = (record) => {
    setSelectedGalleryVideo(galleryVideo.find((data) => data.id == record.id));
    setGalleryVideoEditModalVisible(true);
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
        dispatch(fetchingAboutStarts());
        message.success("Gallery Video Deleted!");
      })
      .catch((error) => {
        message.error("Gallery Video Deletion Failed!");
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
      <Table dataSource={galleryVideo} columns={columns} />
      <DataInputModal
        setDataModalVisible={setGalleryVideoEditModalVisible}
        dataModalVisible={GalleryVideoEditModalVisible}
      >
        <GalleryVideoData updateData={selectedGalleryVideo} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default GalleryVideoTable;
