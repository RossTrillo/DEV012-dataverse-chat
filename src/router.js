import home from "./viewsComponents/homeView/home.js";
import { errorView } from "./viewsComponents/errorView/errorView.js";
import {apiView} from "./viewsComponents/apiView/apiView.js";
import { groupChatView } from "./viewsComponents/groupChat/groupChat.js";
import { singleChatView } from "./viewsComponents/singleChat/chatView.js";

const routes = {
  "/": home,
  "/404": errorView,
  "/api": apiView,
  "/group": groupChatView,
  "/chat" : singleChatView
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
