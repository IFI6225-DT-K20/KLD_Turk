/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import './index.scss';
import * as serviceWorker from './serviceWorker';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const tileData = [{ 
  title : 'LHV Jalgpallikaardiga kogutud toetuste esimene osa jõuab klubideni maikuus' ,
  content: 'Koroonaviiruse mõjutustest ei ole pääsenud ka spordimaailm, seetõttu otsustas LHV Eesti jalgpalli peatoetajana maksta tänavused Jalgpallikaardi toetused välja kahes osas. Esimese perioodiga koguti toetusi üle 36 000 euro.',
  link: 1
},
{
  title: 'Nüüd saab lapsele konto avada mugavalt LHV mobiiliäpis',
  content: 'Aasta alguses teatas LHV võimalusest avada lapsele konto kodust lahkumata internetipangas. Nüüd on see lapsevanemale veelgi mugavam – lapsele saab konto avada ka meie mobiiliäpis.',
  link: "/et/2"
},
{
  title: 'Kuula LHV Podcasti',
  content: 'Sander & Sander koroonakriisi mõjust Balti ettevõtetele' ,
  link: 2 
}];

const footerMenu = [{
  title: "Tule Kliendiks",
  links: ["Eraklient", "Äriklient"]
},
{
  title: "Leia kiirelt",
  links: ["Eraklient", "Äriklient"]
},
{
  title: "LHV",
  links: ["Eraklient", "Äriklient"]
},
{
  title: "kontakt",
  links: ["Eraklient", "Äriklient"]
}];

ReactDOM.render(
  <React.StrictMode>
    <div id="wrapper">
      <header class="main-header">
        {/* header */}

        <div class="container header-wide">
            <h1 class="main-header-logo left-menu">
             <img src="" alt="logo" class="grid-item"></img>
            </h1>
          <div id="menu-too" class="grid-item left-menu">
            <nav class="main-header-nav">
            <MenuList className="simple-menu top-menu">
              <MenuItem classes={{root: 'menu-item', hover: 'menu-hover'}}>Pank</MenuItem>
              <MenuItem classes={{root: 'menu-item', hover: 'menu-hover'}}>Finantsportaal</MenuItem>
              <MenuItem classes={{root: 'menu-item', hover: 'menu-hover'}}>Investor</MenuItem>
            </MenuList>
            </nav>
          </div>
          <nav class="right-menu">
            <MenuList className="right-menu" class="grid-item">
              <MenuItem classes={{root: 'menu-item', hover: 'menu-hover'}}>Ava konto</MenuItem>
              <MenuItem>Sisene</MenuItem>
              <MenuItem>EN</MenuItem>
              <MenuItem>RU</MenuItem>
            </MenuList>
            </nav>
          </div>
        <div class="container login-row">
          <nav class="sub-menu-nav">
            <MenuList className="nupud" class="grid-item">
              <MenuItem classes={{root: 'menu-item', hover: 'menu-hover'}}>ID-kaart</MenuItem>
              <MenuItem>Mobiil-ID</MenuItem>
              <MenuItem>Smart-ID</MenuItem>
              <MenuItem>PIN-kalkulaator</MenuItem>
              <MenuItem>Salasõna</MenuItem>
              <form action=" " class="searchform_control">
                <input type="text" class="searchform__control" placeholder="Kasutajanimi"></input>
                <button>Sisene</button>
              </form>             
            </MenuList>
            </nav>
        </div>
        <div class="container main-menu-row">
          <nav class="main-menu">
          <MenuList className="nupud" class="grid-item">
              <MenuItem>IGAPÄEVAPANGANDUS</MenuItem>
              <MenuItem>RAHA KASVATAMINE</MenuItem>
              <MenuItem>LAEN JA LIISING</MenuItem>
              <MenuItem>PENSION</MenuItem>
              <MenuItem>VAJAD ABI?</MenuItem>
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
              <img src="https://via.placeholder.com/300x150" alt="" ></img>
            </div>

            <div class="item">
              <img src="https://via.placeholder.com/300x150" alt=""></img>
              
            </div>

            <div class="item">
              <img src="https://via.placeholder.com/300x150" alt="" ></img>
              
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

          <GridList cellHeight={160} cols={3}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <h3>{tile.title} </h3>
                <p>{tile.content}</p>
                <a href={tile.link}>Loe Lisa</a>
              </GridListTile>
            ))}
          </GridList>
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
        <GridList cellHeight={160} cols={4}>
            {footerMenu.map((item) => (
              <GridListTile cols="1">
                <h5>{item.title} </h5>
                {item.links.map((link) => (
                  <a class="footer-menu-item" href={link}>{link}</a>
                ))}
              </GridListTile>
            ))}
          </GridList>
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
