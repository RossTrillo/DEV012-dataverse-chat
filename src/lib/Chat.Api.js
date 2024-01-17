export const singleChatResponse = (apiKey, selectedCard, message) => {
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
        return data.choices[0].message.content;
      } else {
        throw new Error(
          `Error en la respuesta de la IA: ${data.error.message}`
        );
      }
    })
    .catch((error) => {
      throw new Error(`Error de red al obtener respuesta de la IA: ${error}`);
    });
};
