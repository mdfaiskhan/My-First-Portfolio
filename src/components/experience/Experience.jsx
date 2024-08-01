import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaNodeJs, 
  FaBootstrap, 
  FaAngular, 
  FaJava, 
  FaPython, 
  FaDatabase 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiDjango, 
  SiMongodb, 
  SiTypescript, 
  SiPrisma 
} from 'react-icons/si';
import { 
  GrDocker, 
  GrGithub 
} from 'react-icons/gr';
import { 
  DiPostgresql 
} from 'react-icons/di';
import { FaAws } from "react-icons/fa";

import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience__container">
        <div className="experience__box">
          <h2>Skills</h2>
          <div className="experience__skills">
            {/* Reordered skills with Java and Python at the top */}
            <div className="experience__skill">
              <FaJava className="experience__skill-icon java-icon" />
              <h4>SpringBoot</h4>
            </div>
            <div className="experience__skill">
              <FaPython className="experience__skill-icon python-icon" />
              <h4>Python</h4>
            </div>
            <div className="experience__skill">
              <FaHtml5 className="experience__skill-icon html-icon" />
              <h4>HTML</h4>
            </div>
            <div className="experience__skill">
              <FaCss3Alt className="experience__skill-icon css-icon" />
              <h4>CSS</h4>
            </div>
            <div className="experience__skill">
              <SiTailwindcss className="experience__skill-icon tailwind-icon" />
              <h4>Tailwind CSS</h4>
            </div>
            <div className="experience__skill">
              <FaBootstrap className="experience__skill-icon bootstrap-icon" />
              <h4>Bootstrap</h4>
            </div>
            <div className="experience__skill">
              <FaJsSquare className="experience__skill-icon js-icon" />
              <h4>JavaScript</h4>
            </div>
            <div className="experience__skill">
              <SiTypescript className="experience__skill-icon typescript-icon" />
              <h4>TypeScript</h4>
            </div>
            <div className="experience__skill">
              <FaReact className="experience__skill-icon react-icon" />
              <h4>React.js</h4>
            </div>
            <div className="experience__skill">
              <FaAngular className="experience__skill-icon angular-icon" />
              <h4>Angular</h4>
            </div>
            <div className="experience__skill">
              <FaNodeJs className="experience__skill-icon node-icon" />
              <h4>Node.js</h4>
            </div>
            <div className="experience__skill">
              <SiDjango className="experience__skill-icon django-icon" />
              <h4>Django</h4>
            </div>
            <div className="experience__skill">
              <SiMongodb className="experience__skill-icon mongodb-icon" />
              <h4>MongoDB</h4>
            </div>
            <div className="experience__skill">
              <DiPostgresql className="experience__skill-icon postgresql-icon" />
              <h4>PostgreSQL</h4>
            </div>
            <div className="experience__skill">
              <SiPrisma className="experience__skill-icon prisma-icon" />
              <h4>Prisma ORM</h4>
            </div>
            <div className="experience__skill">
              <FaAws className="experience__skill-icon aws-icon" />
              <h4>AWS</h4>
            </div>
            <div className="experience__skill">
              <GrDocker className="experience__skill-icon docker-icon" />
              <h4>Docker</h4>
            </div>
            <div className="experience__skill">
              <GrGithub className="experience__skill-icon github-icon" />
              <h4>GitHub</h4>
            </div>
            <div className="experience__skill">
              <FaDatabase className="experience__skill-icon sql-icon" />
              <h4>SQL</h4>
            </div>
            <div className="experience__skill">
              <div className="experience__skill-icon cloudflare-icon" style={{fontSize: '1.5rem', color: '#F7F7F7'}}>
                {/* Placeholder for Cloudflare icon */}
              </div>
              <h4>Cloudflare</h4>
            </div>
            <div className="experience__skill">
              <div className="experience__skill-icon figma-icon" style={{fontSize: '1.5rem', color: '#F24E1E'}}>
                {/* Placeholder for Figma icon */}
              </div>
              <h4>Figma</h4>
            </div>
            <div className="experience__skill">
              <div className="experience__skill-icon canva-icon" style={{fontSize: '1.5rem', color: '#00C4CC'}}>
                {/* Placeholder for Canva icon */}
              </div>
              <h4>Canva</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;




