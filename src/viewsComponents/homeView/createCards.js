export const createCards = (data) => {
    // Aquí comienza tu código y puedes retornar lo que tu necesites
    //Crear un elemento ul por cada elemento en data
    const ul = document.createElement("ul");
    ul.setAttribute("class","ulClass")
    data.forEach(createLi);
  
    function createLi(element) {
      // const li = document.createElement("li");
      // //Inyectar cada li con los datos de cada elemento
      const li = `
      
      <li class="liClass" data-id="${element.id}" itemscope itemtype="https://schema.org/Person">
      <a href="/api" >
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
  
          <!--<section class="back">
          <dt><b>Género: </b></dt><dd itemprop="genre">${element.genre}</dd>
          <dt><b>Descripción corta:</b></dt><dd itemprop="shortDescription">${element.shortDescription}</dd>
          <dt><b>Descripción:</b></dt><dd itemprop="description"> ${element.description}</dd>
          <dt><b>Hechos importantes:</b> </dt>
          <dd itemprop="fechaDeCreacionDelPrograma">Fecha de Creacion: ${element.facts.fechaDeCreacionDelPrograma}</dd>
          <dd itemprop="capituloConMayorRating">Capitulo con mayor rating: ${element.facts.capituloConMayorRating}</dd>
          <dd itemprop="datoCurioso">Dato curioso: ${element.facts.datoCurioso}</dd>
  
          </section>-->
        </dl>
  
        </section>
        </a>
      </li>
      
    `;
  
      //Cada li inyectarlo en la ul
      ul.innerHTML += li;
    }
  
    //Renderizar el ul, esto debe estar en el main.js
    return ul;
  };