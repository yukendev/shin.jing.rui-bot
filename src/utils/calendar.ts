import { type calendar_v3 } from "googleapis";
import dayjs from "dayjs";
import ja from "dayjs/locale/ja.js";

export const parseCalendarEvent = (
  events: calendar_v3.Schema$Event[]
): Pick<calendar_v3.Schema$Event, "summary" | "start" | "end">[] => {
  return events.map((e) => {
    return {
      summary: e.summary,
      start: e.start,
      end: e.end,
    };
  });
};

const formatStartDate = (date: string | null | undefined) => {
  if (!date) return "不明";

  return dayjs(date).format("MM/DD(ddd) HH:mm");
};

const formatEndDate = (date: string | null | undefined) => {
  if (!date) return "不明";

  return dayjs(date).format("HH:mm");
};

export const parseToLineMessage = (
  events: Pick<calendar_v3.Schema$Event, "summary" | "start" | "end">[]
) => {
  const formatDateRange = (
    start: string | null | undefined,
    end: string | null | undefined
  ) => {
    dayjs.locale(ja); // タイムゾーンを日本に設定
    console.log("debug1: ", start, end);
    const formattedStart = formatStartDate(start);
    const formattedEnd = formatEndDate(end);
    console.log("debug2: ", formattedStart, formattedEnd);
    return `${formattedStart} ~ ${formattedEnd}`;
  };

  return events
    .map(
      (event) =>
        `・${event.summary}: ${formatDateRange(
          event.start?.dateTime,
          event.end?.dateTime
        )}`
    )
    .join("\n");
};
