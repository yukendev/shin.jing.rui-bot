import { sendLineMessage } from "../api/sendMessageToGroup.js";
import dotenv from "dotenv";

dotenv.config();

const myId = process.env.YUKEN_LINE_ID;
if (myId != undefined) {
  sendLineMessage(
    myId,
    `現在の時刻は${new Date()}、予定していた実行時間はシンガポール時間で13時です定期実行ジョブが実行されました。サーバーは正常に動作しています。`
  );
}
