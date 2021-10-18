import React from 'react';
import '../styles/Contact.css';
import whatsapp from '../images/whatsapp.png'
import email from '../images/email.png'
import location from '../images/location.png'
import staticMap from '../images/staticMap.jpg'
import call from '../images/call.png'

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container" id="contato">
        <h1 id="contato">Contato</h1>
        <div className="contact-sub-container">
          <div className="contact-text-container">
            <div className="infos-container">
            <div className="contact-whats-container">
                <img src={call} alt="" width="42px" className="logo-whats" />
                <p>(13)3386-8126</p>
              </div>
              <div className="contact-whats-container">
                <a href="https://wa.me/5513997284883" target="_blank" rel="noreferrer" className="contact-whats-container">
                  <img src={whatsapp} alt="" width="42px" className="logo-whats" />
                  <p>(13)99728-4883</p>
                </a>
              </div>
              <div className="contact-whats-container">
                <img src={email} alt="" width="42px" className="logo-whats" />
                <p>gcmanoel@adv.oabsp.org.br</p>
              </div>
              <div className="contact-whats-container">
                <img src={location} alt="" width="42px" className="logo-whats" />
                <p>Avenida Antônio Miguel dos Santos, 112, sala 03, Santa Rosa - Guarujá/SP</p>
              </div>
            </div>
            <div class="contain-img-mapa">
              <a href="https://www.google.com/maps/place/Dr+Gabriel+Costa+Manoel+Advogado+Criminalista/@-23.9925583,-46.2798286,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce01c589ea4821:0x333f45296d6eec8c!8m2!3d-23.9925587!4d-46.2776373" target="_blank" rel="noreferrer" >
                <img src={staticMap} alt="mapa" class="mapa" width="100%" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
