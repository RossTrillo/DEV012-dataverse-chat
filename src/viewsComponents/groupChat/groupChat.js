import { footer } from "../../staticsComponents/footer.js";
export const groupChatView = () => {
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './viewsComponents/groupChat/stylesGroup.css';
    
    document.head.appendChild(link);

    const container = document.createElement('div')
    container.setAttribute("id", "chatView")

    const groupHeader = document.createElement("header")
    groupHeader.setAttribute("class", "header")
    groupHeader.innerHTML = `
    <img id="cartoon">
    <a href="/">
    <i class="fa-solid fa-house"></i>
    </a>
    `

    const groupChatSection = document.createElement('section')
    groupChatSection.setAttribute("id", "singleSection")
    groupChatSection.innerHTML = `
    <aside class="cardInfo">
    "Información de cada programa"
    </aside>
    <main class ="singleChat">
    </main>
    `

    const inputText = document.createElement('section')
    inputText.setAttribute("id", "inputText")
    inputText.innerHTML = ` <section id="questions">
    <label for="text" id="phrase"> Un momento, están pensando...</label>
    <br>
    <input id ="text" type="text"  placeholder="Escribe tu pregunta...">
    </section>
    <button type="submit" id="button">Enviar</button>
    `


    container.appendChild(groupHeader);
    container.appendChild(groupChatSection);
    container.appendChild(inputText);
    document.body.appendChild(container);
    document.body.appendChild(footer);



    const script = document.createElement("script");
    script.src= "./viewsComponents/groupChat/mainGroup.js"
    script.type ="module"
    document.body.appendChild(script); 

    return container;


};