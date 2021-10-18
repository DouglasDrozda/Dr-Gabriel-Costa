import React from 'react';
import '../styles/Footer.css';
import logoDouglas from '../images/logoDouglas.png'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <p>Desenvolvido por <a href="https://www.linkedin.com/in/douglasdrozda/" rel="noreferrer" target="_blank"><img src={logoDouglas} alt="logoDouglas" width="150px"/></a> | 2021</p>
      </div>
    );
  }
}

export default Footer;
