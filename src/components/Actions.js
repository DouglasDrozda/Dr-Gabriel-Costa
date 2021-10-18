import React from 'react';
import '../styles/Actions.css';

class Actions extends React.Component {
  render() {
    return (
      <div className="actions-container" id="sobre">
        <h1>Atuamos nas seguintes ações</h1>
        <div className="actions-sub-container">
          <div className="actions-text-container">
            <ul className="ul-1">
              <li>Usucapião judicial e extrajudicial</li>
              <li>Adjudicação compulsória</li>
              <li>Retificação de registros públicos</li>
              <li>Ação de rescisão contratual por vícios redibitórios</li>
              <li>Ação declaratória de nulidade</li>
            </ul>
            <div>
              <ul className="ul-2">
                <li>Ações possessórias :</li>
                <ul>
                  <li>Interdito Proibitório</li>
                  <li>Manutenção de posse</li>
                  <li>Reintegração de posse</li>
                  <li>Imissão na posse</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Actions;


/* - Usucapião judicial e extrajudicial
- Adjudicação compulsória 
- Ações possessórias:
 > Interdito Proibitório
 > Manutenção de posse
 > Reintegração de posse
 > Imissão na posse
- Retificação de registros públicos
- Ação de rescisão contratual por vícios redibitórios
- Ação declaratória de nulidade */


<ul>
  <li>test</li>
  <li>test</li>
</ul>