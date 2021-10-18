import React from 'react';
import '../styles/About.css';

class About extends React.Component {
  render() {
    return (
      <div className="about-container" id="sobre">
          <h1>Sobre</h1>
        <div className="about-sub-container">
          <div className="about-text-container">
            <p>Gabriel Costa Manoel é formado em Direito pela Universidade Católica de Santos (Unisantos), pós-graduando em Direito Público. Localizado em Guarujá/SP, mas com atuação em todo o território nacional, preza pelo atendimento personalizado, a fim de oferecer as melhores soluções para seus clientes, sempre pautado na transparência e ética profissional.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
