import { singleChatResponse } from "../src/lib/Chat.Api.js";

const cartoon = "Gravity Falls";
const OpenIAResponse = jest.fn();

global.fetch = jest.fn(() => Promise.resolve({ json: OpenIAResponse }));

describe("Endpoint de OpenIA", () => {
  it("La API es llamada con los datos adecuados", () => {
    OpenIAResponse.mockResolvedValueOnce({ choices: [{ message: "foo" }] });

    const messages = [{ role: "user", content: "foo" }];
    console.log("Cartoon value: ", cartoon)
    singleChatResponse("1234", {name:cartoon}, messages);

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
              content: `Tu eres el personaje principal de la caricatura ${cartoon}`,
            },
            { role: "user", content: messages }, //
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

  return singleChatResponse("1234", cartoon, [
    { role: "user", content: "foo" },
  ]).then((resolved) => {
    expect(resolved).toBe(response.choices[0].message.content); //
  });
});
