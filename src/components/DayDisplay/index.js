import React, { useContext } from "react";
import styles from "./DayDisplay.module.css";
import { getDay, getDate } from "date-fns";
import { SelectedDateContext } from "../../contexts/SelectedDate";
import CONSTANTS from "../../api/constants";
const { DAYS_OF_WEEK } = CONSTANTS;

export default function DayDisplay() {
  const { selectedDate } = useContext(SelectedDateContext);
  const dayOfWeek = DAYS_OF_WEEK[getDay(selectedDate)];

  return (
    <section className={styles.day}>
      <p className={styles["day-of-week"]}>{dayOfWeek}</p>
      <p className={styles["day-number"]}>{getDate(selectedDate)}</p>
    </section>
  );
}
