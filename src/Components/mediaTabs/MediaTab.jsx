import React from "react";
import { Tabs } from "antd";
import PhotoTab from "./PhotoTab";
import VideoTab from "./VideoTab";
import './photo.css'
import './tab.css'
const { TabPane } = Tabs;

const onChange = (key) => {
  ""
};

const MediaTab = (props) => (
  <Tabs className="media-tab" defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="Photos" key="1">
      <PhotoTab myEvent={props.myEvent} />
    </TabPane>
    <TabPane tab="Videos" key="2">
      <VideoTab myEvent={props.myEvent}/>
    </TabPane>
  </Tabs>
);

export default MediaTab;
