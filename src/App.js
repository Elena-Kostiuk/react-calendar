import React, { useState } from "react";
import { CurrentCalendarContext } from "./contexts/CurrentCalendar";
import { SelectedDateContext } from "./contexts/SelectedDate";
import CalendarPage from "./pages/CalendarPage";
import styles from "./pages/CalendarPage/CalendarPage.module.css";
import { setYear, setMonth } from "date-fns";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentCalendar, setCurrentCalendar] = useState(new Date());

  const setMonthOfYear = (month) => {
    setCurrentCalendar((prevDate) => setMonth(prevDate, month));
  };

  const setYearOfDate = (year) => {
    setCurrentCalendar((prevDate) => setYear(prevDate, year));
  };

  return (
    <CurrentCalendarContext.Provider
      value={{ currentCalendar, setMonthOfYear, setYearOfDate }}
    >
      <SelectedDateContext.Provider value={{ selectedDate, setSelectedDate }}>
        <div className={styles.page}>
          <CalendarPage />
        </div>
      </SelectedDateContext.Provider>
    </CurrentCalendarContext.Provider>
  );
}

export default App;
