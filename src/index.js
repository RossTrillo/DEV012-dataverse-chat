// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { navigateTo } from "./router.js";

const links = document.querySelectorAll("a.redirection");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const linkRoute = event.target.href.replace(window.location.origin, "");
    navigateTo(linkRoute);
  });
});

window.addEventListener("popstate", (event) => {
  if (event.state === null) {
    const currentPath = window.location.pathname;
    navigateTo(currentPath);
  } else {
    const currentPath = window.location.pathname;
    navigateTo(currentPath);
  }
});

window.addEventListener("load", () => {
  const currentPath = window.location.pathname;
  navigateTo(currentPath);
});
