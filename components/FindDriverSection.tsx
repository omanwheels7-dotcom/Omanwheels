
import React, { useState } from 'react';

const FindDriverSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const drivers = [
    {
      id: 1,
      name: 'Mohammed Al-Balushi',
      experience: '12 Years',
      location: 'Muscat / Seeb',
      specialty: 'Heavy Duty',
      rating: 4.9,
      reviews: 142,
      available: true,
      contact: '+96891112223',
      truckType: 'Flatbed Trailer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammed'
    },
    {
      id: 2,
      name: 'Saeed Al-Harthy',
      experience: '8 Years',
      location: 'Sohar / Shinas',
      specialty: 'Dangerous Goods',
      rating: 4.7,
      reviews: 89,
      available: true,
      contact: '+96894445556',
      truckType: 'Chemical Tanker',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Saeed'
    },
    {
      id: 3,
      name: 'Yousuf Al-Jabri',
      experience: '5 Years',
      location: 'Salalah / Dhofar',
      specialty: 'Refrigerated',
      rating: 4.8,
      reviews: 64,
      available: false,
      contact: '+96897778889',
      truckType: 'Chiller Truck',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yousuf'
    }
  ];

  const filters = ['All', 'Heavy Duty', 'Refrigerated', 'Dangerous Goods'];
  const filteredDrivers = activeFilter === 'All' ? drivers : drivers.filter(d => d.specialty === activeFilter);

  const handleContact = (type: 'whatsapp' | 'call', contact: string, name: string) => {
    if (type === 'call') {
      window.location.href = `tel:${contact}`;
    } else {
      const msg = encodeURIComponent(`Hello ${name}, I found your profile on OmanWheels and I would like to hire you for a transport job.`);
      window.open(`https://wa.me/${contact.replace('+', '')}?text=${msg}`, '_blank');
    }
  };

  return (
    <div className="space-y-6">
      <div className="px-1">
        <h2 className="font-bold text-xl mb-3">Top-Rated Drivers</h2>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap text-xs px-4 py-2 rounded-full border transition-all ${activeFilter === f ? 'bg-brandBlack text-white border-brandBlack shadow-md' : 'bg-white border-gray-200 text-gray-500 hover:border-brandRed'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredDrivers.map((driver) => (
          <div key={driver.id} className="bg-white border border-gray-100 rounded-[2rem] p-5 shadow-sm hover:shadow-lg transition-all">
            <div className="flex gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gray-100 overflow-hidden border border-gray-200">
                  <img src={driver.image} alt={driver.name} className="w-full h-full object-cover" />
                </div>
                {driver.available && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-brandBlack">{driver.name}</h3>
                    <p className="text-[10px] text-brandRed font-bold uppercase tracking-widest">{driver.specialty}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-brandGold/10 px-2 py-0.5 rounded-lg">
                    <i className="fa-solid fa-star text-brandGold text-[10px]"></i>
                    <span className="text-xs font-bold text-brandGold">{driver.rating}</span>
                  </div>
                </div>
                
                <div className="mt-2 grid grid-cols-2 gap-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <i className="fa-solid fa-briefcase text-[10px] text-gray-400"></i>
                    <span>{driver.experience}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <i className="fa-solid fa-truck text-[10px] text-gray-400"></i>
                    <span>{driver.truckType}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 col-span-2">
                    <i className="fa-solid fa-location-dot text-[10px] text-gray-400"></i>
                    <span>{driver.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-5">
              <button 
                onClick={() => handleContact('call', driver.contact, driver.name)}
                className="flex-1 bg-brandBlack text-white py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <i className="fa-solid fa-phone"></i> Call Driver
              </button>
              <button 
                onClick={() => handleContact('whatsapp', driver.contact, driver.name)}
                className="flex-1 border-2 border-green-600 text-green-600 py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform hover:bg-green-50"
              >
                <i className="fa-brands fa-whatsapp"></i> WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredDrivers.length === 0 && (
        <div className="text-center py-12">
          <i className="fa-solid fa-user-slash text-4xl text-gray-200 mb-3"></i>
          <p className="text-gray-500 text-sm">No drivers found matching this specialty.</p>
        </div>
      )}
    </div>
  );
};

export default FindDriverSection;
