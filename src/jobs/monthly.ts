import { sendLineMessage } from "../api/line.js";
import dotenv from "dotenv";

/*
   日本時間で毎月1日の午後12時に実行されるジョブ
 */
dotenv.config();

const nekkoGroupId = process.env.NEKKO_LINE_GROUP_ID;

if (nekkoGroupId !== undefined) {
  sendLineMessage(nekkoGroupId, "今月のバンド練習の日程を決めましょう🐈‍⬛");
}
