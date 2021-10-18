import React, { useEffect } from 'react';
import '../styles/Apresentation.css';
import animateScroll from '../functions/scrollReveal';
import whatsapp from '../images/whatsapp.png'

function Apresentation() {

  useEffect(() => {
    animateScroll()
  }, []);

  return (
    <section className="apresentation-container" id="home">
      <div className="apresentation-sub-container">
        <div className="apresentation-title-container">
          <div className="apresentation-title">
            <h1>Advogado especializado em Direito Imobiliário</h1>
            <a href="https://wa.me/5513997284883/?text=Olá,%20estou%20precisando%20de%20um%20advogado%20especialista%20em%20Direito%20Imobiliário.%20
            " target="_blank" rel="noreferrer">
              <button type="button" className="enter-contact"><img src={whatsapp} alt="" width="36px" className="logo-whats" />Fale com um Advogado agora no WhatsApp</button>
            </a>
            <h3>Guarujá - SP</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Apresentation;
