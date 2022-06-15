import React from "react";
import ContactTable from "../../protectedComponents/contactTable/contactTable";
import ServiceLines from "../../protectedComponents/demo/ServiceLines";
import VisitorGraph from "../../protectedComponents/demo/VisitorGraph";
import VisitorsDoughnut from "../../protectedComponents/demo/VisitorsDoughnut";
import StatsCardsContainer from "../../protectedComponents/statsCardsContainer/StatsCardsContainer";
import SubscriberTable from "../../protectedComponents/subscriberTable/subscriberTable";
import { useNav } from "../../protectedComponents/UseNav/UseNav";
import Dashboard from "../dashboard/Dashboard";
import "./styles.css";
const SmallDashboard = () => {
  const dashboardRef = useNav("Dashboard");

  return (
    <div ref={dashboardRef} id="DashboardContainer">
      <div className="container">
        <StatsCardsContainer />
        <div className="row mt-2">
          <div className="col-lg-12 visitor-doughnut-stats-container">
            <Dashboard />
            {/* <div className="visitor-doughnut-stats-heading">Traffic Map</div> */}
          </div>

          {/* <div className="col-12 charts-box">
            <div className="row">
              <div className="col-lg-6 service-stats-container ">
                <ServiceLines />
                <div className="service-stats-heading mt-3">
                  Services Taken During This month
                </div>
              </div>
              <div className="col-lg-6 visitor-stats-container">
                <VisitorGraph />
                <div className="visitor-stats-heading mt-3">
                  Visitors This month
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-6 visitor-doughnut-stats-container">
            <VisitorsDoughnut />
            <div className="visitor-doughnut-stats-heading">
              Visitors From Devices
            </div>
          </div> */}
        </div>
        <div className="admin-sub-heading">Subscribers</div>
        <SubscriberTable />
      </div>
    </div>
  );
};

export default SmallDashboard;
