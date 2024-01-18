// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { render, searchRoute, updateURLstate } from "./router.js";

function loadRoute(route) {
  const template = searchRoute(route);
  render(template);
  updateURLstate(route);
}

export { loadRoute };

const links = document.querySelectorAll("a.redirection");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const linkRoute = event.target.href.replace(window.location.origin, "");
    loadRoute(linkRoute);
  });
});

window.addEventListener("popstate", () => {
  // if (event.state === null) {
  const currentPath = window.location.pathname;
  loadRoute(currentPath);
  // } else {
  //  const currentPath = window.location.pathname;
  //loadRoute(currentPath);
  // }
});

window.addEventListener("load", () => {
  const currentPath = window.location.pathname;
  loadRoute(currentPath);
});
