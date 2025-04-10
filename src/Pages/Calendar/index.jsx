import { useState, useEffect } from "react";
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

  // Replace with your Calendly event type URL
  const BASE_CALENDLY_URL = "https://calendly.com/hasan-niazi333/30min";

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const onDateClick = (day) => {
    setSelectedDate(day);
    setShowCalendly(false);

    // Generate Calendly URL with selected date prefilled
    const dateStr = format(day, "yyyy-MM-dd");
    setCalendlyUrl(`${BASE_CALENDLY_URL}?date=${dateStr}`);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevMonth}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
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

        <h2 className="text-lg font-semibold text-gray-800">
          {format(currentMonth, "MMMM yyyy")}
        </h2>

        <button
          onClick={nextMonth}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
    );
  };

  const renderDays = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500 py-2"
          >
            {day}
          </div>
        ))}
      </div>
    );
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
                h-12 flex items-center justify-center 
                ${isCurrentMonth ? "text-gray-800" : "text-gray-300"} 
                ${isSelected ? "bg-blue-500 text-white rounded-lg" : ""}
                ${
                  isCurrentMonth && !isSelected
                    ? "hover:bg-gray-100 rounded-lg cursor-pointer"
                    : ""
                }
                text-sm font-medium transition-colors
              `}
              onClick={() => isCurrentMonth && onDateClick(cloneDay)}
            >
              <span>{format(day, "d")}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Page>
      <div className="min-h-screen mx-auto max-w-[80rem] bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Schedule a Meeting
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Calendar Section */}
            <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Select a Date
              </h2>
              {renderHeader()}
              {renderDays()}
              {renderCells()}

              {selectedDate && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-blue-600 font-medium">
                    Selected: {format(selectedDate, "EEEE, MMMM d, yyyy")}
                  </p>
                  <button
                    onClick={() => setShowCalendly(true)}
                    className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Choose Time
                  </button>
                </div>
              )}
            </div>

            <div className="w-full lg:w-1/2">
              {showCalendly ? (
                <div className="bg-white rounded-xl shadow-sm p-6 h-full">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Select a Time
                    </h2>
                    <button
                      onClick={() => setShowCalendly(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="h-[600px]">
                    <InlineWidget
                      url={calendlyUrl}
                      styles={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "0.5rem",
                      }}
                      pageSettings={{
                        backgroundColor: "ffffff",
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        primaryColor: "2563eb",
                        textColor: "1f2937",
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm p-6 h-full flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-lg">
                      Select a date to view available times
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default CalendlyScheduler;
