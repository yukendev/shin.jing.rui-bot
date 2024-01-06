import { getEventListFromGoogleCalendar } from "../api/google.js";
import { sendLineMessage } from "../api/line.js";
import dotenv from "dotenv";
import { parseCalendarEvent, parseToLineMessage } from "../utils/calendar.js";
import dayjs from "dayjs";

/*
   日本時間で毎週月曜日の午前９時半に実行されるジョブ
 */
dotenv.config();

const myId = process.env.YUKEN_LINE_ID;

const sendGoogleCalendarEvents = async () => {
  const minDate = dayjs().set("hour", 0).set("minute", 0); // 今日の00時00分
  const maxDate = minDate.add(7, "d").set("hour", 23).set("minute", 59); // 1週間後の23時59分

  try {
    const result = await getEventListFromGoogleCalendar(
      minDate.format(),
      maxDate.format()
    );

    if (!result) return;

    const parsedData = parseCalendarEvent(result);
    const lineMessage = parseToLineMessage(parsedData);

    if (myId !== undefined) {
      sendLineMessage(myId, "今週の予定です！今週もゆっくり頑張りましょう🐈‍⬛");
      sendLineMessage(myId, lineMessage);
    }
  } catch (err) {
    if (myId !== undefined) {
      sendLineMessage(myId, "カレンダーイベント取得中にエラーが発生しました🚨");
    }
  }
};

sendGoogleCalendarEvents();
