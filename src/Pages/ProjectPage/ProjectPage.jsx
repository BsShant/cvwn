import React from "react";
import { useSelector } from "react-redux";
import { projectData } from "../../assets/dummyData/projectData";
import ProjectCardComponent from "../../Components/projectCard/ProjectCard";
import "./styles.scss";
const ProjectPage = () => {
    const project = useSelector((state) => state.projectStore.project);

  return (
    <div className="project-page-container">
      <div className="container">
        <div className="project-page-inner-container">
          <div className="row">
            <div className="project-page-heading">Our Projects</div>
          </div>
          <div className="row">
            {project.map((data, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <ProjectCardComponent project={data} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
