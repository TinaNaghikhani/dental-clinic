import React from 'react';
import { tableLoc } from '@/localization/localization';
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";

export default function Tablecomponent() {
  return (
    <div className="flex flex-col justify-center items-center py-15">
      <table className="bg-amber-50 w-3/4 text-center p-2 shadow-xl">
        <thead className="p-2">
          <tr>
            <th className="w-[150px] p-2 bg-sky-700 text-white">
              {tableLoc.th1}
            </th>
            <th className="w-[150px] p-2 bg-sky-700 text-white">
              {tableLoc.th2}
            </th>
            <th className="w-[150px] p-2 bg-sky-700 text-white">
              {tableLoc.th3}
            </th>
            <th className="w-[150px] p-2 bg-sky-700 text-white">
              {tableLoc.th4}
            </th>
            <th className="w-[150px] p-2 bg-sky-700 text-white">
              {tableLoc.th5}
            </th>
            <th className="w-[150px] p-2 bg-sky-700 text-white">
              {tableLoc.th6}
            </th>
            <th className="w-[150px] p-2 bg-sky-700 text-white">
              {tableLoc.th7}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-[150px] p-2">تینا نقی خانی</td>
            <td className="w-[150px] p-2">09039738895</td>
            <td className="w-[150px] p-2">سه شنبه</td>
            <td className="w-[150px] p-2">0150348975</td>
            <td className="w-[150px] p-2">عصب کشی</td>
            <td className="w-[150px] p-2">رضا کریمی</td>
            <td className="w-[150px] p-2 flex gap-6"><FaEye className='text-blue-500 hover:text-blue-700 cursor-pointer  w-6 h-6'/><MdDeleteForever className='w-6 h-6 text-red-500 hover:text-red-800 cursor-pointer'/></td>
          </tr>
          <tr>
            <td className="w-[150px] p-2">تینا نقی خانی</td>
            <td className="w-[150px] p-2">09039738895</td>
            <td className="w-[150px] p-2">سه شنبه</td>
            <td className="w-[150px] p-2">0150348975</td>
            <td className="w-[150px] p-2">عصب کشی</td>
            <td className="w-[150px] p-2">رضا کریمی</td>
            <td className="w-[150px] p-2 flex gap-6"><FaEye className='text-blue-500 hover:text-blue-700 cursor-pointer  w-6 h-6'/><MdDeleteForever className='w-6 h-6 text-red-500 hover:text-red-800 cursor-pointer'/></td>
          </tr>
          <tr>
            <td className="w-[150px] p-2">تینا نقی خانی</td>
            <td className="w-[150px] p-2">09039738895</td>
            <td className="w-[150px] p-2">سه شنبه</td>
            <td className="w-[150px] p-2">0150348975</td>
            <td className="w-[150px] p-2">عصب کشی</td>
            <td className="w-[150px] p-2">رضا کریمی</td>
            <td className="w-[150px] p-2 flex gap-6"><FaEye className='text-blue-500 hover:text-blue-700 cursor-pointer w-6 h-6'/><MdDeleteForever className='w-6 h-6 text-red-500 hover:text-red-800 cursor-pointer'/></td>
          </tr>
          <tr>
            <td className="w-[150px] p-2">تینا نقی خانی</td>
            <td className="w-[150px] p-2">09039738895</td>
            <td className="w-[150px] p-2">سه شنبه</td>
            <td className="w-[150px] p-2">0150348975</td>
            <td className="w-[150px] p-2">عصب کشی</td>
            <td className="w-[150px] p-2">رضا کریمی</td>
            <td className="w-[150px] p-2 flex gap-6"><FaEye className='text-blue-500 hover:text-blue-700 cursor-pointer  w-6 h-6'/><MdDeleteForever className='w-6 h-6 text-red-500 hover:text-red-800 cursor-pointer'/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
