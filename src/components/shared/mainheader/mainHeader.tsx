import Link from 'next/link';
import React from 'react';
import { MdAccountCircle } from 'react-icons/md';

export default function MainHeader() {
  return (
    <div className="w-full h-20 bg-sky-900 text-sky-100 m-0 rounded-b-2xl shadow-2xl flex gap-3 justify-between items-center text-2xl p-10">
      <span>سیستم نوبت دهی دندانپزشکی</span>
      <Link href={'/login'}>
        <span>
          <MdAccountCircle />
        </span>
      </Link>
    </div>
  );
}
