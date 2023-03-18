import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingAboutStarts } from "../../store/aboutReducer/aboutStore.actions";
import { fetchingEventStarts } from "../../store/eventReducer/eventStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import EventData from "../eventData/eventData";
import EventMediaData from "../eventMediaData/eventMediaData";
import GalleryImageData from "../galleryImageData/galleryImageData";
import "./styles.css";

const GalleryImageTable = () => {
  let url = `${server}/galleryImage`;
  const dispatch = useDispatch();
  const galleryImage = useSelector((state) => state.aboutStore.galleryImage)
  const [GalleryImageEditModalVisible, setGalleryImageEditModalVisible] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState({});
  const tableItemEdit = (record) => {
    setSelectedGalleryImage(galleryImage.find((data) => data.id == record.id));
    setGalleryImageEditModalVisible(true);
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
        message.success("Gallery Image Deleted!");
      })
      .catch((error) => {
        message.error("Gallery Image Deletion Failed!");
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
      <Table dataSource={galleryImage} columns={columns} />
      <DataInputModal
        setDataModalVisible={setGalleryImageEditModalVisible}
        dataModalVisible={GalleryImageEditModalVisible}
      >
        <GalleryImageData updateData={selectedGalleryImage} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default GalleryImageTable;
