import dotenv from "dotenv";
import { match } from "ts-pattern";

import { sendLineMessage } from "../api/line.js";
import { getWeekOfMonth } from "../utils/date.js";

/*
   日本時間で毎週土曜日の午前９時半に実行されるジョブ
 */
dotenv.config();

const shinjingruiGroupId = process.env.SHINJINGRUI_LINE_GROUP_ID;

if (shinjingruiGroupId !== undefined) {
  const weekOfMonth = getWeekOfMonth();

  match(weekOfMonth)
    .with(1, () => {
      // 学習支援 & 子ども食堂が開催されない土曜日 & ミーティングの1週間前
      sendLineMessage(
        shinjingruiGroupId,
        "来週の学習支援に参加できる人は、絵文字で反応をオネガイシマス🐈‍⬛来週はミーティングの開催日です、参加できない方はいますか？"
      );
    })
    .with(3, () => {
      // 学習支援 & 子ども食堂が開催されない土曜日
      sendLineMessage(
        shinjingruiGroupId,
        "来週の学習支援に参加できる人は、絵文字で反応をオネガイシマス🐈‍⬛"
      );
    })
    .with(2, 4, () => {
      // 学習支援&子ども食堂が開催される土曜日
      sendLineMessage(
        shinjingruiGroupId,
        `今日は第${weekOfMonth}週の土曜日。学習支援と子ども食堂の開催日です🐈‍⬛`
      );
    })
    .with(5, 6, () => {
      // 第５週, 第６週は何もしない
    })
    .exhaustive();
}
