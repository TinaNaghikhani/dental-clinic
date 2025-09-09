'use client'; // 👈 حتماً client component باشه چون از state و event استفاده می‌کنه

import React, { useState } from 'react';
import Input from '../base/input/input';
import Buttons from '../base/button/button';
import { loginLoc } from '@/localization/localization';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'; // 👈 برای ریدایرکت بعد از لاگین

export default function LoginhForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // 👈 هک ریدایرکت

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('لطفاً ایمیل و رمز عبور را وارد کنید.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        rtl: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        // ذخیره توکن یا وضعیت لاگین (اختیاری — بسته به بک‌اند)
        // مثلاً: localStorage.setItem('token', data.token);

        toast.success('✅ ورود موفقیت‌آمیز!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
          rtl: true,
        });

        // ریدایرکت به داشبورد بعد از 1.5 ثانیه
        setTimeout(() => {
          router.push('/dashboard');
        }, 1500);
      } else {
        const errorData = await response.json().catch(() => ({}));
        toast.error(`❌ ${errorData.message || 'اطلاعات ورود نادرست است.'}`, {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
          rtl: true,
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('⚠️ خطایی در ارتباط با سرور رخ داد.', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        rtl: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-sky-950 p-5 rounded-4xl w-full max-w-md"> {/* 👈 w-1/2 -> max-w-md برای ریسپانسیو بودن */}
      <div className="border-2 border-white p-5 h-full rounded-4xl flex flex-col items-center justify-center gap-4 text-white">
        <h1 className="text-3xl font-semibold">{loginLoc.system}</h1>
        <h3 className="text-2xl">{loginLoc.welcome}</h3>
        <form
          onSubmit={handleSubmit} // 👈 onSubmit اضافه شد
          className="w-full flex flex-col gap-4 justify-center items-center p-2 m-2"
        >
          <Input
            type="text"
            name="email"
            value={email}
            onChange={(e:any) => setEmail(e.target.value)}
            placeholder="email@gmail.com"
            className="bg-white w-full px-2 py-1 focus:outline-none text-sky-900 rounded-lg"
            label={loginLoc.email}
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e:any) => setPassword(e.target.value)}
            placeholder="T12345"
            className="bg-white w-full px-2 py-1 focus:outline-none text-sky-900 rounded-lg"
            label={loginLoc.password}
          />

          {/* ❌ حذف Link */}
          {/* ✅ فقط دکمه داخل فرم */}
          <Buttons
            type="submit"
            className={`bg-green-600 text-2xl px-4 py-2 rounded-lg w-full hover:bg-green-800 transition-colors ${
              isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
            }`}
            label={isLoading ? 'در حال ورود...' : loginLoc.login}
            disable={isLoading}
          />
        </form>
      </div>
    </div>
  );
}