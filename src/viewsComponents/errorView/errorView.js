

/* const errorView = () => {
  const errorPage = document.createElement("main");
  errorPage.innerHTML = `<main>
    <h1>404 Pagina no encontrada</h1>
  </main>`;

  return errorPage;
};

export default errorView;
*/ 

export const errorView = () => {

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './viewsComponents/errorView/stylesError.css';
  document.head.appendChild(link);

  //Seleccionamos elemento padre que contendrá todos los nodos
  const errorPageView = document.querySelector('.all')
  

  //Creamos elementos
  const errorH1 = document.querySelector("h1")
  errorH1.innerHTML = `
  <img id="cartoon">
  <a href="http://localhost:3000/">
  <img id="home">
  </a>
  `
  const errorRoot = document.getElementById('root')
  errorRoot.innerHTML = `<img id="triste"><br>
  <section>404<br>Page not found</section>`


  errorPageView.insertBefore(errorH1);
  errorPageView.appendChild(errorRoot);

}