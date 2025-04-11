import { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { InlineWidget } from "react-calendly";
import globeicon from "../../../assets/tickerr/globeicon.png";
import dropdownicon from "../../../assets/tickerr/dropdownicon.png";
import Modal from './Modal'
const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendly, setShowCalendly] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState("");

  const BASE_CALENDLY_URL = "https://calendly.com/nodeva-info/30min";

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const onDateClick = (day) => {
    setSelectedDate(day);
    const dateStr = format(day, "yyyy-MM-dd");
    setCalendlyUrl(`${BASE_CALENDLY_URL}?date=${dateStr}`);
    setShowCalendly(true);
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

    // Add padding for days from previous month
    const startDay = monthStart.getDay();
    for (let i = 0; i < startDay; i++) {
      days.unshift(subMonths(monthStart, 1).getDate() - startDay + i + 1);
    }

    return (
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => {
          const cloneDay = new Date(day);
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isSelected = selectedDate && isSameDay(day, selectedDate);

          return (
            <div
              key={i}
              className={`
                p-2 min-h-12
                ${isCurrentMonth ? "bg-white" : "bg-white text-gray-400"} 
                ${isSelected ? "bg-blue-100 rounded-md" : ""}
                ${
                  isCurrentMonth && !isSelected
                    ? "cursor-pointer hover:bg-gray-50"
                    : ""
                }
              `}
              onClick={() => isCurrentMonth && onDateClick(cloneDay)}
            >
              <div
                className={`text-sm text-center
                ${isSelected ? "font-medium text-blue-600" : ""}
              `}
              >
                {format(day, "d")}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center  justify-between  w-full mb-4 space-x-2">
          <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <span className="font-medium">
            {format(currentMonth, "MMMM yyyy")}
          </span>

          <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500"
          >
            {day}
          </div>
        ))}
      </div>

      {renderCells()}

      <div className=" text-start p-3 bg-gray-50 rounded-md">
        <button className="px-3 py-1.5 text-start bg-blue-600 text-white rounded-md  mb-2 text-sm">
          Choose Time
        </button>
        <div className="flex mb-6 items-center gap-2 ml-3">
          <div>
            <img src={globeicon} />
          </div>
          <h6 className="text-gray-light text-[15px]">Central European Time</h6>
          <div>
            <img
              src={dropdownicon}
              className="cursor-pointor"
              // onClick={() => setShowCalendly(true)}
            />
          </div>
        </div>
        {/* <div className="flex justify-between items-center">
          <span className="text-gray-700">
            Selected: {format(selectedDate, "MMMM d, yyyy")}
          </span>
        </div> */}
        <button className="text-xs h-[60px] sm:text-sm text-purple-300 hover:text-purple-100 whitespace-nowrap px-6 py-2 border border-purple-300 rounded-full hover:bg-gradient-to-r hover:from-[#3D05DD] hover:to-[#EFA4F2] transition-all duration-400 ease-in-out">
          Troubleshooting
        </button>
      </div>

      {/* Calendly Widget */}
      {showCalendly && (
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Select a Time</h3>
            <button
              onClick={() => setShowCalendly(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          <div className="h-[500px]">
            <InlineWidget
              url={calendlyUrl}
              styles={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
