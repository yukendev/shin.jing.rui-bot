import { type calendar_v3 } from "googleapis";

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

  return new Date(date)
    .toLocaleString("ja-JP", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      weekday: "short",
    })
    .replace(/月/g, "/")
    .replace(/日/g, "")
    .replace(/,/g, "");
};

const formatEndDate = (date: string | null | undefined) => {
  if (!date) return "不明";

  return new Date(date).toLocaleString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const parseToLineMessage = (
  events: Pick<calendar_v3.Schema$Event, "summary" | "start" | "end">[]
) => {
  const formatDateRange = (
    start: string | null | undefined,
    end: string | null | undefined
  ) => {
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
