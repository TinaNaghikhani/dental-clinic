// components/DeleteModal.jsx
import React from 'react';
import { DeleteModalProps } from '@/interfaces/interfaces';
export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  itemName,
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50  flex items-center justify-center z-10 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md transform transition-all">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
          </div>
          <p className="text-blackl mb-6">
            آیا از حذف{' '}
            <span className="font-semibold text-red-600">"{itemName}"</span>{' '}
            اطمینان دارید؟
            <br />
            این عمل غیرقابل بازگشت است.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white cursor-pointer font-medium rounded-lg transition-colors duration-200"
            >
              انصراف
            </button>
            <button
              onClick={onConfirm}
              className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white cursor-pointer font-medium rounded-lg transition-colors duration-200"
            >
              حذف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
