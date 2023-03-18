import React from "react";
import "./main-content.styles.scss";
import Project1 from "../../assets/project-1.JPG";
import Project4 from "../../assets/project-4.jpg";
import Project3 from "../../assets/project-3.jpg";
import Project2 from "../../assets/project-2.JPG";
import { Link } from "react-router-dom";
import ProjectCard from "../ProjectCardHome/ProjectCard";
import { projectData } from "../../assets/dummyData/projectData";
import { server } from "../../utils/fetch";
import { useSelector } from "react-redux";

export default function MainContent() {
  const project = useSelector((state) => state.projectStore.project);

  return (
    <div className="landing-projects">
      <div className="container">
        <div className="mainContent">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Our Projects</h2>
              <div className="row">
                {project
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .slice(0, 2)
                  .map((pro, index) => {
                    return (
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <ProjectCard
                          title={pro.title}
                          image={`${server}/${JSON.parse(pro.image)[0]}`}
                          id={pro.id}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
