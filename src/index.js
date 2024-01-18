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
  // Check if the event state is null, indicating a full page reload
  if (event.state === null) {
    // Manually typed URL, handle route change
    const currentPath = window.location.pathname;
    navigateTo(currentPath);
  } else {
    // Back or forward button clicked, handle as usual
    const currentPath = window.location.pathname;
    navigateTo(currentPath);
  }
});

window.addEventListener("load", () => {
  const currentPath = window.location.pathname;
  navigateTo(currentPath);
});
