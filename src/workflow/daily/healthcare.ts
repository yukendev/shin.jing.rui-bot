import { sendLineMessage } from "../../api/sendMessageToGroup.js";

export const dailyServerCheck = () => {
  const myId = process.env.YUKEN_LINE_ID;
  if (myId != undefined) {
    sendLineMessage(
      myId,
      `現在の時刻は${new Date()}、定期実行ジョブが実行されました。サーバーは正常に動作しています。`
    );
  }
};
