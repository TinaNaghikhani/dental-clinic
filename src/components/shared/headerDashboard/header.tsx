import Link from 'next/link';
import React from 'react';
import { CiLogout } from "react-icons/ci";

export default function Header() {
  return (
    <div className="w-full h-20 bg-sky-700 text-sky-100 m-0 rounded-b-2xl shadow-2xl flex gap-3 justify-between items-center text-2xl p-10">
      <div className='flex gap-3 justify-center items-center'>
        <span>تینا نقی خانی</span>
        <span>خوش آمدید</span>
      </div>
      <Link href={'/'}>
            <CiLogout />

      </Link>

    </div>
  );
}
