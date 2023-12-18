import { createCard } from "../homeView/createCards.js";
import { renderInView } from "../../lib/dataFunctions.js";


//1 Traer la info de la card seleccionada de la session storage
//2 Convertir toda la cadena de texto de la card seleccionada en un objeto
const selectedCard = JSON.parse(sessionStorage.getItem('cartoonSelected'));

//3 Crear la tarjeta con la info del objeto
const createdCard = createCard(selectedCard);

//4 Renderizar la tarjeta(elemento)
renderInView(createdCard,"cardInfo");



const interactionWithIa = document.getElementById("button");
interactionWithIa.addEventListener("click", sendMessage); //
//Evento KeyPress
 window.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        sendMessage();
    }
});
    function sendMessage() {
        const mainContainer = document.querySelector(".singleChat");
        const messageInput = document.getElementById("text");
        const  message = messageInput.value;

        addMessage("Usuari@:", message);
        getAnswerIA("Personaje:", message);
        
        messageInput.value = "";

        mainContainer.scrollTop = mainContainer.scrollHeight;

        
    }
   function addMessage(sender, message) {
        const mainContainer = document.querySelector(".singleChat");
        const newMessage = document.createElement("section");
        newMessage.setAttribute("class", "messageUser")
        newMessage.innerHTML = `<p><b>Usuari@:</b></p> ${message}`;
        mainContainer.appendChild(newMessage);
    }
    function getAnswerIA(sender, message) {
        const mainContainer = document.querySelector(".singleChat");
        const messageIA = document.createElement("section");
        messageIA.setAttribute("class", "messageIa")
        messageIA.innerHTML =`<p><b>${sender}</b></p> ${message}`;
        mainContainer.appendChild(messageIA);
    };

   

    
