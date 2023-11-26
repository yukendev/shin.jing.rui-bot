import https from "https";

export const sendMessageToGroup = (message: string) => {
  const myId = process.env.YUKEN_LINE_ID;
  //   const groupId
  const token = process.env.ACCESS_TOKEN;

  const data = JSON.stringify({
    to: myId,
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
