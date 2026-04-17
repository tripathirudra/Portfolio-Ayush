import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Certification </h4>
                <h5>IIIT-Prayagraj</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Gained hands-on experience in core Java concepts, enhancing technical proficiency and programming logic
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Accel Infotech Private Limited</h5>
              </div>
              <h3>Dec 2025 - Feb 2026</h3>
            </div>
            <p>
              Successfully completed a three-month internship in the IT Department from December 2025 to February 2026.
              Demonstrated strong professionalism and a dedication to learning within a corporate IT environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
