import React, { useState } from "react";
import DataInputModal from "../../protectedComponents/dataInputmodal/DataInputModal";
import LoanELigibilityData from "../../protectedComponents/loanEligibilityData/LoanEligibilityData";
import LoanEligibilityTable from "../../protectedComponents/loanEligibilityTable/LoanEligibilityTable";
import LoanFactorData from "../../protectedComponents/loanFactorData/LoanFactorData";
import LoanFactorTable from "../../protectedComponents/loanFactorTable/LoanFactorTable";
import LoanIntroData from "../../protectedComponents/loanIntroData/loanIntroData";
import LoanIntroTable from "../../protectedComponents/loanIntroTable/loanIntroTable";
import LoanTypeData from "../../protectedComponents/loanTypeData/LoanTypeData";
import LoanTypeTable from "../../protectedComponents/loanTypeTable/LoanTypeTable";
import ServiceCategoryData from "../../protectedComponents/serviceCategoryData/ServiceCategoryData";
import ServiceCategoryTable from "../../protectedComponents/serviceCategoryTable/ServiceCategoryTable";
import ServiceData from "../../protectedComponents/serviceData.jsx/ServiceData";
import ServiceTable from "../../protectedComponents/serviceTable/serviceTable";
import { useNav } from "../../protectedComponents/UseNav/UseNav";
import { server } from "../../utils/fetch";
import "./styles.css";
const ServicePage = () => {
  const serviceRef = useNav('Service');

  const [serviceDataModalVisible, setServiceDataModalVisible] = useState(false);
  const [serviceCategoryModalVisible, setServiceCategoryModalVisible] =
    useState(false);
  const [loanTypeModalVisible, setLoanTypeModalVisible] = useState(false);
  const [whatIsModalVisible, setWhatIsModalVisible] = useState(false);
  const [loanFactorsModalVisible, setloanFactorsModalVisible] = useState(false);
  const [loanElegibilityModalVisible, setloanElegibilityModalVisible] =
    useState(false);

  return (
    <div id="ServiceContainer" ref={serviceRef}>
      <div className="container">
        <div className="admin-service-inner-section">
          <div className="admin-header">Service Page</div>
          <div className="admin-inner-section">
          <div className="admin-sub-heading">Service Category</div>
            <button
              className="choose-button"
              onClick={() => setServiceCategoryModalVisible(true)}
            >
              Add Category
            </button>
            <DataInputModal
              setDataModalVisible={setServiceCategoryModalVisible}
              dataModalVisible={serviceCategoryModalVisible}
            >
              <ServiceCategoryData
                url={`${server}/serviceCategory`}
                method="POST"
              />
            </DataInputModal>
            <ServiceCategoryTable />
          </div>
          <div className="admin-inner-section">
          <div className="admin-sub-heading">Services</div>
            <button
              className="choose-button"
              onClick={() => setServiceDataModalVisible(true)}
            >
              Add Service
            </button>
            <DataInputModal
              setDataModalVisible={setServiceDataModalVisible}
              dataModalVisible={serviceDataModalVisible}
            >
              <ServiceData url={`${server}/service`} method="POST" />
            </DataInputModal>
            <ServiceTable />
          </div>
          <div className="admin-inner-section">
          <div className="admin-sub-heading">Loan Type</div>
            <button
              className="choose-button"
              onClick={() => setLoanTypeModalVisible(true)}
            >
              Add Loan Type
            </button>
            <DataInputModal
              setDataModalVisible={setLoanTypeModalVisible}
              dataModalVisible={loanTypeModalVisible}
            >
              <LoanTypeData url={`${server}/loanType`} method="POST" />
            </DataInputModal>
            <LoanTypeTable />
          </div>
          <div className="admin-inner-section">
          <div className="admin-sub-heading">Loan Intro</div>
            <button
              className="choose-button"
              onClick={() => setWhatIsModalVisible(true)}
            >
              Add Loan Intro
            </button>
            <DataInputModal
              setDataModalVisible={setWhatIsModalVisible}
              dataModalVisible={whatIsModalVisible}
            >
              <LoanIntroData url={`${server}/loanWhatIs`} method="POST" />
            </DataInputModal>
            <LoanIntroTable />
          </div>
          <div className="admin-inner-section">
          <div className="admin-sub-heading">Loan Factor</div>
            <button
              className="choose-button"
              onClick={() => setloanFactorsModalVisible(true)}
            >
              Add Loan Factor
            </button>
            <DataInputModal
              setDataModalVisible={setloanFactorsModalVisible}
              dataModalVisible={loanFactorsModalVisible}
            >
              <LoanFactorData url={`${server}/loanFactors`} method="POST" />
            </DataInputModal>
            <LoanFactorTable />
          </div>
          <div className="admin-inner-section">
          <div className="admin-sub-heading">Loan Eligibility</div>
            <button
              className="choose-button"
              onClick={() => setloanElegibilityModalVisible(true)}
            >
              Add Loan Eligibility
            </button>
            <DataInputModal
              setDataModalVisible={setloanElegibilityModalVisible}
              dataModalVisible={loanElegibilityModalVisible}
            >
              <LoanELigibilityData url={`${server}/loanEligibility`} method="POST" />
            </DataInputModal>
            <LoanEligibilityTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
