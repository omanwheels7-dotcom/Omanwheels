
import React from 'react';

const PopularRoutes: React.FC = () => {
  const routes = [
    { from: 'Muscat', to: 'Salalah', color: 'bg-orange-50 text-orange-600', icon: '🇴🇲' },
    { from: 'Oman', to: 'UAE', color: 'bg-blue-50 text-blue-600', icon: '🇦🇪' },
    { from: 'Oman', to: 'KSA', color: 'bg-green-50 text-green-600', icon: '🇸🇦' }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Popular Routes</h2>
        <button className="text-brandLightBlue text-sm font-semibold">View All</button>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {routes.map((route, idx) => (
          <div key={idx} className={`min-w-[160px] p-3 rounded-2xl border border-transparent shadow-sm flex flex-col gap-2 ${route.color}`}>
            <div className="flex items-center justify-between">
              <span className="text-xl">{route.icon}</span>
              <i className="fa-solid fa-arrow-right-long opacity-50"></i>
            </div>
            <p className="font-bold text-sm whitespace-nowrap">{route.from} to {route.to}</p>
            <p className="text-[10px] opacity-80 uppercase tracking-wider font-medium">Daily Trips</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRoutes;
