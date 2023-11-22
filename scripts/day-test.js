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
// 結果を表示
console.log(`今日は${daysOfWeek[dayOfWeek]}です。`);
