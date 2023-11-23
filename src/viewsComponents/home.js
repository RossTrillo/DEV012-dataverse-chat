import data from '../data/dataset.js'

const home = () => {

    const container = document.createElement('section')

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles.css';
    document.head.appendChild(link);

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

    const sidebarHtml = document.createElement("section") 
    sidebarHtml.innerHTML = `<section id="sideBar" class="active">
        ${filtersHtml}
      </section>
    `;
    
    const ul = document.createElement("ul");
    ul.setAttribute("class","ulClass")
    data.forEach(createLi);
  
    function createLi(element) {
      // const li = document.createElement("li");
      // //Inyectar cada li con los datos de cada elemento
      const li = `
      
      <li class="liClass" data-id="${element.id}" itemscope itemtype="https://schema.org/Person">
      <section class="card">
  
      <section class="front">
        <dl class="user-name">
          <figure>
            <img src="${element.imageUrl}" class="img"/>
          </figure>
          <dt></dt><dd itemprop="name">${element.name}</dd>
          <dt>Canal de televisión: </dt><dd itemprop="channel"> ${element.channel}</dd>
          <dt>Transmision: </dt><dd itemprop="status">${element.status}</dd>
          <dt>Audiencia: </dt><dd itemprop="targetAudience">${element.targetAudience}</dd>
          
          </section>
  
          <section class="back">
          <dt><b>Género: </b></dt><dd itemprop="genre">${element.genre}</dd>
          <dt><b>Descripción corta:</b></dt><dd itemprop="shortDescription">${element.shortDescription}</dd>
          <dt><b>Descripción:</b></dt><dd itemprop="description"> ${element.description}</dd>
          <dt><b>Hechos importantes:</b> </dt>
          <dd itemprop="fechaDeCreacionDelPrograma">Fecha de Creacion: ${element.facts.fechaDeCreacionDelPrograma}</dd>
          <dd itemprop="capituloConMayorRating">Capitulo con mayor rating: ${element.facts.capituloConMayorRating}</dd>
          <dd itemprop="datoCurioso">Dato curioso: ${element.facts.datoCurioso}</dd>
  
          </section>
        </dl>
  
        </section>
      </li>
      
    `;
  
      //Cada li inyectarlo en la ul
      ul.innerHTML += li;
    }

   container.appendChild(sidebarHtml);
   container.insertAdjacentElement('beforeend', ul)
   

    return container
   
    
};

export default home;
