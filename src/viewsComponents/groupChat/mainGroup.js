const interactionWithIa = document.getElementById("button");
interactionWithIa.addEventListener("click", sendMessage); //

//Evento KeyPress
 window.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        sendMessage();
    }
}); 

    function sendMessage() {
        const messageInput = document.getElementById("text"); 
        const  message = messageInput.value;
        addMessage("Usuari@:", message);
        getAnswerIA("Personaje:", message);
        messageInput.value = "";
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
