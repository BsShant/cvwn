import React, { useState } from "react";
import DataInputModal from "../../protectedComponents/dataInputmodal/DataInputModal";
import { useNav } from "../../protectedComponents/UseNav/UseNav";

import { server } from "../../utils/fetch";
import "./styles.css";
import EventData from "../../protectedComponents/eventData/eventData";
import EventTable from "../../protectedComponents/eventTable/eventTable";
import CaseStudyTable from "../../protectedComponents/caseStudyTable/caseStudyTable";
import CaseStudyData from "../../protectedComponents/caseStudyData/caseStudyData";
import ArticleData from "../../protectedComponents/articleData/articleData";
import ArticleTable from "../../protectedComponents/articleTable/articleTable";
import ReportData from "../../protectedComponents/reportData/reportData";
import ReportTable from "../../protectedComponents/reportTable/reportTable";
const ResourcePage = () => {
  const eventRef = useNav("Resource");
  const [ReportModalVisible, setReportModalVisible] = useState(false);
  const [CaseModalVisible, setCaseModalVisible] = useState(false);
  const [articleModalVisible, setArticleModalVisible] = useState(false);

  return (
    <div ref={eventRef} id="ResourceContainer">
      <div className="container">
        <div className="admin-product-inner-section">
          <div className="admin-header">Resource Page</div>
          <div className="admin-inner-section">
            <div className="admin-sub-heading">Annual Report</div>

            <button
              className="choose-button"
              onClick={() => setReportModalVisible(true)}
            >
              Add Annual Report
            </button>
            <DataInputModal
              setDataModalVisible={setReportModalVisible}
              dataModalVisible={ReportModalVisible}
            >
              <ReportData url={`${server}/report`} method="POST" />
            </DataInputModal>
            <ReportTable />
          </div>
          <div className="admin-inner-section">
            <div className="admin-sub-heading">Article</div>

            <button
              className="choose-button"
              onClick={() => setArticleModalVisible(true)}
            >
              Add Article
            </button>
            <DataInputModal
              setDataModalVisible={setArticleModalVisible}
              dataModalVisible={articleModalVisible}
            >
              <ArticleData url={`${server}/article`} method="POST" />
            </DataInputModal>
            <ArticleTable />
          </div>
          <div className="admin-inner-section">
            <div className="admin-sub-heading">Case Study</div>

            <button
              className="choose-button"
              onClick={() => setCaseModalVisible(true)}
            >
              Add Case Study
            </button>
            <DataInputModal
              setDataModalVisible={setCaseModalVisible}
              dataModalVisible={CaseModalVisible}
            >
              <CaseStudyData url={`${server}/case`} method="POST" />
            </DataInputModal>
            <CaseStudyTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcePage;
