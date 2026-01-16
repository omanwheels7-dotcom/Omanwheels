
import React from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'truck', label: 'Find Truck', icon: 'fa-truck' },
    { id: 'cargo', label: 'Find Cargo', icon: 'fa-box' },
    { id: 'driver', label: 'Find Driver', icon: 'fa-id-card' }
  ];

  return (
    <header className="bg-brandBlack text-brandWhite p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brandRed rounded-full flex items-center justify-center">
            <i className="fa-solid fa-dharmachakra text-brandGold text-lg"></i>
          </div>
          <h1 className="font-bold text-xl tracking-tight">
            Oman<span className="text-brandRed">Wheels</span>
          </h1>
        </div>
        <button className="p-2 bg-gray-800 rounded-full relative">
          <i className="fa-solid fa-bell text-brandGold"></i>
          <span className="absolute top-1 right-1 w-2 h-2 bg-brandRed rounded-full border border-gray-800"></span>
        </button>
      </div>
      
      <div className="flex bg-gray-900/50 p-1 rounded-xl gap-1">
        {tabs.map((tab) => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 rounded-lg text-xs font-semibold flex flex-col items-center gap-1 transition-all
              ${activeTab === tab.id ? 'bg-brandRed text-white shadow-lg scale-105' : 'text-gray-400 hover:text-white'}`}
          >
            <i className={`fa-solid ${tab.icon} text-sm`}></i>
            {tab.label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
