import React, { useState } from "react";
import DataInputModal from "../../protectedComponents/dataInputmodal/DataInputModal";
import { useNav } from "../../protectedComponents/UseNav/UseNav";

import { server } from "../../utils/fetch";
import "./styles.css";
import GalleryImageData from "../../protectedComponents/galleryImageData/galleryImageData";
import GalleryImageTable from "../../protectedComponents/galleryImageTable/galleryImageTable";
import GalleryVideoData from "../../protectedComponents/galleryVideoData/galleryVideoData";
import GalleryVideoTable from "../../protectedComponents/galleryVideoTable/galleryVideoTable";
const GalleryPage = () => {
  const galleryRef = useNav("Gallery");
  const [GalleryImageModalVisible, setGalleryImageModalVisible] =
    useState(false);
    const [GalleryVideoModalVisible, setGalleryVideoModalVisible] =
    useState(false);



  return (
    <div ref={galleryRef} id="GalleryContainer">
      <div className="container">
        <div className="admin-product-inner-section">
          <div className="admin-header">Gallery Page</div>
          <div className="admin-inner-section">
            <div className="admin-sub-heading">Gallery Image</div>
            <button
              className="choose-button"
              onClick={() => setGalleryImageModalVisible(true)}
            >
              Add Gallery Image
            </button>
            <DataInputModal
              setDataModalVisible={setGalleryImageModalVisible}
              dataModalVisible={GalleryImageModalVisible}
            >
              <GalleryImageData url={`${server}/galleryImage`} method="POST" />
            </DataInputModal>
            <GalleryImageTable />
          </div>

          <div className="admin-inner-section">
            <div className="admin-sub-heading">Gallery Video</div>
            <button
              className="choose-button"
              onClick={() => setGalleryVideoModalVisible(true)}
            >
              Add Gallery Video
            </button>
            <DataInputModal
              setDataModalVisible={setGalleryVideoModalVisible}
              dataModalVisible={GalleryVideoModalVisible}
            >
              <GalleryVideoData url={`${server}/galleryVideo`} method="POST" />
            </DataInputModal>
            <GalleryVideoTable />
          </div>

        
         
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
