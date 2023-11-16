
import { onURLChange, setRootElement, setRoutes } from './router.js';
import {Chat, ChatGrupal, Home} from './views/Example.js';

const routes = {
    "/": Home,
    "/error" : 'some',
    "/chat": Chat,
    "/chatgrupal" : ChatGrupal,
}

const viewContainer = document.getElementById('root');

setRoutes(routes);
setRootElement(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
    onURLChange(event.target.location.pathname);
})
/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/