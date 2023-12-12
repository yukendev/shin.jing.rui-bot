import { sendLineMessage } from "../api/sendMessageToGroup.js";
import { getWeekOfMonth } from "../utils/date.js";
import dotenv from "dotenv";

/*
   日本時間で毎週土曜日の午前９時半に実行されるジョブ
 */
dotenv.config();

const shinjingruiGroupId = process.env.SHINJINGRUI_LINE_GROUP_ID;

if (shinjingruiGroupId !== undefined) {
  const weekOfMonth = getWeekOfMonth();

  if (weekOfMonth === (1 || 3)) {
    // 学習支援&子ども食堂が開催されない土曜日
    sendLineMessage(
      shinjingruiGroupId,
      "来週の学習支援に参加できる人は、絵文字で反応をオネガイシマス🐈‍⬛"
    );
  } else if (weekOfMonth === (2 || 4)) {
    // 学習支援&子ども食堂が開催される土曜日
    sendLineMessage(
      shinjingruiGroupId,
      `今日は第${weekOfMonth}週の土曜日。学習支援と子ども食堂の開催日です🐈‍⬛`
    );
  }
}
