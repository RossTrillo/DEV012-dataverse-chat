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
    .then((response) => {
      return response.json()})
    .then((data) => {
      if (data.choices && data.choices.length > 0 && data.choices[0].message) {
        return {
          success: true,
          content: data.choices[0].message.content,
        };
      } else {
        return {
          success: false,
          error: "Error al obtener respuesta de la IA",
        };
      }
    })
  
    .catch((error) => {
      console.error("Error de red al obtener respuesta de la IA", error);
      return {
        success: false,
        error: "Error de red al obtener respuesta de la IA",
      };
      
    });
};
