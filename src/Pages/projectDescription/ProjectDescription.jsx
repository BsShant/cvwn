import React, { useEffect, useState } from "react";

import "./styles.scss";
import { useParams } from "react-router-dom";
import { projectData } from "../../assets/dummyData/projectData";
import ProjectSlider from "../../Components/projectSlider/ProjectSlider";
import { useSelector } from "react-redux";

function ProjectDescription() {
  const { id } = useParams();
  const project = useSelector((state) => state.projectStore.project);
  const [myProject, setMyProject] = useState(null);
  useEffect(() => {
    setMyProject(project.find((pd) => pd.id == id));
  }, [project]);
  return (
    <div className="project-description-container">
      <div className="container">
        <div className="project-desc-inner">
          <div className="projectImgSection">
            <ProjectSlider
              images={myProject ? JSON.parse(myProject.image) : []}
            />
          </div>

          <h6>OUR PROJECTS</h6>

          <div className="projectSection">
            <div className="projectTitle">
              <h3> {myProject ? myProject.title : ""}</h3>
              <h4>
                {myProject ? myProject.duration : ""} (
                {myProject ? myProject.start : ""} to{" "}
                {myProject ? myProject.end : ""})
              </h4>
            </div>

            <div className="project-paragraph">
              {myProject ? myProject.para1 : ""}
            </div>
            {myProject && myProject.para2 ? (
              <div className="project-paragraph">
                {myProject ? myProject.para2 : ""}
              </div>
            ) : null}
            {myProject && myProject.para3 ? (
              <div className="project-paragraph">
                {myProject ? myProject.para3 : ""}
              </div>
            ) : null}
            {myProject && myProject.para4 ? (
              <div className="project-paragraph">
                {myProject ? myProject.para4 : ""}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDescription;
