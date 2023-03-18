import React, { useEffect, useState } from "react";
import ProtectedHeader from "../../protectedComponents/header/ProtectedHeader";
import {
  AnalyticsDashboard,
  SessionsByDeviceCategoryChart,
  SessionsBySourceChart,
  LineChart,
  TableChart,
} from "react-analytics-charts";
// Over ten different commonly used charts are available
import "./styles.css";
import { SessionsByDateChart, SessionsGeoChart } from "react-analytics-charts";

const Dashboard = () => {
  const [myView, setViewId] = React.useState("ga:269103465");
  return (
    <div>
      <div className="nos">
        <AnalyticsDashboard
          authOptions={{
            clientId:
              "836305785268-kvgn4buc52pdgejr98udrqn3snj2md89.apps.googleusercontent.com",
          }}
          viewId={myView}
          renderCharts={(gapi, viewId) => {
            return (
              <div className="row">
                <div
                  className="col-lg-12"
                  style={{
                    background: "#f2f2f2",
                    borderRadius: "20px",
                    marginBottom: "30px",
                    height: "450px",
                  }}
                >
                  <SessionsGeoChart
                    style={{ width: "100%" }}
                    gapi={gapi}
                    viewId={viewId}
                    showPageViews
                    className="geo-chart"
                  />
                </div>
                <div
                  className="col-lg-12"
                  style={{
                    marginBottom: "30px",
                    background: "#f2f2f2",
                    borderRadius: "20px",
                  }}
                >
                  <div className="row" style={{ padding: "40px 40px" }}>
                    <div className="col-md-6">
                      <SessionsByDeviceCategoryChart
                        gapi={gapi}
                        viewId={viewId}
                        days={28}
                      />
                    </div>
                    <div className="col-md-6">
                      <SessionsBySourceChart
                        gapi={gapi}
                        viewId={viewId}
                        days={28}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <TableChart
                        gapi={gapi}
                        query={{
                          ids: viewId,
                          "start-date": "28daysAgo",
                          "end-date": "today",
                          metrics: "ga:pageviews",
                          dimensions: "ga:pagePath",
                        }}
                        container="pageviews-per-path-chart"
                        options={{
                          sortAscending: false,
                          sortColumn: 1,
                          page: 'enable',
                          pageSize: 5
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <LineChart
                        gapi={gapi}
                        query={{
                          ids: viewId,
                          "start-date": "14daysAgo",
                          "end-date": "today",
                          metrics: "ga:sessions",
                          dimensions: "ga:date",
                        }}
                        container="sessions-by-date-chart"
                        options={{
                          title: `Sessions (14 Days)`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
