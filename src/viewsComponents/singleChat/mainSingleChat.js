<<<<<<< HEAD
=======
import { createCard } from "../homeView/createCards.js";
import { renderInView } from "../../lib/dataFunctions.js";


//1 Traer la info de la card seleccionada de la session storage
//2 Convertir toda la cadena de texto de la card seleccionada en un objeto
const selectedCard = JSON.parse(sessionStorage.getItem('cartoonSelected'));

//3 Crear la tarjeta con la info del objeto
const createdCard = createCard(selectedCard);

//4 Renderizar la tarjeta(elemento)
renderInView(createdCard,"cardInfo");



>>>>>>> 1fb2c147a42ab1c66969efe3ffc5ba0eadec69b8
const interactionWithIa = document.getElementById("button");
interactionWithIa.addEventListener("click", sendMessage); //
//Evento KeyPress
 window.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        sendMessage();
    }
});
    function sendMessage() {
<<<<<<< HEAD
        const messageInput = document.getElementById("text"); //
        const  message = messageInput.value;
        addMessage("Usuari@:", message);
        getAnswerIA("Personaje:", message);
        messageInput.value = "";
    }

   function addMessage(sender, message) {
        const mainContainer = document.querySelector(".singleChat");
        const newMessage = document.createElement("section");
        newMessage.setAttribute("class", "messageUser")
        newMessage.innerHTML = `<p><b>Usuari@</b></p> ${message}`;
        mainContainer.appendChild(newMessage);
    } 

=======
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
>>>>>>> 1fb2c147a42ab1c66969efe3ffc5ba0eadec69b8
    function getAnswerIA(sender, message) {
        const mainContainer = document.querySelector(".singleChat");
        const messageIA = document.createElement("section");
        messageIA.setAttribute("class", "messageIa")
<<<<<<< HEAD
        messageIA.innerHTML =`<p><b>${sender}</b></p> ${message}` ;
        mainContainer.appendChild(messageIA);
    }; 
=======
        messageIA.innerHTML =`<p><b>${sender}</b></p> ${message}`;
        mainContainer.appendChild(messageIA);
    };

   

    
>>>>>>> 1fb2c147a42ab1c66969efe3ffc5ba0eadec69b8
