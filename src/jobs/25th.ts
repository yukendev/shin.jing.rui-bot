import { sendLineMessage } from "../api/line.js";
import dotenv from "dotenv";

/*
   日本時間の毎月25日の午前9時30分に実行されるジョブ
 */
dotenv.config();

const shinjingruiGroupId = process.env.SHINJINGRUI_LINE_GROUP_ID;
const meguruSpaceGroupId = process.env.MEGURU_SPACE_LINE_GROUP_ID;

if (shinjingruiGroupId !== undefined) {
  sendLineMessage(shinjingruiGroupId, "今月の光熱水費の連絡をお願いします🐈");
}

if (meguruSpaceGroupId !== undefined) {
  sendLineMessage(
    meguruSpaceGroupId,
    "本日はめぐるスペース利用料金の入金日となります。次月の利用スケジュールもお願いいたします。来月もどうぞよろしくお願いいたします🐈"
  );
}
