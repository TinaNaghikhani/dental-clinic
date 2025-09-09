'use client'
// components/Tablecomponent.jsx
import React, { useState } from 'react';
import { tableLoc } from '@/localization/localization';
import { MdDeleteForever } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import DeleteModal from '@/components/deletModal/deleteModal'; // مسیر رو با توجه به ساختار پروژه‌ات اصلاح کن

export default function Tablecomponent() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState('');

  const openDeleteModal = (name: React.SetStateAction<string>) => {
    setSelectedItemName(name);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    // اینجا منطق حذف واقعی رو اجرا کن (مثلاً API call)
    console.log(`Deleting: ${selectedItemName}`);
    setIsDeleteModalOpen(false);
    // مثلاً state رو آپدیت کن یا refetch کن
  };

  return (
    <div className="flex flex-col justify-center items-center py-15">
      <table className="bg-amber-50 w-3/4 text-center p-2 shadow-xl rounded-lg">
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
            <td className="w-[150px] p-2">10:30</td>
            <td className="w-[150px] p-2 flex gap-6 justify-center">
              <FaEye className="text-blue-500 hover:text-blue-700 cursor-pointer w-6 h-6" />
              <MdDeleteForever
                className="w-6 h-6 text-red-500 hover:text-red-800 cursor-pointer"
                onClick={() => openDeleteModal("تینا نقی خانی")}
              />
            </td>
          </tr>
          {/* می‌تونی ردیف‌های بیشتری اضافه کنی */}
        </tbody>
      </table>

      {/* مودال حذف */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        itemName={selectedItemName}
      />
    </div>
  );
}