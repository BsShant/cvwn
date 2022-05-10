import React, { useEffect, useState } from "react";
import "./project.css";
import { Modal } from "antd";
import ProjectForm from "./projectForm";
import GoTOTop from "../../components/goToTop/goToTop";
import ProjectDisplay from "./projectDisplay";

const Project = () => {
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
        <h2>Our Project Page</h2>
      </div>
      <div className="col-md-12">
        <button onClick={showModal} className="buttonNormal">
          Add New Project
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
        <ProjectForm
          setIsModalVisible={setIsModalVisible}
          title="Add new project"
          imageId="newProject"
          method="POST"
        />
      </Modal>
      <ProjectDisplay />
      <GoTOTop />
    </div>
  );
};

export default Project;
