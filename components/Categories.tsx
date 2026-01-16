
import React from 'react';

const Categories: React.FC = () => {
  const cats = [
    { name: 'Truck Drivers', icon: 'fa-id-badge', color: 'bg-blue-500' },
    { name: 'Transport Cos', icon: 'fa-building', color: 'bg-purple-500' },
    { name: 'Indiv. Owners', icon: 'fa-user-tag', color: 'bg-brandRed' },
    { name: 'Cargo Agents', icon: 'fa-ship', color: 'bg-emerald-500' },
    { name: 'Warehouses', icon: 'fa-warehouse', color: 'bg-amber-500' },
    { name: 'Customs Agents', icon: 'fa-file-invoice', color: 'bg-indigo-500' }
  ];

  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Categories</h2>
      <div className="grid grid-cols-3 gap-3">
        {cats.map((cat, idx) => (
          <button key={idx} className="flex flex-col items-center gap-2 p-3 bg-white border border-gray-100 rounded-2xl shadow-sm active:scale-95 transition-transform">
            <div className={`w-10 h-10 ${cat.color} text-white rounded-xl flex items-center justify-center shadow-lg shadow-${cat.color.split('-')[1]}-200/50`}>
              <i className={`fa-solid ${cat.icon}`}></i>
            </div>
            <span className="text-[10px] font-bold text-center leading-tight text-gray-700">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
