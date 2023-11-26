import { sendMessageToGroup } from "../../api/sendMessageToGroup.js";
import { getWeekOfMonth, isSaturday } from "../../utils/date.js";

/*
   学習報告のリマインド、参加メンバー募集
 */
export const announceForStudySupport = () => {
  const weekOfMonth = getWeekOfMonth();
  // 毎月第一土曜日と第三土曜日にグループに送信
  if ((weekOfMonth === 1 || 3) && isSaturday()) {
    sendMessageToGroup(
      "来週の学習支援に参加できる人は、絵文字で反応をオネガイシマス🐈‍⬛",
    );
  } else {
    console.log("今日は第一土曜日、または第三土曜日ではありません。");
  }
};
