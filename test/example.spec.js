import { singleChatResponse } from "../src/lib/Chat.Api";
import { selectedCard } from "../src/viewsComponents/singleChat/mainSingleChat";


const OpenIAResponse = jest.fn();

global.fetch = jest.fn(() => Promise.resolve({ json: OpenIAResponse }));

describe("Endopoint de OpenIA", () => {
  it("La API es llamada con los datos adecuados", () => {
    OpenIAResponse.mockResolvedValueOnce({ choices: [{ message: "foo" }] });
    const messages = [{ role: "user", content: "foo" }];
    singleChatResponse("1234", selectedCard, messages);

    expect(global.fetch).toBeCalledWith(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 1234`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `Tu eres el personaje principal de la caricatura ${selectedCard.name}`,
            },
            { role: "user", content: messages },
          ],
        }),
      }
    );
  });
});

it("El edpoint responde de manera correcta", () => {
  const response = {
    choices: [
      {
        message: {
          role: "assistant",
          content: "¡Hola!",
        },
      },
    ],
  };

  OpenIAResponse.mockResolvedValueOnce(response);

  return singleChatResponse("1234", [{ role: "user", contet: "foo" }]).then(
    (resolved) => {
      expect(resolved).toBe(response);
    }
  );
});

