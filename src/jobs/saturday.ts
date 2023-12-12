import { sendLineMessage } from "../api/sendMessageToGroup.js";
import { getWeekOfMonth } from "../utils/date.js";
import dotenv from "dotenv";

/*
   土曜日に実行されるジョブのテスト実行
 */

dotenv.config();

const weekOfMonth = getWeekOfMonth();

const myId = process.env.YUKEN_LINE_ID;
if (myId != undefined) {
  sendLineMessage(
    myId,
    `現在の時刻は${new Date()}。getWeekOfMonth()実行の結果は${weekOfMonth}`
  );
}
