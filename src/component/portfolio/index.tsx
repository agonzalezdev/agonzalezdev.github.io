import React from "react"
import CVImg from "../../img/cv_img.jpg"
import { ResumeCV } from "./styles"
import { PortfolioSection, PortfolioPersonalData } from "./data"


const PortfolioComponent = () => {
  return (
    <ResumeCV
      className="cv"
      personalData={PortfolioPersonalData({ CVImg })}
      sections={PortfolioSection}
      branding={false}
    />
  );
}

export default PortfolioComponent;