
import React, { useState } from 'react';

const FindCargoSection: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const cargoList = [
    {
      id: 1,
      title: 'Construction Materials',
      origin: 'Muscat',
      destination: 'Sohar',
      weight: '12 Tons',
      type: 'Heavy',
      posted: '2h ago',
      price: 'OMR 120',
      contact: '+96891234567',
      owner: 'Oman Builders LLC'
    },
    {
      id: 2,
      title: 'Frozen Seafood Export',
      origin: 'Sur',
      destination: 'Salalah',
      weight: '5 Tons',
      type: 'Reefer',
      posted: '45m ago',
      price: 'OMR 250',
      contact: '+96898765432',
      owner: 'Blue Wave Logistics'
    },
    {
      id: 3,
      title: 'Spare Parts (Palletized)',
      origin: 'Mabella',
      destination: 'Nizwa',
      weight: '800 KG',
      type: 'General',
      posted: '5h ago',
      price: 'OMR 45',
      contact: '+96892223334',
      owner: 'Ahmed Al-Farsi'
    }
  ];

  const filteredCargo = filter === 'All' ? cargoList : cargoList.filter(c => c.type === filter);

  const handleAction = (type: 'whatsapp' | 'call', contact: string, title: string) => {
    if (type === 'call') {
      window.location.href = `tel:${contact}`;
    } else {
      const msg = encodeURIComponent(`Hi, I'm a transporter interested in moving your cargo: ${title}. Is it still available?`);
      window.open(`https://wa.me/${contact.replace('+', '')}?text=${msg}`, '_blank');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center px-1">
        <h2 className="font-bold text-xl">Available Cargo</h2>
        <div className="flex gap-2">
          {['All', 'Heavy', 'General'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`text-[10px] px-3 py-1 rounded-full border transition-all ${filter === f ? 'bg-brandBlack text-white border-brandBlack' : 'border-gray-200 text-gray-500'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filteredCargo.map((cargo) => (
          <div key={cargo.id} className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-[10px] font-bold text-brandLightBlue uppercase tracking-widest">{cargo.type}</span>
                <h3 className="font-bold text-lg leading-tight">{cargo.title}</h3>
                <p className="text-xs text-gray-400">Posted by {cargo.owner} • {cargo.posted}</p>
              </div>
              <div className="text-right">
                <span className="text-brandRed font-black text-lg">{cargo.price}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3 mb-4">
              <div className="flex flex-col items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="w-0.5 h-4 bg-gray-200"></div>
                <div className="w-2 h-2 rounded-full bg-brandRed"></div>
              </div>
              <div className="flex-1 text-sm font-medium">
                <p>{cargo.origin}</p>
                <div className="h-4"></div>
                <p>{cargo.destination}</p>
              </div>
              <div className="border-l border-gray-200 pl-4 text-center">
                <p className="text-[10px] text-gray-400 uppercase font-bold">Weight</p>
                <p className="font-bold text-brandBlack">{cargo.weight}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={() => handleAction('call', cargo.contact, cargo.title)}
                className="flex-1 bg-brandBlack text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <i className="fa-solid fa-phone"></i> Call Owner
              </button>
              <button 
                onClick={() => handleAction('whatsapp', cargo.contact, cargo.title)}
                className="flex-1 bg-green-600 text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <i className="fa-brands fa-whatsapp"></i> Send Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindCargoSection;
