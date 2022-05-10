import React, { useEffect, useState } from "react";
import "./cover.css";
import { Modal } from "antd";
import CoverForm from "./coverForm";
import GoTOTop from "../../components/goToTop/goToTop";
import CoverDisplay from "./coverDisplay";

const Cover = () => {
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
        <h2>Our Cover Page</h2>
      </div>
      <div className="col-md-12">
        <button onClick={showModal} className="buttonNormal">
          Add New Cover
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
        <CoverForm
          setIsModalVisible={setIsModalVisible}
          title="Add new cover"
          imageId="newCover"
          method="POST"
        />
      </Modal>
      <CoverDisplay />
      <GoTOTop />
    </div>
  );
};

export default Cover;
