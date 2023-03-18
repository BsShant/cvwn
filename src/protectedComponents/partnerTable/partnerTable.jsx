import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingVolunteerStarts } from "../../store/getInvolvedReducer/getInvolvedStore.actions";
import { fetchingPartnerStarts } from "../../store/landingReducer/landingStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import PartnerData from "../partnersData/partnersData";
import VolunteerData from "../volunteerData/volunteerData";
import "./styles.css";

const PartnerTable = () => {
  let url = `${server}/partner`;
  const dispatch = useDispatch();
  const partner = useSelector((state) => state.landingStore.partner);
  const [PartnerEditModalVisible, setPartnerEditModalVisible] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState({});
  const tableItemEdit = (record) => {
    setSelectedPartner(partner.find((data) => data.id == record.id));
    setPartnerEditModalVisible(true);
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
        message.success("Partner Deleted!");
      })
      .catch((error) => {
        message.error("Partner Deletion Failed!");
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
      <Table dataSource={partner} columns={columns} />
      <DataInputModal
        setDataModalVisible={setPartnerEditModalVisible}
        dataModalVisible={PartnerEditModalVisible}
      >
        <PartnerData updateData={selectedPartner} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default PartnerTable;
