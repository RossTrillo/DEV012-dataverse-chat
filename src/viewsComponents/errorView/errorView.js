

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

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './viewsComponents/errorView/stylesError.css';
  document.head.appendChild(link);

  //Seleccionamos elemento padre que contendrá todos los nodos
  const errorPageView = document.querySelector('.all')
  

  //Creamos elementos
  const apiHeader = document.createElement("header")
  apiHeader.setAttribute("class", "header")
  apiHeader.innerHTML = `
  <img id="cartoon">
  <a href="/">
  <i class="fa-solid fa-house"></i>
  </a>
  `

  const errorRoot = document.getElementById('root')
  errorRoot.innerHTML = `<img id="triste"><br>
  <section>404<br>Page not found</section>`

  document.body.appendChild(footer);
  errorPageView.appendChild(apiHeader);
  errorPageView.insertBefore(errorRoot);
  return errorPageView;
}