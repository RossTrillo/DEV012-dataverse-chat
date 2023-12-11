import data from '../../data/dataset.js'
import { computeStats } from '../../lib/dataFunctions.js'
//import { header } from '../../staticsComponents/header.js';
import { createCards } from './createCards.js';

const home = () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './viewsComponents/homeView/stylesHome.css';
    document.head.appendChild(link);

    const homeHeader = document.createElement("header")
    homeHeader.setAttribute("class", "header")
    homeHeader.innerHTML = `
    <img id="cartoon">
    <a href="/">
    <i class="fa-solid fa-house"></i>
    </a>
    `

    const container = document.createElement('section')
    container.setAttribute("id", "home")

    const buttonToggle = document.createElement("section");
    buttonToggle.innerHTML = ` 
    <section class="toggle-btn">
    <span>&#9776;</span>
  </section>`;
    

    const filtersHtml = `
      <main>
        <h2>
          <i>Filtros</i>
        </h2>
  
        <label for="channel">Canales de televisión</label>
        <select data-testid="select-filter" name="channel" id="channel">
          <option value="Todos">Todos</option>
          <option value="Disney Channel">Disney Channel</option>
          <option value="Cartoon Network">Cartoon Network</option>
          <option value="Nickelodeon">Nickelodeon</option>
          <option value="Discovery Kids">Discovery Kids</option>
        </select><br /><br />
  
        <label for="targetAudience">Público dirigido</label>
        <select name="targetAudience" id="targetAudience">
          <option value="Todos">Todos</option>
          <option value="Niños">Niños</option>
          <option value="Niños y adolescentes">Niños y adolescentes</option>
        </select><br /><br />
  
        <label for="status">Transmisión</label>
        <select name="status" id="status">
          <option value="Todos">Todos</option>
          <option value="En curso">En curso</option>
          <option value="Finalizada">Finalizada</option>
        </select><br /><br />
  
        <label for="words">Orden alfabético</label>
        <select data-testid="select-sort" name="name" id="words">
          <option value="Seleccionar">Seleccionar</option>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select><br /><br />
  
        <button data-testid="button-clear">Limpiar</button>
  
        <section class="totalChannels">
          <h3>Data Estadistica</h3>
          <p id="statistics"></p>
        </section>
      </main>
    `;

    
    const ulStatistics = 
   `<ul>
    <li> Disney Channel: ${computeStats(data)["Disney Channel"]} </li>
    <li> Cartoon Network: ${computeStats(data)["Cartoon Network"]} </li>
    <li> Discovery Kids: ${computeStats(data)["Discovery Kids"]} </li>
    <li> Nickelodeon: ${computeStats(data)["Nickelodeon"]} </li>
    </ul>
    `;
    

    const sidebarHtml = document.createElement("section") 
    sidebarHtml.innerHTML = `<section id="sideBar" class="active">
        ${filtersHtml}
        ${ulStatistics}
      </section>
    `;
    
    const cards = createCards(data);

    const containerCards = document.createElement("section");
    containerCards.setAttribute("id", "containerCards");
    containerCards.appendChild(cards)

  //container.appendChild(containerHeader);
  container.appendChild(homeHeader);
   container.appendChild(buttonToggle);
   container.appendChild(sidebarHtml);
   container.insertAdjacentElement('beforeend', containerCards);

   const script = document.createElement("script");
    script.src = "./viewsComponents/homeView/mainHome.js"
    script.type = "module"
    document.body.appendChild(script)
   
    return container

};



export default home;
