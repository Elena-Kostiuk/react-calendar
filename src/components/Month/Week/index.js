import React, { useContext } from "react";
import { isSameDay, setDate } from "date-fns";
import styles from "../Month.module.css";
import { CurrentCalendarContext } from "../../../contexts/CurrentCalendar";
import { SelectedDateContext } from "../../../contexts/SelectedDate";

export default function Week(props) {
  const { currentCalendar } = useContext(CurrentCalendarContext);
  const { selectedDate, setSelectedDate } = useContext(SelectedDateContext);

  const dayChangeHandler = (event) => {
    const day = event.target.innerText;
    setSelectedDate(setDate(currentCalendar, day));
  };

  const row = (itemsWeek, style) =>
    itemsWeek.map((day, i) =>
      isSameDay(selectedDate, setDate(currentCalendar, day)) && day ? (
        <td key={i} className={styles["active-day"]}>
          {day}
        </td>
      ) : (
        <td key={i} className={style}>
          {day}
        </td>
      )
    );

  return (
    <tr onClick={dayChangeHandler}>{row(props.itemsOfWeek, props.style)}</tr>
  );
}
