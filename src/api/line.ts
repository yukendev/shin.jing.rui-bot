import https from "https";

export const sendLineMessage = (id: string, message: string) => {
  const token = process.env.LINE_ACCESS_TOKEN;

  if (!token) {
    console.error("LINE_ACCESS_TOKEN is not defined.");
    return;
  }

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
  request.on("error", (error) => {
    console.error("Request error:", error);
  });
  request.write(data);
  request.end();
};
