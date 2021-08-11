import PortfolioComponent from "../portfolio";
const template = require("../../resume.html");

const CvData = {
    id: 'cv',
    lightBg: false,
    ligthText: false,
    topLine: 'CV',
    headLine: 'Currículum detallado',
    description: 'Currículum con todos los datos personales y laborales',
    imgStart: false,
    alt: 'cv',
    primary: false,
    darkText: false,
    children: (<>
        <iframe src={template}></iframe>
        {/* <PortfolioComponent /> */}
    </>)
}

export default CvData;