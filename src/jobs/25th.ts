import { sendLineMessage } from "../api/line.js";
import dotenv from "dotenv";

/*
   日本時間の毎月25日の午前9時30分に実行されるジョブ
 */
dotenv.config();

const shinjingruiGroupId = process.env.SHINJINGRUI_LINE_GROUP_ID;

if (shinjingruiGroupId !== undefined) {
  sendLineMessage(shinjingruiGroupId, "今月の光熱水費の連絡をお願いします🐈");
}
