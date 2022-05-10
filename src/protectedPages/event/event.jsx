import React, { useEffect, useState } from "react";
import "./event.css";
import { Modal } from "antd";
import EventDisplay from "./eventDisplay";
import EventForm from "./eventForm";
import GoTOTop from "../../components/goToTop/goToTop";

const Event = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // useEffect(()=>{
  
  // },[])

  return (
    <div className="row adminPage">
      <div className="col-md-12 " style={{ marginBottom: "100px" }}>
        <h2>Our Events Page</h2>
      </div>
      <div className="col-md-12">
        <button onClick={showModal} className="buttonNormal">
          Add New Event
        </button>
      </div>

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
          setIsModalVisible={setIsModalVisible}
          title="Add new event"
          imageId="newevent"
          method="POST"
        />
      </Modal>
      <EventDisplay />
      <GoTOTop />
    </div>
  );
};

export default Event;
