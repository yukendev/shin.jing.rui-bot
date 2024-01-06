import { type calendar_v3 } from "googleapis";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
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

const initDayjs = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Asia/Tokyo");
  dayjs.locale(ja);
};

const formatStartDate = (date: string | null | undefined) => {
  if (!date) return "不明";

  return dayjs(date).tz().format("MM/DD(ddd) HH:mm");
};

const formatEndDate = (date: string | null | undefined) => {
  if (!date) return "不明";

  return dayjs(date).tz().format("HH:mm");
};

export const parseToLineMessage = (
  events: Pick<calendar_v3.Schema$Event, "summary" | "start" | "end">[]
) => {
  const formatDateRange = (
    start: string | null | undefined,
    end: string | null | undefined
  ) => {
    initDayjs();
    const formattedStart = formatStartDate(start);
    const formattedEnd = formatEndDate(end);
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
