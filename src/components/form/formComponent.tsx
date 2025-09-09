'use client';
import React, { useState } from 'react';
import Input from '../base/input/input';
import Buttons from '../base/button/button';
import { servicesDentalLoc } from '@/localization/localization';
import { formBtnLoc } from '@/localization/localization';
import { inputPlaceholder } from '@/localization/localization';
import JalaliDateInput from '../jalaliCalender/jalaliCalender';
import AppointmentTime from '../timePiker/timePker';
import { toast } from 'react-toastify';

export default function FormComponent() {
  // Stateها برای مدیریت دستی مقادیر تاریخ و ساعت
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // برای مدیریت لودینگ

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const formValues: Record<string, string> = Object.fromEntries(formData.entries());

  formValues.jalaliDate = selectedDate;
  formValues.appointmentTime = selectedTime;

  if (!formValues.fullName || !formValues.phone || !selectedDate || !selectedTime) {
    toast.error('لطفاً تمام فیلدهای اجباری را پر کنید.', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      rtl: true,
    });
    return;
  }

  setIsSubmitting(true);

  try {
    const baseUrl = 'http://127.0.0.1:5000';
    const response = await fetch(`${baseUrl}/api/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    });

    if (response.ok) {
      const result = await response.json();
      toast.success('✅ نوبت شما با موفقیت ثبت شد!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        rtl: true,
      });
      e.currentTarget.reset();
      setSelectedDate('');
      setSelectedTime('');
    } else {
      const errorData = await response.json().catch(() => ({}));
      toast.error(`❌ ${errorData.message || 'مشکلی در ثبت نوبت پیش آمد.'}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        rtl: true,
      });
    }
  } catch (error) {
    console.error('Submission error:', error);
    toast.error('⚠️ خطایی در ارتباط با سرور رخ داد. لطفاً دوباره تلاش کنید.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      rtl: true,
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="w-full rounded-lg shadow-2xl bg-white p-4 m-3">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-start"
      >
        {/* نام */}
        <Input
          type="text"
          name="fullName"
          className="w-full px-3 py-2 border shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={inputPlaceholder.name}
          label=""
        />

        {/* شماره موبایل */}
        <Input
          type="number"
          name="phone"
          className="w-full px-3 py-2 border shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={inputPlaceholder.phone}
          label=""
        />

        {/* کد ملی */}
        <Input
          type="number"
          name="nationalCode"
          className="w-full px-3 py-2 border shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={inputPlaceholder.nationalCode}
          label=""
        />

        {/* تاریخ جلالی */}
        <div className="col-span-1 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            تاریخ نوبت
          </label>
          <JalaliDateInput
            value={selectedDate}
            onChange={(date: string) => setSelectedDate(date)} // 👈 فرض: کامپوننت onChange می‌پذیرد
            placeholder="روز/ماه/سال"
            className="w-full px-3 py-2 border shadow-lg rounded-lg focus:outline-none"
          />
        </div>

        {/* ساعت نوبت */}
        <div className="col-span-1 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ساعت نوبت
          </label>
          <AppointmentTime
            value={selectedTime}
            onChange={(time: string) => setSelectedTime(time)} // 👈 فرض: onChange پذیرد
            placeholder="انتخاب ساعت"
            className="w-full px-3 py-2 border shadow-lg rounded-lg focus:outline-none"
          />
        </div>

        {/* خدمات */}
        <div className="col-span-1 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            نوع خدمت
          </label>
          <select
            name="services"
            defaultValue="default"
            className="w-full h-10 px-3 py-2 border shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default" disabled>
              {servicesDentalLoc.defult}
            </option>
            <option value="Scaling">{servicesDentalLoc.Scaling}</option>
            <option value="dentalComposite">
              {servicesDentalLoc.dentalComposite}
            </option>
            <option value="dentalFilling">
              {servicesDentalLoc.dentalFilling}
            </option>
            <option value="dentalImplant">
              {servicesDentalLoc.dentalImplant}
            </option>
            <option value="gumSurgery">{servicesDentalLoc.gumSurgery}</option>
            <option value="laminate">{servicesDentalLoc.laminate}</option>
            <option value="wisdomToothExtraction">
              {servicesDentalLoc.wisdomToothExtraction}
            </option>
            <option value="orthodontics">
              {servicesDentalLoc.orthodontics}
            </option>
            <option value="rootCanalTreatment">
              {servicesDentalLoc.rootCanalTreatment}
            </option>
            <option value="toothExtraction">
              {servicesDentalLoc.toothExtraction}
            </option>
            <option value="checkup">{servicesDentalLoc.checkup}</option>
          </select>
        </div>

        {/* دکمه ارسال */}
        <div className="col-span-1 md:col-span-3 flex justify-center mt-4">
          <Buttons
            type="submit"
            className={`px-6 py-2 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
            }`}
            label={isSubmitting ? 'در حال ارسال...' : formBtnLoc.register}
            disable={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
}
