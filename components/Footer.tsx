
import React from 'react';

const Footer: React.FC = () => {
  const navItems = [
    { icon: 'fa-house', label: 'Home', active: true },
    { icon: 'fa-magnifying-glass', label: 'Search', active: false },
    { icon: 'fa-circle-plus', label: 'Post', active: false },
    { icon: 'fa-message', label: 'Messages', active: false },
    { icon: 'fa-user', label: 'Account', active: false }
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/80 backdrop-blur-md border-t border-gray-100 py-3 px-6 flex justify-between items-center z-50 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      {navItems.map((item, idx) => (
        <button key={idx} className="flex flex-col items-center gap-1 group">
          <div className={`text-xl transition-all ${item.active ? 'text-brandRed transform -translate-y-1' : 'text-gray-400 group-hover:text-brandBlack'}`}>
            <i className={`fa-solid ${item.icon}`}></i>
          </div>
          <span className={`text-[10px] font-bold tracking-tight ${item.active ? 'text-brandRed' : 'text-gray-400'}`}>
            {item.label}
          </span>
          {item.active && <div className="w-1 h-1 bg-brandRed rounded-full mt-0.5"></div>}
        </button>
      ))}
    </nav>
  );
};

export default Footer;
