import data from '../../data/dataset.js'
import { footer } from "../../staticsComponents/footer.js";
export const singleChatView = () => {
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './viewsComponents/singleChat/stylesChatView.css';
    
    document.head.appendChild(link);

    const container = document.createElement('div')
    container.setAttribute("id", "chatView")

    const singleHeader = document.createElement("header")
    singleHeader.setAttribute("class", "header")
    singleHeader.innerHTML = `
    <img id="cartoon">
    <a href="/">
    <i class="fa-solid fa-house"></i>
    </a>
    `

    const singleRoot = document.createElement('main')
    singleRoot.setAttribute("id", "apiRoot")
    singleRoot.setAttribute("class", "main")
    singleRoot.innerHTML = `

    <section id ="chat">
    </section>
    <section id ="questions">
    <label for="text" id="phrase"> Un momento, están pensando...</label>
    <br>
    <input id ="text" type="text" >
    <a href="/">
    <button type="submit" id="button">Enviar</button>
    </a>
    <br>
    </section>
    `
    container.appendChild(singleHeader);
    container.appendChild(singleRoot);
    document.body.appendChild(container);
    document.body.appendChild(footer);
    return container
}