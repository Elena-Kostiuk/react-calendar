function creatWeeksOfMonth(firstDayOfMonth,daysInMonth) {
  let allWeeks = [];
  let weekItem = [];
  for (let i = 1 - firstDayOfMonth; i <= daysInMonth; i++) {
    i > 0 ? weekItem.push(i) : weekItem.push(null);
    if (weekItem.length === 7) {
      allWeeks.push(weekItem);
      weekItem = [];
    }
  }
  allWeeks.push(weekItem);
  return allWeeks
}

export default creatWeeksOfMonth
