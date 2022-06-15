import React from "react";
import FooterAbout from "../../protectedComponents/footerAbout/FooterAbout";
import FooterContact from "../../protectedComponents/footerContact/FooterContact";
import FooterLinks from "../../protectedComponents/footerLinks/FooterLinks";

const FooterPage = () => {
  return (
    <div id="admin-footer-section" style={{marginBottom:"10px"}}>
      <div className="container">
        <div className="admin-landing-inner-section">
          <div className="admin-header">Footer Section</div>
          <FooterAbout />
          <FooterContact />
          <FooterLinks />
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
