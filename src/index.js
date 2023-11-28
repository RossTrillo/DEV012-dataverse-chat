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

  // Eventos del DOM para el home View
const renderInView = (element, id) => {
    const rootElement = document.getElementById(id);
    rootElement.innerHTML = "";
    rootElement.appendChild(element);
  };
  const dataBaseToShowInHtml = renderItems(data);
  renderInView(dataBaseToShowInHtml, "root");
  const statistics = computeStats(data);
  const channelStatistics = createChannelStatistics(statistics);
  renderInView(channelStatistics, "statistics");
  //Variable que almacena los filtros seleccionados y crean un objeto a la vez.
  const channel = document.querySelector("select[name='channel']");
  const targetAudience = document.querySelector("select[name='targetAudience']");
  const status = document.querySelector("select[name='status']");
  const originalData = [...data];
  let filteredData = [...data];
  function applyFilters() {
    // Create a copy of the original data to apply filters
    filteredData = [...originalData];
    // const selectedChannel = channel.value;
    const selectedPublic = targetAudience.value;
    const selectedTransmission = status.value;
    if (channel.value !== "Todos") {
      filteredData = filterData(filteredData, "channel", channel.value);
    }
    if (selectedPublic !== "Todos") {
      filteredData = filterData(filteredData, "targetAudience", selectedPublic);
    }
    if (selectedTransmission !== "Todos") {
      filteredData = filterData(filteredData, "status", selectedTransmission);
    }
    // Display the filtered data in the HTML.
    const itemsFiltered = renderItems(filteredData);
    renderInView(itemsFiltered, "root");
  }
  const sort = document.querySelector("select[data-testid='select-sort']");
  sort.addEventListener("change", (event) => {
    const selectedSort = event.target.value;
    if (selectedSort !== "Seleccionar") {
      const sortedData = sortData(filteredData, "name", selectedSort);
      // {"ant","bolivar"}
      const itemsFiltered = renderItems(sortedData);
      renderInView(itemsFiltered, "root");
    }
  });
  const btnToggle = document.querySelector(".toggle-btn");
  btnToggle.addEventListener("click", function () {
    // {}
    document.getElementById("sideBar").classList.toggle("active");
  });
  //Button
  const buttonReset = document.querySelector(
    "button[data-testid='button-clear']"
  );
  buttonReset.addEventListener("click", resetFiltersAndRenderItems);
  function resetFiltersAndRenderItems() {
    channel.selectedIndex = 0;
    targetAudience.selectedIndex = 0;
    status.selectedIndex = 0;
    sort.selectedIndex = 0;
    filteredData = data;
    const itemsFiltered = renderItems(data);
    renderInView(itemsFiltered, "root");
  }
  channel.addEventListener("change", applyFilters);
  targetAudience.addEventListener("change", applyFilters);
  status.addEventListener("change", applyFilters);









/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
