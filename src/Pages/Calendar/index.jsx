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
import Page from "../../components/Page";

const CalendlyScheduler = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendly, setShowCalendly] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState("");

  const BASE_CALENDLY_URL = "https://calendly.com/hasan-niazi333/30min";

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const onDateClick = (day) => {
    setSelectedDate(day);
    setShowCalendly(false);
    const dateStr = format(day, "yyyy-MM-dd");
    setCalendlyUrl(`${BASE_CALENDLY_URL}?date=${dateStr}`);
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
      <div className="grid grid-cols-7">
        {days.map((day, i) => {
          const cloneDay = new Date(day);
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isSelected = selectedDate && isSameDay(day, selectedDate);

          return (
            <div
              key={i}
              className={`
                p-2 border border-gray-200 min-h-12
                ${isCurrentMonth ? "bg-white" : "bg-gray-50"} 
                ${isSelected ? "bg-blue-50 border-blue-200" : ""}
                ${i < 7 ? "border-t-0" : ""}  // Remove top border for first row
                ${i % 7 === 0 ? "border-l-0" : ""}  // Remove left border for first column
              `}
              onClick={() => isCurrentMonth && onDateClick(cloneDay)}
            >
              <div className={`text-sm text-center
                ${isCurrentMonth ? "text-gray-800" : "text-gray-400"} 
                ${isSelected ? "font-medium text-blue-600" : ""}
              `}>
                {format(day, "d")}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Page>
      <div className="max-w-4xl mx-auto p-4">
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          {/* Calendar Header */}
          <div className="bg-white p-4 border-b border-gray-300">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Noteva Product Demo</h2>
              <div className="flex items-center space-x-4">
                <span className="font-medium">{format(currentMonth, "MMMM yyyy")}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={prevMonth}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
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
                  <button
                    onClick={nextMonth}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
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
            </div>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 bg-gray-100 border-b border-gray-300">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          {renderCells()}

          {/* Selected Date */}
          {selectedDate && (
            <div className="bg-white p-4 border-t border-gray-300">
              <div className="flex justify-between items-center">
                <p className="text-gray-700">
                  Selected: <span className="font-medium">{format(selectedDate, "MMMM d, yyyy")}</span>
                </p>
                <button
                  onClick={() => setShowCalendly(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Choose Time
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Calendly Widget */}
        {showCalendly && (
          <div className="mt-4 border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-white p-4 border-b border-gray-300">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Select a Time</h3>
                <button
                  onClick={() => setShowCalendly(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="h-[600px]">
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
    </Page>
  );
};

export default CalendlyScheduler;