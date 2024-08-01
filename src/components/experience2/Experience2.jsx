import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience2.css'; // New CSS file for Experience2 component

const Experience2 = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <h2>EXPERIENCE</h2>
        <div className="experience__content">
          {/* PayRup Internship */}
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div className="experience__details-text">
              <h4>Software Engineer Intern @ PayRup</h4>
              <p className="experience__details-date">Feb 2024 – Present · 7 mos</p>
              <p className="experience__details-location">Bengaluru, Karnataka, India · On-site</p>
              
            </div>
          </article>

          {/* Pinwheel Robotics AI Intern */}
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div className="experience__details-text">
              <h4>AI Intern @ Pinwheel Robotics</h4>
              <p className="experience__details-date">Sep 2022 – Nov 2022 · 3 mos</p>
              <p className="experience__details-location">Bengaluru, Karnataka, India · Remote</p>
              
            </div>
          </article>

          {/* ICSolutions Full Stack Developer Intern */}
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div className="experience__details-text">
              <h4>Full Stack Developer Intern @ ICSolutions</h4>
              <p className="experience__details-date">Aug 2022 – Sep 2022 · 2 mos</p>
              <p className="experience__details-location">Bengaluru, Karnataka, India · Remote</p>
              
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience2;




