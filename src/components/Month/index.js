import React, { useContext } from "react";
import Week from "./Week";
import styles from "./Month.module.css";
import { getDaysInMonth, getDay, setDate } from "date-fns";
import CONSTANTS from "../../api/constants";
import creatWeeksOfMonth from "../../api/createWeeksOfMonth";
import { CurrentCalendarContext } from "../../contexts/CurrentCalendar";
const { DAYS_OF_WEEK } = CONSTANTS;

export default function Month() {
  const { currentCalendar } = useContext(CurrentCalendarContext);

  const weekNames = DAYS_OF_WEEK.map((month) => month[0]);
  const firstDayOfMonth = getDay(setDate(currentCalendar, 1));
  const daysInMonth = getDaysInMonth(currentCalendar);

  let weeksOfMonth = creatWeeksOfMonth(firstDayOfMonth, daysInMonth);

  return (
    <section className={styles.month}>
      <table>
        <tbody>
          <Week itemsOfWeek={weekNames} style={styles["week-name"]} />
          {weeksOfMonth.map((week, i) => (
            <Week key={i} itemsOfWeek={week} style={styles["month-day"]} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
