import React, { useEffect, useState } from "react";
import "./aboutUs.css";
import { Modal } from "antd";
import AboutUsDisplay from "./aboutUsDisplay";
import AboutUsForm from "./aboutUsForm";
import GoTOTop from "../../components/goToTop/goToTop";
import AboutUsDisplay from "./aboutUsDisplay";

const aboutUs = () => {
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
        <h2>About Us Page</h2>
      </div>
      <div className="col-md-12">
        <button onClick={showModal} className="buttonNormal">
          Add About Us
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
        <AboutUsForm
          setIsModalVisible={setIsModalVisible}
          title="Add new data on about us"
          imageId="aboutUs"
          method="POST"
        />
      </Modal>
      <AboutUsDisplay />
      <GoTOTop />
    </div>
  );
};

export default aboutUs;
