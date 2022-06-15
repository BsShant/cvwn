import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
const ProjectCard = (props) => {
  const { title, image, id } = props;
  return (
    <div className="project-card-box">
      <Link to={`/projects/project-description/${id}`}>
        <div className="project-card-container">
          <img src={image} alt="project image" />
          <div className="project-txt">{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
