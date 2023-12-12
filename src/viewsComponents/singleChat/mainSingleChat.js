/*
const interactionWithIa = document.getElementById("button");
interactionWithIa.addEventListener("click", addEventListeners); //



function addEventListeners () {
function sendMessage () {
    const messageInput = document.getElementById("text"); //
    
    const message = messageInput.value;//


    addMessage("Usuari@", message);

    const answersIA = getAnswerIA(message);

    addMessage("Personaje", answersIA);

    messageInput.value = "";

    }
function addMessage(sender, message) {
    const mainContainer = document.querySelector(".singleChat");
    const newMessage = document.createElement("p");
    newMessage.innerHTML = `${sender}: ${message}`;
    mainContainer.appendChild(newMessage);
}

function getAnswerIA(message) {
    return message;
}
}
console.log(addEventListeners());
*/

const interactionWithIa = document.getElementById("button");
interactionWithIa.addEventListener("click", sendMessage); //

//Evento KeyPress
 window.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        sendMessage();
    }
}); 

    function sendMessage() {
        const messageInput = document.getElementById("text"); //
        const message = messageInput.value;

        addMessage("Usuari@", message);

        const answersIA = getAnswerIA(message);

        addMessage("Personaje", answersIA);

        messageInput.value = "";
    }

    function addMessage(sender, message) {
        const mainContainer = document.querySelector(".singleChat");
        const newMessage = document.createElement("p");
        newMessage.setAttribute("class", "p")
        newMessage.innerHTML = `${sender}: <br> ${message}`;
        mainContainer.appendChild(newMessage);
    }

    function getAnswerIA(message) {
        return message;
    };
