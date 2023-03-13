import React from 'react'
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di';
import '../styles/components/tecnologias.sass'

const tecnologias = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
];

const TecnologiasContainer = () => {
  return (
    <section id='tecnologias-container'>
      <h2>Tecnologias</h2>
      <div className="tecnologias-grid">
        {tecnologias.map((tech) => (
          <div className="tecnologias-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='tecnologias-info'>
              <h3>{tech.name}</h3>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TecnologiasContainer