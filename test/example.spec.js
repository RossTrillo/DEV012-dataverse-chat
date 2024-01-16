import { singleChatResponse } from "../src/lib/Chat.Api.js";
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();


const OpenIAResponse = jest.fn();

global.fetch = jest.fn(() => Promise.resolve({ json: OpenIAResponse }));

describe("Endpoint de OpenIA", () => {
  it("La API es llamada con los datos adecuados", () => {
    OpenIAResponse.mockResolvedValueOnce({ choices: [{ message: "foo" }] });

    fetchMock.mockResponseOnce(JSON.stringify({}));

    const messages = [{ role: "user", content: "foo" }];
    singleChatResponse("1234", "Gravity Falls" , messages);

    expect(fetchMock).toBeCalledWith(
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
              content: `Tu eres el personaje principal de la caricatura Gravity Falls`,
            },
            { role: "user", content: messages },
          ],
        }),
      }
    );
  });
});

it("El endpoint responde de manera correcta", () => {
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


  return singleChatResponse("1234","Gravity Falls", [{ role: "user", content: "foo" }]).then(
    (resolved) => {
      expect(resolved).toEqual(response);
    }
  );
});

