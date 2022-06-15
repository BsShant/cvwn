import React, { useState } from "react";
import DataInputModal from "../../protectedComponents/dataInputmodal/DataInputModal";
import ProductData from "../../protectedComponents/projectData/projectData";
import { useNav } from "../../protectedComponents/UseNav/UseNav";

import { server } from "../../utils/fetch";
import "./styles.css";
import ProjectTable from "../../protectedComponents/projectTable/ProjectTable";
const ProjectPage = () => {
  const projectRef = useNav('Project');

  const [projectModalVisible, setProjectModalVisible] = useState(false);

  return (
    <div ref={projectRef} id="ProjectContainer">
      <div className="container">
        <div className="admin-product-inner-section">
          <div className="admin-header">Project Page</div>
          <div className="admin-inner-section">
            <button
              className="choose-button"
              onClick={() => setProjectModalVisible(true)}
            >
              Add Project
            </button>
            <DataInputModal
              setDataModalVisible={setProjectModalVisible}
              dataModalVisible={projectModalVisible}
            >
              <ProductData url={`${server}/project`} method="POST" />
            </DataInputModal>
            <ProjectTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
