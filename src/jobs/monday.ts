import { sendLineMessage } from "../api/line.js";
import dotenv from "dotenv";

/*
   日本時間で毎週月曜日の午前９時半に実行されるジョブ
 */
dotenv.config();

const myId = process.env.YUKEN_LINE_ID;

if (myId !== undefined) {
  sendLineMessage(myId, "このタイミングで1週間の予定をお知らせします");
}
