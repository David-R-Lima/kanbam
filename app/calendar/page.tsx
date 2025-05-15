'use client'

import { useState } from "react";

export default function Calendar() {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getCalendarDays = (year: number, month: number) => {
        const days = [];

        const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sunday
        const currentMonthDays = getDaysInMonth(year, month);
        const prevMonthDays = getDaysInMonth(year, month - 1);

        // Previous month's tail days
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
            days.push({
                day: prevMonthDays - i,
                currentMonth: false,
            });
        }

        // Current month days
        for (let i = 1; i <= currentMonthDays; i++) {
            days.push({
                day: i,
                currentMonth: true,
            });
        }

        // Next month's leading days
        while (days.length < 35) {
            days.push({
                day: days.length - (firstDayOfMonth + currentMonthDays) + 1,
                currentMonth: false,
            });
        }

        return days;
    };

    const handlePrevMonth = () => {
        if (month === 0) {
            setMonth(11);
            setYear(prev => prev - 1);
        } else {
            setMonth(prev => prev - 1);
        }
    };

    const handleNextMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear(prev => prev + 1);
        } else {
            setMonth(prev => prev + 1);
        }
    };

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const days = getCalendarDays(year, month);
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
        <div className="flex flex-col h-[90%] bg-gray-100 rounded-lg m-10 p-6">
            
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={handlePrevMonth}
                    className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                    ← Prev
                </button>
                <h2 className="text-xl font-bold">
                    {monthNames[month]} {year}
                </h2>
                <button
                    onClick={handleNextMonth}
                    className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                    Next →
                </button>
            </div>

            <div className="grid grid-cols-7 mb-2 text-center font-semibold text-gray-700">
                {weekdays.map((day, index) => (
                    <div key={index} className="uppercase">
                        {day}
                    </div>
                ))}
            </div>

            <div className="flex-1 grid grid-cols-7 grid-rows-5 gap-2">
                {days.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center rounded shadow 
                            ${item.currentMonth ? 'bg-white text-black' : 'bg-gray-200 text-gray-400'}`}
                    >
                        {item.day}
                    </div>
                ))}
            </div>
        </div>
    );
}
