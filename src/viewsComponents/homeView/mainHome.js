import { filterData, sortData } from "../../lib/dataFunctions.js";
import data from "../../data/dataset.js";
import { createCards } from "./createCards.js";
// Eventos del DOM para el home View

const renderInView = (element, id) => {
  const rootElement = document.getElementById(id);
  rootElement.innerHTML = "";
  rootElement.appendChild(element);
};

addEventListeners();
function addEventListeners() {
  console.log("Event listeners are active.");
  //Variable que almacena los filtros seleccionados y crean un objeto a la vez.

  const channel = document.querySelector("select[name='channel']");
  const targetAudience = document.querySelector("select[name='targetAudience']");
  const status = document.querySelector("select[name='status']");

  channel.addEventListener("change", applyFilters);
  targetAudience.addEventListener("change", applyFilters);
  status.addEventListener("change", applyFilters);

  console.log("Channel Element:", channel);
  console.log("Target Audience Element:", targetAudience);
  console.log("Status Element:", status);

  const originalData = [...data];
  let filteredData = [...data];

  function applyFilters() {
    console.log("applyFilters function called");
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
    console.log("🚀 ~ file: mainHome.js:54 ~ applyFilters ~ filteredData:", filteredData)

    // Display the filtered data in the HTML.
     const filteredCards = createCards(filteredData)
    renderInView(filteredCards, "containerCards");
  }

  const sort = document.querySelector("select[data-testid='select-sort']");
  sort.addEventListener("change", (event) => {
    const selectedSort = event.target.value;
    if (selectedSort !== "Seleccionar") {
      const sortedData = sortData(filteredData, "name", selectedSort);
      // {"ant","bolivar"}
      const sortedCards = createCards(sortedData);
      renderInView(sortedCards, "containerCards");
    }
  });

  const btnToggle = document.querySelector(".toggle-btn");
  btnToggle.addEventListener("click", function () {
    // {}
    document.getElementById("sideBar").classList.toggle("active");
  });

  
  const buttonReset = document.querySelector(
    "button[data-testid='button-clear']"
  );

  buttonReset.addEventListener("click", resetFiltersAndRenderItems);

  function resetFiltersAndRenderItems() {
    console.log(
      "🚀 ~ file: index.js:131 ~ resetFiltersAndRenderItems ~ resetFiltersAndRenderItems:",
      resetFiltersAndRenderItems
    );

    channel.selectedIndex = 0;
    targetAudience.selectedIndex = 0;
    status.selectedIndex = 0;
    sort.selectedIndex = 0;
    filteredData = data;

    const resetedData = createCards(data);
    renderInView(resetedData, "containerCards");
  }
}
