import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";
import { fetchingTeamStarts } from "../../store/landingReducer/landingStore.actions";
import { fetchingProductsStarts } from "../../store/productReducer/productStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import LoanFactorData from "../loanFactorData/LoanFactorData";
import ProductData from "../productData/productData";
import "./styles.css";

const TeamTable = () => {
  let url = `${server}/team`;
  const dispatch = useDispatch();
  const team = useSelector(
    (state) => state.landingStore.team
  );
  const [teamEditModalVisible, setTeamEditModalVisible] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState({});
  const tableItemEdit = (record) => {
    setSelectedTeam(team.find((data) => data.id == record.id));
    setTeamEditModalVisible(true);
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
        dispatch(fetchingTeamStarts());
        console.log("Deleteing Team Success");
        message.success("Team Deleted!");
      })
      .catch((error) => {
        console.log("Deleteing Team Failed: ", error);
        message.error("Team Deletion Failed!");
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
      title: "Role",
      dataIndex: "role",
      key: "role",
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
      <Table dataSource={team} columns={columns} />
      <DataInputModal
        setDataModalVisible={setTeamEditModalVisible}
        dataModalVisible={teamEditModalVisible}
      >
        <ProductData updateData={selectedTeam} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default TeamTable;
