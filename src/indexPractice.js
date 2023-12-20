// objeto que mapea las rutas
let routes = {
    "/": home,
    "/404": errorView,
};

// referencia al objeto HTML donde se dibujarán los componentes.
let routesElements = "";

export const setRoutes = (newRoutesValue) =>  {
    routes = newRoutesValue;
}

export const setRoutesElements = (newRoutesElementValue) => {
    // validar si newElementValue es un objeto HMTL
    routesElements = newRoutesElementValue;
}

const render = (pathname) => {
    const root = routesElements;
    root.innerHTML = '';
    if (routes[pathname]) {
       const template = routes[pathname]();
       root.appenChild(template);
    }
    else {
        root.appenChild(routes["/error"]())
    }
}