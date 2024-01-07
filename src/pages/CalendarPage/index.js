import React from "react";
import Day from "../../components/DayDisplay";
import styles from "./CalendarPage.module.css";
import Switcher from "../../components/Switcher";
import Month from "../../components/Month";

export default function CalendarPage() {
  return (
    <div className={styles.calendar}>
      <Day />
      <div className={styles["month-container"]}>
        <Switcher />
        <Month />
      </div>
    </div>
  );
}
