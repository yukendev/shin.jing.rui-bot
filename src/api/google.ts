import dotenv from "dotenv";
import { google } from "googleapis";

dotenv.config();

const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
const refreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;
const calendarId = process.env.CALENDAR_ID;

const getGoogleOAuth = async () => {
  const googleOAuth = new google.auth.OAuth2(
    clientId,
    clientSecret,
    "http://localhost"
  );

  // 毎回のリクエスト時に新しいアクセストークンを取得
  googleOAuth.setCredentials({
    refresh_token: refreshToken,
  });

  try {
    const accessTokenResponse = await googleOAuth.getAccessToken();

    const accessToken = accessTokenResponse.token;

    if (!accessToken)
      throw new Error("有効なアクセストークンを取得できませんでした");

    googleOAuth.setCredentials({
      access_token: accessToken,
    });

    return googleOAuth;
  } catch (err) {
    console.log("エラーの中身", err);
    throw new Error("アクセストークン取得時にエラーが発生しました");
  }
};

/**
 * @param timeMin new Date().toISOString() etc...
 * @param timeMax new Date().toISOString() etc...
 */
export const getEventListFromGoogleCalendar = async (
  timeMin: string,
  timeMax: string
) => {
  try {
    const googleOAuth = await getGoogleOAuth();
    const calendar = google.calendar({ version: "v3", auth: googleOAuth });
    const res = await calendar.events.list({
      calendarId,
      timeMin,
      timeMax,
      timeZone: "Asia/Tokyo",
    });
    const events = res.data.items;
    return events;
  } catch (err) {
    console.log("カレンダーからイベント取得時にエラーが発生しました", err);
  }
};
