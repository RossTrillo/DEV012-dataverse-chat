import home from "./viewsComponents/homeView/home.js";
import errorView from "./viewsComponents/errorView/errorView.js";

const routes = {
  "/": home,
  "/404": errorView,
};

function render(template) {
  const rootElement = document.getElementById("root");
  rootElement.innerHTML = "";
  rootElement.appendChild(template);
}

function searchRoute(route) {
  // routes = "/hogar/bebes"

  if (routes[route]) {
   return routes[route]();
    
  } else {
  return routes["/404"]();
    
  }
}

function updateURLstate (route){

    const currentUrl = window.location.origin + route;
    history.pushState({}, '', currentUrl )
    
}
export { render, searchRoute, updateURLstate};
