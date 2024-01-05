import data from "../../data/dataset.js";
const apiKey = localStorage.getItem("apiKey");

if (!apiKey) {
    // Solo redirigir si no hay una API key
    window.location.href = "/api";
} else {
    // Manejar la interacción por mensajes
    const interactionWithIa = document.getElementById("button");
    interactionWithIa.addEventListener("click", sendMessage);
}

const interactionWithIa = document.getElementById("button");
interactionWithIa.addEventListener("click", sendMessage); //
//Evento KeyPress
 window.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        sendMessage();
    }
});

const programs = data.map(programa => programa.name);
console.log(programs)

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

        const apiUrl = "https://api.openai.com/v1/chat/completions";



        const requestBody = {
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: `Tu eres uno de los personajes principales de la caricatura ${programs.join(', ')}`},
                { role: "user", content: message }
            ]
        };

        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify(requestBody)
        })
        
        .then(response => response.json())
        .then(data => {
            if (data.choices && data.choices.length > 0 && data.choices[0].message) {
                // Agregar la respuesta de la IA al mensaje
                messageIA.innerHTML = `<p><b>${sender}</b></p> ${data.choices[0].message.content}`;
            } else {
                console.error("Error al obtener respuesta de la IA", data.error.message);
                messageIA.innerHTML = `<p><b>${sender}</b></p> Error al obtener respuesta de la IA: ${data.error.message}`;
            }
          // Agregar el mensaje completo al contenedor principal
          mainContainer.appendChild(messageIA);
        
          // Hacer scroll hacia abajo para mostrar el último mensaje
          mainContainer.scrollTop = mainContainer.scrollHeight;
      })

      .catch(error => {
        console.error("Error de red al obtener respuesta de la IA", error);
        messageIA.innerHTML = `<p><b>${sender}</b></p> Error de red al obtener respuesta de la IA`;
        mainContainer.appendChild(messageIA);
        mainContainer.scrollTop = mainContainer.scrollHeight;
    });
    };