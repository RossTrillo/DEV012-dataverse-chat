import { footer } from "../../staticsComponents/footer.js";
// import { createCard } from "./mainSingleChat.js";

export const singleChatView = () => {
  const link = document.getElementById("pageStyles");
  link.href = "./viewsComponents/singleChat/stylesChatView.css";

  

  const container = document.createElement("div");
  container.setAttribute("id", "chatView");

  const singleHeader = document.createElement("header");
  singleHeader.setAttribute("class", "header");
  singleHeader.innerHTML = `
    <img id="cartoon">
    <a href="/">
    <i class="fa-solid fa-house"></i>
    </a>
    `;

  const singleChatSection = document.createElement("section");
  singleChatSection.setAttribute("id", "singleSection");
  singleChatSection.innerHTML = `
    <aside id="cardInfo">
    </aside>
    <main class ="singleChat">
    </main>
    `;

  const inputText = document.createElement("section");
  inputText.setAttribute("id", "inputText");
  inputText.innerHTML = ` <section id="questions">
    <label for="text" id="phrase"> Un momento, están pensando...</label>
    <br>
    <input id ="text" type="text"  placeholder="Escribe tu pregunta...">
    </section>
    <button type="submit" id="button">Enviar</button>
    `;

  container.appendChild(singleHeader);
  container.appendChild(singleChatSection);
  container.appendChild(inputText);
  document.body.appendChild(container);
  document.body.appendChild(footer);

  const script = document.createElement("script");
  script.src = "./viewsComponents/singleChat/mainSingleChat.js";
  script.type = "module";
  document.body.appendChild(script);

  return container;
};
