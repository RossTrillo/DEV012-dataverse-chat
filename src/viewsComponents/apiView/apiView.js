/*import { footer } from "../../staticsComponents/footer.js";
 export const apiView = () => {
    //
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './viewsComponents/apiView/stylesApi.css';
    document.head.appendChild(link);

    //Seleccionamos elemento padre que contendrá todos los nodos
    const apiKeyView = document.querySelector('.all')
    

    //Creamos elementos
    const apiH1 = document.querySelector("h1")
    apiH1.innerHTML = `
    <img id="cartoon">
    <a href="http://localhost:3000/">
    <img id="home">
    </a>
    `
console.log(apiH1)
    const apiRoot = document.getElementById('root')
    apiRoot.innerHTML = `<input id ="password" type="password" >
    <a href="http://localhost:3000/">
    <button type="submit" id="button">Enviar</button>
    </a>
    <br>
    <label for="password" id="phrase">Ingresa tu API key:</label>
    `

console.log(apiRoot);
    //Agregamos los elementos con appendChild
    apiKeyView.insertBefore(apiH1);
   apiKeyView.appendChild(apiRoot);
   apiKeyView.appendChild(footer);
}  */

import { footer } from "../../staticsComponents/footer.js";
export const apiView = () => {
    //
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './viewsComponents/apiView/stylesAPI.css';
    document.head.appendChild(link);
    const container = document.createElement('div')
    container.setAttribute("id", "apiView")
    //Seleccionamos elemento padre que contendrá todos los nodos
    // const apiKeyView = document.querySelector('.all')
    //Creamos elementos
    const apiHeader = document.createElement("header")
    apiHeader.setAttribute("class", "header")
    apiHeader.innerHTML = `
    <img id="cartoon">
    <a href="/">
    <i class="fa-solid fa-house"></i>
    </a>
    `
    const apiRoot = document.createElement('main')
    apiRoot.setAttribute("id", "apiRoot")
    apiRoot.setAttribute("class", "main")
    apiRoot.innerHTML = `
    <input id ="password" type="password" >
    <a href="/">
    <button type="submit" id="button">Enviar</button>
    </a>
    <br>
    <label for="password" id="phrase">Ingresa tu API key:</label>
    `
    //Agregamos los elementos con appendChild
    container.appendChild(apiHeader);
    container.appendChild(apiRoot);
    document.body.appendChild(container);
    document.body.appendChild(footer);
    return container
//    document.body.insertAdjacentElement('beforeend', footer);
}
