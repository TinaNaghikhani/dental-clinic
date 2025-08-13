'use client';
import React, { useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
const JalaliDateInput = () => {
  const [date, setDate] = useState(null); // وضعیت انتخاب شده

  return (
    <div className="flex flex-col h-8">
      <DatePicker
        value={date}
        onChange={setDate}
        calendar={persian} // تقویم شمسی
        locale={persian_fa} // زبان فارسی
        format="YYYY/MM/DD" // فرمت تاریخ
        inputClass="px-2 py-1 w-full border shadow-lg rounded-lg focus:outline-none"
        placeholder="تاریخ را انتخاب کنید"
      />
      {date && (
        <p className="mt-2 text-sm text-gray-500">
          تاریخ انتخاب شده: {date.format('YYYY/MM/DD')}
        </p>
      )}
    </div>
  );
};

export default JalaliDateInput;
