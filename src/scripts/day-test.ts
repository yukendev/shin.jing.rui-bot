import { sendMessageToGroup } from "../api/sendMessageToGroup.js";
import { getWeekOfMonth } from "../utils/date.js";
import dotenv from "dotenv";

// read .env file
dotenv.config();

// 現在の日付を取得
const today = new Date();
// getDayメソッドを使用して曜日を取得 (0が日曜日、1が月曜日、2が火曜日、...、6が土曜日)
const dayOfWeek = today.getDay();
// 曜日に対応する文字列を配列で定義
const daysOfWeek = [
  "日曜日",
  "月曜日",
  "火曜日",
  "水曜日",
  "木曜日",
  "金曜日",
  "土曜日",
];
const weekOfMonth = getWeekOfMonth();

// テストメッセージの送信
sendMessageToGroup(
  `現在の時刻は: ${new Date()}。今日は第${weekOfMonth}週の${
    daysOfWeek[dayOfWeek]
  }です。`
);
