'use client';

import React, { useState, useEffect } from 'react';
import { tableLoc } from '@/localization/localization';
import { MdDeleteForever } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import DeleteModal from '@/components/deletModal/deleteModal';

export default function Tablecomponent() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;

  // Fetch data from backend
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/appointments');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setAppointments(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(appointments.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = appointments.slice(indexOfFirstRecord, indexOfLastRecord);

  // Pagination Handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  // Delete Modal State
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState('');

  const openDeleteModal = (name: string) => {
    setSelectedItemName(name);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    console.log(`Deleting: ${selectedItemName}`);
    setIsDeleteModalOpen(false);
    // TODO: Call delete API and refetch data
  };

  // Render Loading
  if (loading) {
    return (
      <div className="flex justify-center items-center py-15">
        <p className="text-lg text-gray-600">در حال بارگذاری...</p>
      </div>
    );
  }

  // Render Error
  if (error) {
    return (
      <div className="flex justify-center items-center py-15">
        <p className="text-lg text-red-600">خطا در بارگذاری داده‌ها: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center py-15">
      {/* Table */}
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
          </tr>
        </thead>
        <tbody>
          {currentRecords.length > 0 ? (
            currentRecords.map((item, index) => (
              <tr key={item.id || index}>
                <td className="w-[150px] p-2">{item.fullName}</td>
                <td className="w-[150px] p-2">{item.phone}</td>
                <td className="w-[150px] p-2">{item.jalaliDate}</td>
                <td className="w-[150px] p-2">{item.nationalCode}</td>
                <td className="w-[150px] p-2">{item.service}</td>
                <td className="w-[150px] p-2">{item.time}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="p-4 text-gray-500">
                هیچ رکوردی یافت نشد.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${
              currentPage === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-sky-600 text-white hover:bg-sky-700'
            }`}
          >
            قبلی
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? 'bg-sky-700 text-white'
                  : 'bg-white text-sky-700 border border-sky-700 hover:bg-sky-100'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-sky-600 text-white hover:bg-sky-700'
            }`}
          >
            بعدی
          </button>
        </div>
      )}

      {/* Delete Modal */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        itemName={selectedItemName}
      />
    </div>
  );
}