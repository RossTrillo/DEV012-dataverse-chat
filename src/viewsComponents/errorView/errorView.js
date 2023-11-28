const errorView = () => {
  const errorPage = document.createElement("main");
  errorPage.innerHTML = `<main>
    <h1>404 Pagina no encontrada</h1>
  </main>`;

  return errorPage;
};

export default errorView;
