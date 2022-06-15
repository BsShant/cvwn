import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";
import { fetchingServiceStarts } from "../../store/serviceReducer/serviceStore.actions";
import store from "../../store/store";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import ServiceData from "../serviceData.jsx/ServiceData";
import "./styles.css";

const ServiceTable = () => {
  let url = `${server}/service`;
  const [serviceDataEditModalVisible, setServiceDataEditModalVisible] =
    useState(false);
  const dispatch = useDispatch();
  const service = useSelector(state=> state.serviceStore.service)
  const [selectedService, setSelectedService] = useState({});
  const editServiceEdit = (record) => {
    setSelectedService(service.find((data) => data.id == record.id));
    setServiceDataEditModalVisible(true);
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
        dispatch(fetchingServiceStarts());
        console.log("Deleteing service category success:", data);
        message.success("Service Category deleted!");
      })
      .catch((error) => {
        console.log("Deleteing service category failed: ", error);
        message.error("Service Category deletiopn failed!");
      });
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (text, record) => (
        <div className="category-table-name">{text.replaceAll("-", " ")}</div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Edit",
      key: "edit",
      render: (text, record) => (
        <button
          className="table-button"
          onClick={() => editServiceEdit(record)}
        >
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
      <Table dataSource={service} columns={columns} />
      <DataInputModal
        setDataModalVisible={setServiceDataEditModalVisible}
        dataModalVisible={serviceDataEditModalVisible}
      >
        <ServiceData serviceData={selectedService} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default ServiceTable;
