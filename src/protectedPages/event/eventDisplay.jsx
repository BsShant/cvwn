import React, { useState } from "react";
import { Table, Modal, message } from "antd";
import { server } from "../../utils/fetch";
import { dataSource } from "./tableData";
import EventForm from "./eventForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { logoutProcessStarts } from "../../store/authStore/auth.action";
import { fetchingEventContentStarts } from "../../store/EventStore/EventAction";
// import { fetchingPublicationContentStarts } from "../../store/publicationStore/publication.action";

const EventDisplay = () => {
  const parsedToken = useSelector((state) => state.authStore.userToken);
  const ourTeam = useSelector((state) => state.ourTeamStore.ourTeam);
  const event = useSelector((state) => state.eventStore.event);

  console.log("event", event);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [record, setRecord] = useState("");

  const onDeleteItem = async (id) => {
    const key = "updatable";
    message.loading({ content: "Loading...", key });
    try {
      const res = await fetch(`${server}/ourCompany/company`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${parsedToken}`,
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.hasOwnProperty("user")) {
        message.error({ content: data.message, key, duration: 2 });
        return dispatch(logoutProcessStarts(data.user));
      }
      console.log(data);
      if (data) {
        message.success({ content: data.message, key, duration: 2 });
      }
      dispatch(fetchingEventsContentStarts());
    } catch (error) {
      console.log(error);
      message.error({ content: "The operation failed", key, duration: 2 });
    }
  };

  const showModal = (record) => {
    setRecord(record);
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  let column1, column2;

  const columns = [
    {
      title: "Event Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div>
          <div className="tableLarge">{record.name}</div>
          <div className="tableSmall">
            <div className="row tableSmallContainer">
              <div className="col-md-8">{record.name}</div>
            </div>
            <div className="row tableSmallContainer">
              <div className="col-6 col-sm-3">
                <a href={`${server}/${record.image}`} target="_blank">
                  {record.image}
                </a>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6 col-sm-3">
                <button
                  className="buttonTable"
                  onClick={() => showModal(record)}
                >
                  Edit
                </button>
              </div>
              <div className="col-6 col-sm-3">
                <button
                  className="buttonTable"
                  onClick={() => onDeleteItem(record.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Logo",
      dataIndex: "image",
      key: "image",

      render: (text, record) => (
        <a href={`${server}/${record.image}`} target="_blank">
          {record.image}
        </a>
      ),
      responsive: ["lg"],
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      responsive: ["lg"],
      defaultSortOrder:'ascend',
      sorter:(a,b)=> a.rank-b.rank
    },

    {
      title: "Edit",
      key: "edit",
      render: (text, record) => (
        <button className="buttonTable" onClick={() => showModal(record)}>
          Edit
        </button>
      ),
      responsive: ["lg"],
    },
    {
      title: "Delete",
      key: "delete",
      render: (text, record) => (
        <button className="buttonTable" onClick={() => onDeleteItem(record.id)}>
          Delete
        </button>
      ),
      responsive: ["lg"],
    },
  ];
  return (
    <div className="row" style={{ width: "100%" }}>
      <div className="col-md-12">
        <h3 style={{ margin: "30px auto 30px", paddingLeft: "15px" }}>
          Our Events
        </h3>
        <Table
          dataSource={ourCompany}
          columns={columns}
          pagination={{ position: ["bottomCenter"] }}
        />
       
        {isModalVisible ? (
          <Modal
            title=""
            width={"70%"}
            footer={null}
            header={null}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <EventForm
              title="Update Event"
              value={record}
              imageId="updatevent"
              method="PUT"
              setIsModalVisible={setIsModalVisible}

            />
          </Modal>
        ) : null}
      </div>
    </div>
  );
};
export default EventDisplay;
