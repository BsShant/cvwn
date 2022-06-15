import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import ServiceCategoryData from "../serviceCategoryData/ServiceCategoryData";
import ServiceData from "../serviceData.jsx/ServiceData";
import "./styles.css";

const ServiceCategoryTable = () => {
  let url = `${server}/serviceCategory`;
  const dispatch = useDispatch();
  const serviceCategory = useSelector(
    (state) => state.categoryStore.serviceCategory
  );
  const [serviceCategoryEditModalVisible, setServiceCategoryEditModalVisible] =
    useState(false);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState({});
  const editServiceEdit = (record) => {
    setSelectedServiceCategory(
      serviceCategory.find((data) => data.id == record.id)
    );
    setServiceCategoryEditModalVisible(true);
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
        dispatch(fetchingServiceCategoryStarts());
        console.log("Deleteing service category success");
        message.success("Service Category deleted!");
      })
      .catch((error) => {
        dispatch(fetchingServiceCategoryStarts());
        console.log("Deleteing service category failed: ", error);
        message.error("Service Category deletiopn failed!");
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
      <Table dataSource={serviceCategory} columns={columns} />
      <DataInputModal
        setDataModalVisible={setServiceCategoryEditModalVisible}
        dataModalVisible={serviceCategoryEditModalVisible}
      >
        <ServiceCategoryData
          ServiceCategoryData={selectedServiceCategory}
          url={url}
          method="PUT"
        />
      </DataInputModal>
    </div>
  );
};

export default ServiceCategoryTable;
