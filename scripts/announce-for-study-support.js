import { sendMessageToGroup } from "../api/line/sendMessageToGroup.js";
import dotenv from "dotenv";
import { getWeekOfMonth, isSaturday } from "../utils/date.js";

// read .env file
dotenv.config();

const weekOfMonth = getWeekOfMonth();

// 毎月第一土曜日と第三土曜日にアナウンス
if ((weekOfMonth === 1 || 3) && isSaturday()) {
  sendMessageToGroup(
    "来週の学習支援に参加できる人は、絵文字で反応をオネガイシマス🐈‍⬛"
  );
} else {
  console.log("今日は第一土曜日、または第三土曜日ではありません。");
}

