
import React from 'react';

const QuickActions: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <button className="flex flex-col items-center justify-center p-4 bg-brandWhite border-2 border-brandRed text-brandRed rounded-2xl shadow-sm hover:bg-brandRed hover:text-white transition-all group">
          <i className="fa-solid fa-plus-circle text-2xl mb-2"></i>
          <span className="font-bold">Post Cargo</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 bg-brandWhite border-2 border-brandBlack text-brandBlack rounded-2xl shadow-sm hover:bg-brandBlack hover:text-white transition-all group">
          <i className="fa-solid fa-truck-fast text-2xl mb-2"></i>
          <span className="font-bold">List Truck</span>
        </button>
      </div>
      
      <button className="w-full flex items-center justify-between p-4 bg-brandRed text-white rounded-2xl shadow-lg hover:brightness-110 transition-all animate-pulse-slow">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-bolt-lightning text-xl text-brandGold"></i>
          </div>
          <div className="text-left">
            <p className="font-bold leading-tight">Emergency Dispatch</p>
            <p className="text-xs text-white/80">Need cargo moved ASAP? Click here.</p>
          </div>
        </div>
        <i className="fa-solid fa-chevron-right text-white/50"></i>
      </button>
    </div>
  );
};

export default QuickActions;
