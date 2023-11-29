import https from "https";

export const sendLineMessage = (id: string, message: string) => {
  const token = process.env.ACCESS_TOKEN;

  const data = JSON.stringify({
    to: id,
    messages: [
      {
        type: "text",
        text: message,
      },
    ],
  });
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const url = "https://api.line.me/v2/bot/message/push";
  const request = https.request(url, options);
  request.write(data);
  request.end();
};
