// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { render, searchRoute, updateURLstate } from "./router.js";
import { computeStats, filterData, sortData } from "./lib/dataFunctions.js";
import data from "./data/dataset.js";




function loadRoute(route) {

  const template = searchRoute(route);
  render(template);
  updateURLstate(route);
  
}


const links = document.querySelectorAll("a.redirection");

links.forEach((link)=> {

    link.addEventListener("click", (event) => {
      
      event.preventDefault();
      const linkRoute = event.target.href.replace(window.location.origin, "")
          loadRoute(linkRoute);
          
          
          
      });

})
  

window.addEventListener("popstate", (event) => {
    // Check if the event state is null, indicating a full page reload
    if (event.state === null) {
      // Manually typed URL, handle route change
      const currentPath = window.location.pathname;
      loadRoute(currentPath);
    } else {
      // Back or forward button clicked, handle as usual
      const currentPath = window.location.pathname;
      loadRoute(currentPath);
    }
  });

  window.addEventListener("load", () => {
    const currentPath = window.location.pathname;
    loadRoute(currentPath);
  });

 

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
