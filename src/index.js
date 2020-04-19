/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div id="wrapper">
      <header class="main-header">
        {/* header */}

        <div class="container">
            <h1 class="main-header-logo">
             <img src="" alt="logo" class="grid-item"></img>
            </h1>
          <div id="menu-too" class="grid-item">
            <nav class="main-header-nav">
            <MenuList className="simple-menu">
              <MenuItem class="a">Pank</MenuItem>
              <MenuItem class="b">Finantsportaal</MenuItem>
              <MenuItem class="c">Investor</MenuItem>
            </MenuList>
            </nav>
          </div>
          <div>
          <nav class="right-menu-nav">
            <MenuList className="right-menu" class="grid-item">
              <MenuItem>Ava konto</MenuItem>
              <MenuItem>Sisene</MenuItem>
              <MenuItem>EN</MenuItem>
              <MenuItem>RU</MenuItem>
            </MenuList>
            </nav>
          </div>
        </div>
          <div>
          <nav class="sub-menu-nav">
            <MenuList className="nupud" class="grid-item">
              <MenuItem>ID-kaart</MenuItem>
              <MenuItem>Mobiil-ID</MenuItem>
              <MenuItem>Smart-ID</MenuItem>
              <MenuItem>PIN-kalkulaator</MenuItem>
              <MenuItem>Salasõna</MenuItem>
              <form action=" " class="searchform_control">
                <input type="text" class="searchform__control" placeholder="Kasutajannimi"></input>
                <button>Sisene</button>
              </form>             
            </MenuList>
            </nav>
          </div>
        
      </header>

      {/*body */}
      <body>
      <div id="pleier">
      <div class="slideshow-container">

      <div id="myCarousel" class="carousel slide">
      
        <ol class="carousel-indicators">
          <li class="item1 active"></li>
          <li class="item2"></li>
          <li class="item3"></li>
        </ol>

        <div class="carousel-inner" role="listbox">

  
            <div class="item active">
              <img src="https://via.placeholder.com/300x150" alt="" style={{width: "50%"}}></img>
            </div>

            <div class="item">
              <img src="https://via.placeholder.com/300x150" alt="" style={{width: "50%"}}></img>
              
            </div>

            <div class="item">
              <img src="https://via.placeholder.com/300x150" alt="" style={{width: "50%"}}></img>
              
            </div>

            </div>  
            
          </div>
          
          <div style={{text_center:"center"}}>
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
          </div>
          
         
        </div>

        <div id="kolumnid">
          {/*CSS gridiga 3 kolumni */}
        </div>
        </div>
        
      </body>

      {/*footer */}
      <footer>
        <div id="footeri-kolumnid">
          {/*CSS gridiga 4 kolumni 
        Tule kliendiks
        Leia kiirelt
        LHV
        Kontakt
        */}
        </div>
        <div id="logod">
          {/*Paremal: insta, FB, Youtube, SoundCloud
          Vasakul: App Store, Google Play */}
        </div>
        <div id="copyright-text">
          <p>© 2001–2020 AS LHV Group, Tartu mnt 2, 10145, Tallinn. Oled finantsteenuseid pakkuvate ettevõtete AS LHV Pank, AS LHV Finance ja AS LHV Varahaldus veebilehel. Ettevõtetel AS LHV Pank, AS LHV Finance ja AS LHV Varahaldus on õigus salvestada kõiki neile sidevahendite teel antud korraldusi ja muud suhtlust ning kasutada vastavaid salvestisi antud korralduste või muude toimingute tõendamiseks. Enne finantsteenuse lepingu sõlmimist tutvu teenuse tingimustega või küsi lisainfot. Veebilehte ja sellel sisalduvat informatsiooni kasutades nõustud eeltoodud tingimuste ja veebilehe kasutustingimustega. Noteeringud on viivitusega.</p>
        </div>
        <div id="chat-bubble">
          {/*fixed, sõidab lehega kaasa */}
        </div>
      </footer>
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
