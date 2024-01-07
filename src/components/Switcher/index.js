import React, { useContext } from "react";
import styles from "./switcher.module.css";
import { getYear, getMonth } from "date-fns";
import { CurrentCalendarContext } from "../../contexts/CurrentCalendar";
import CONSTANTS from "../../api/constants";
const { MONTHS } = CONSTANTS;

export default function Switcher() {
  const { currentCalendar, setYearOfDate, setMonthOfYear } = useContext(
    CurrentCalendarContext
  );
  const currentMonth = getMonth(currentCalendar);
  const currentYear = getYear(currentCalendar);

  const monthForward = () => {
    if (currentMonth === 11) {
      setMonthOfYear(0);
      setYearOfDate(currentYear + 1);
    } else {
      setMonthOfYear(currentMonth + 1);
    }
  };

  const monthBack = () => {
    if (currentMonth === 0) {
      setMonthOfYear(11);
      setYearOfDate(currentYear - 1);
    } else {
      setMonthOfYear(currentMonth - 1);
    }
  };

  return (
    <div className={styles.switcher}>
      <button className={styles["nav-btn"]} onClick={monthBack}>
        &#60;
      </button>
      <p className={styles["chose-month"]}>
        {MONTHS[currentMonth]} {currentYear}
      </p>
      <button className={styles["nav-btn"]} onClick={monthForward}>
        &#62;
      </button>
    </div>
  );
}
