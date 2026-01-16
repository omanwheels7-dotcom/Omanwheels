
import React from 'react';

const DriverListings: React.FC = () => {
  const drivers = [
    { name: 'Ali Khan', truck: '10 Ton Truck', status: 'Available Now', icon: 'fa-user' },
    { name: 'Rashid Transport', truck: 'Trailer Truck', status: 'On Route', icon: 'fa-building' },
    { name: 'Hamid Pickup', truck: 'Pickup Truck', status: 'Nearby', icon: 'fa-location-dot' }
  ];

  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Top Drivers & Trucks</h2>
      <div className="space-y-2">
        {drivers.map((d, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brandLightBlue border border-gray-100">
                <i className={`fa-solid ${d.icon}`}></i>
              </div>
              <div>
                <h4 className="font-bold text-sm">{d.name}</h4>
                <p className="text-[10px] text-gray-500">{d.truck}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                d.status === 'Available Now' ? 'bg-green-100 text-green-700' : 
                d.status === 'On Route' ? 'bg-blue-100 text-blue-700' : 'bg-brandGold/20 text-brandGold'
              }`}>
                {d.status}
              </span>
              <button className="text-brandRed text-[10px] font-bold mt-1">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverListings;
