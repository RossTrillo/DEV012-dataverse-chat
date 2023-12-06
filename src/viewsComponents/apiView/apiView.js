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
    <img id="home">
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