import { Tabs } from 'antd'
import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ImageGallery from './ImageGallery';
import './styles.scss'
import VideoGallery from './VideoGallery';
const Gallery = () => {
    const { TabPane } = Tabs;
    const galleryVideo = useSelector((state) => state.aboutStore.galleryVideo)

const [myGalleryKey, setMyGalleryKey] = useState('image')
const onChange = (key) => {
    setMyGalleryKey(key);
  };
  return (
    <div className='gallery-container'>
      <div className="container">

         <Tabs
        className=" gallery-slider-tab"
        activeKey={myGalleryKey}
        onChange={onChange}
      >
        <TabPane
          className=" gallery-slider-tab-body"
          tab={<div className="gallery-slider-tab-title">Image</div>}
          key="image"
        >
          <ImageGallery />
        </TabPane>

        <TabPane
          className="container gallery-slider-tab-body"
          tab={<div className="gallery-slider-tab-title">Video</div>}
          key="video"
        >
          <VideoGallery />
        </TabPane>
      </Tabs>
      </div>
    </div>
  )
}

export default Gallery