/* const errorView = () => {
  const errorPage = document.createElement("main");
  errorPage.innerHTML = `<main>
    <h1>404 Pagina no encontrada</h1>
  </main>`;

  return errorPage;
};

export default errorView;
*/
import { footer } from "../../staticsComponents/footer.js";
export const errorView = () => {

  /*const meta = document.createElement("meta");
  meta.name = "viewport";
  meta.content = "width=device-width, initial-scale=1.0" */

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './viewsComponents/errorView/stylesError.css';

 /* document.head.appendChild(meta); */
  document.head.appendChild(link);

  //Seleccionamos elemento padre que contendrá todos los nodos
  const errorPageView = document.querySelector(".all");

  //Creamos elementos
  const apiHeader = document.createElement("header");
  apiHeader.setAttribute("class", "header");
  apiHeader.innerHTML = `
  <img id="cartoon">
  <a href="/">
  <i class="fa-solid fa-house"></i>
  </a>
  `;

  const errorRoot = document.createElement('section');
  errorRoot.setAttribute("class","root")
  errorRoot.innerHTML = `<img id="triste"><p><b>404 <br>PAGE NOT FOUND<b></p>`

  // document.body.appendChild(footer);
  // errorPageView.appendChild(apiHeader);
  // errorPageView.insertBefore(errorRoot);

  errorPageView.appendChild(apiHeader);
  errorPageView.appendChild(errorRoot);

  // Append the footer to the error view container
  errorPageView.appendChild(footer);

  
  return errorPageView;
};
