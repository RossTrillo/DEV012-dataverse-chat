export const singleChatResponse = (apiKey, selectedCard, message) => {
  const mainContainer = document.querySelector(".singleChat");
  const messageIA = document.createElement("section");
  messageIA.setAttribute("class", "messageIa");

  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const requestBody = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `Tu eres el personaje principal de la caricatura ${selectedCard.name}`,
      },
      { role: "user", content: message },
    ],
  };

  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.choices && data.choices.length > 0 && data.choices[0].message) {
        // Agregar la respuesta de la IA al mensaje
        messageIA.innerHTML = `<p><b>Personaje:</b></p> ${data.choices[0].message.content}`;
      } else {
        messageIA.innerHTML = `<p><b>Personaje:</b></p> Error al obtener respuesta de la IA`;
      }

      // Agregar el mensaje completo al contenedor principal
      mainContainer.appendChild(messageIA);

      // Hacer scroll hacia abajo para mostrar el último mensaje
      mainContainer.scrollTop = mainContainer.scrollHeight;
    })
    .catch((error) => {
      console.error("Error de red al obtener respuesta de la IA", error);
      messageIA.innerHTML = `<p><b>Personaje:</b></p> Error de red al obtener respuesta de la IA`;
      mainContainer.appendChild(messageIA);
      mainContainer.scrollTop = mainContainer.scrollHeight;
    });
};
