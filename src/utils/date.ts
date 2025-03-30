// 今日が今月の第何週かを求める

type weekOfMonth = 1 | 2 | 3 | 4 | 5 | 6;

export const getWeekOfMonth = (): weekOfMonth => {
  // 今日の日付を取得
  const today = new Date();

  // 今日が月の中で何週目かを求める
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const dayOfWeekOnFirstDay = firstDayOfMonth.getDay();
  const dayOfMonth = today.getDate();

  // 今日が月の中で何週目かを計算
  const weekOfMonth = Math.ceil((dayOfMonth + dayOfWeekOnFirstDay) / 7);

  return weekOfMonth as weekOfMonth;
};

// 今日が土曜日かどうかを判断
export const isSaturday = () => {
  const today = new Date();

  const isSaturday = today.getDay() === 6;

  return isSaturday;
};
