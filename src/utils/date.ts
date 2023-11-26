// 今日が今月の第何週かを求める
export const getWeekOfMonth = () => {
  // 今日の日付を取得
  const today = new Date();

  // 今日が月の中で何週目かを求める
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const dayOfWeekOnFirstDay = firstDayOfMonth.getDay();
  const dayOfMonth = today.getDate();

  // 今日が月の中で何週目かを計算
  const weekOfMonth = Math.ceil((dayOfMonth + dayOfWeekOnFirstDay) / 7);

  return weekOfMonth;
};

// 今日が土曜日かどうかを判断
export const isSaturday = () => {
  const today = new Date();

  const isSaturday = today.getDay() === 6;

  return isSaturday;
};
