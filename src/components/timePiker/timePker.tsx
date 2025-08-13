'use client';
import React, { useState } from 'react';

const AppointmentTimeInput = () => {
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

  // ساعات کاری از 9 تا 17
  const hours = Array.from({ length: 9 }, (_, i) => 9 + i); // [9,10,...17]
  // دقیقه‌ها هر نیم ساعت
  const minutes = ['00', '15', '30', '45'];

  return (
    <div className="flex flex-col h-8 space-y-2">
      <div className="flex gap-2">
        {/* ساعت */}
        <select
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          className="w-1/2 px-2 py-1 border shadow-lg rounded-lg focus:outline-none"
        >
          <option value="" disabled>ساعت</option>
          {hours.map((h) => (
            <option key={h} value={h < 10 ? `0${h}` : h}>
              {h < 10 ? `0${h}` : h}
            </option>
          ))}
        </select>

        {/* دقیقه */}
        <select
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
          className="px-2 py-1 w-1/2 border shadow-lg rounded-lg focus:outline-none"
          disabled={!hour} // تا وقتی ساعت انتخاب نشده، دقیقه غیرفعال است
        >
          <option value="" disabled>دقیقه</option>
          {minutes.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      {hour && minute && (
        <p className="mt-2 text-sm text-gray-500">
          زمان انتخاب شده: {hour}:{minute}
        </p>
      )}
    </div>
  );
};

export default AppointmentTimeInput;
