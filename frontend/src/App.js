// componente inicial da aplicação
import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

// sempre que for incluir um codigo javascript dentro dohtml usa {}
function App() {
  return (
    // colocando a logo no site
    <div className = "container">
      <img src={logo} alt = "AirCnC" />

      <div className = "content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>

        <form>
          <label htmlFor= "email">E-MAIL *c</label>
          <input 
            type="email" 
            id= "email" 
            placeholder="Seu melhor email" 
          />
          <button className= "btn"type= "submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
