import React from "react";
import { Row, Col } from "react-bootstrap";
import Pdf from "../../assets/SCT_Resume.pdf";
// import resumedownload from '../../index'

function Resume() {
 
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Framework (Bootstrap, Materalize)",
    "Responsive Web Design",
    "Templating language (Handlebars)",
  ];

  const renderFrontEndSkills = (frontendSkillsArray) => {
    return frontendSkillsArray.map((frontendSkill) => {
      return <li>{frontendSkill}</li>;
    });
  };


  const backendSkills = [
    "Node.js",
    "Express.js",
    "MySQL (mysql lite3, mysql2)",
    "NoSQL (MongoDB, Mongoose)",
    "API's (web, third-party, RESTful, server-side)",
  ];


  const renderBackEndSkills = (backendSkillsArray) => {
    return backendSkillsArray.map((backendSkill) => {
        return <li>{backendSkill}</li>
    })
  }

  return (
    <>
      <h1 className="resume">RESUME</h1>
      <div className="resume-intro">
        <Row>
          <Col lg={8} md={12}>
            Full Stack Software Engineer who possesses technical skills within the
            MERN stack. Always continuously learning and trying to do better.
          </Col>
        </Row>
      </div>

      <div className="resume-container">
        <Row>
          <Col lg={4} md={12}>
            <h2 className="resume">FRONT END PROFICIENCIES</h2>
            <ul>{renderFrontEndSkills(frontendSkills)}</ul>
          </Col>

          <Col lg={4} md={12}>
            <h2 className="resume">BACK END PROFICIENCIES</h2>
            <ul>
              {renderBackEndSkills(backendSkills)}
            </ul>
          </Col>
        </Row>
        <p>
          <a
            id="click-here"
            className="resume-download"
            href={Pdf}
            target="_blank"
            rel="noreferrer"
            download
          >
            Click Here To Download Resume
          </a>
        </p>
      </div>
    </>
  );
}

export default Resume;
