import React from "react";
import { Link } from "react-router-dom";
import { server } from "../../utils/fetch";
import ProjectSlider from "../projectSlider/ProjectSlider";
import "./styles.scss";
const ProjectCardComponent = (props) => {
  const { project } = props;
  return (
    <div className="project-card">
      <Link to={`/projects/project-description/${project.id}`}>
        <div className="project-image">
          <img
            src={`${server}/${JSON.parse(project.image)[0]}`}
            alt="Project"
          />
        </div>
        <div className="project-texts">
          <div className="project-header">{project.title}</div>

          <div className="project-detail">{project.para1}</div>
        </div>
        <div className="project-bottom">
          <a class="main-btnn" href="/about">
            Learn More
          </a>
          {/* <div className="from">
            From: <span>{project.from}</span>
          </div>
          <div className="to">
            To: <span>{project.to}</span>
          </div> */}
        </div>
      </Link>
    </div>
  );
};

export default ProjectCardComponent;
