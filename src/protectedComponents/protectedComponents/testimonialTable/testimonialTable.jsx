import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingTestimonialStarts } from "../../store/landingReducer/landingStore.actions";
import { fetchingProductsStarts } from "../../store/productReducer/productStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import ProductData from "../productData/productData";
import TestimonialData from "../testimonialData/testimonialData";
import "./styles.css";

const TestimonialTable = () => {
  let url = `${server}/testimonial`;
  const dispatch = useDispatch();
  const testimonial = useSelector((state) => state.landingStore.testimonial);
  const [testimonialEditModalVisible, setTestimonialEditModalVisible] =
    useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState({});
  const tableItemEdit = (record) => {
    setSelectedTestimonial(testimonial.find((data) => data.id == record.id));
    setTestimonialEditModalVisible(true);
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
        dispatch(fetchingTestimonialStarts());
        console.log("Deleteing Testimonial Success");
        message.success("Testimonial Deleted!");
      })
      .catch((error) => {
        console.log("Deleteing Testimonial Failed: ", error);
        message.error("Testimonial Deletion Failed!");
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
      title: "Role",
      dataIndex: "role",
      key: "role",
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
      <Table dataSource={testimonial} columns={columns} />
      <DataInputModal
        setDataModalVisible={setTestimonialEditModalVisible}
        dataModalVisible={testimonialEditModalVisible}
      >
        <TestimonialData
          updateData={selectedTestimonial}
          url={url}
          method="PUT"
        />
      </DataInputModal>
    </div>
  );
};

export default TestimonialTable;
