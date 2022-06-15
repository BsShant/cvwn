import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";
import { fetchingFundRaiserStarts } from "../../store/fundRaiserReducer/fundRaiserStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import FundRaiserData from "../fundRaiserData/fundRaiserData";
import LoanELigibilityData from "../loanEligibilityData/LoanEligibilityData";
import LoanFactorData from "../loanFactorData/LoanFactorData";
import "./styles.css";

const FundRaiserTable = () => {
  let url = `${server}/fundRaiser`;
  const dispatch = useDispatch();
  const fundRaiser = useSelector(
    (state) => state.fundRaiserStore.fundRaiser
  );
  const [fundRaiserEditModalVisible, setFundRaiserEditModalVisible] =
    useState(false);
  const [selectedFundRaiser, setSelectedFundRaiser] = useState({});
  const tableItemEdit = (record) => {
    setSelectedFundRaiser(
      fundRaiser.find((data) => data.id == record.id)
    );
    setFundRaiserEditModalVisible(true);
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
        dispatch(fetchingFundRaiserStarts());
        console.log("Deleteing Fund Raiser Success");
        message.success("Fund Raiser Deleted!");
      })
      .catch((error) => {
        console.log("Deleteing Fund Raiser Failed: ", error);
        message.error("Fund Raiser Deletion Failed!");
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
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Projected",
      dataIndex: "projected",
      key: "projected",
    },
    {
      title: "Raised",
      dataIndex: "raised",
      key: "raised",
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
      <Table dataSource={fundRaiser} columns={columns} />
      <DataInputModal
        setDataModalVisible={setFundRaiserEditModalVisible}
        dataModalVisible={fundRaiserEditModalVisible}
      >
        <FundRaiserData
          updateData={selectedFundRaiser}
          url={url}
          method="PUT"
        />
      </DataInputModal>
    </div>
  );
};

export default FundRaiserTable;
