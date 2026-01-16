
import React from 'react';

const FeaturedListings: React.FC = () => {
  const listings = [
    {
      name: 'Ahmed Transport',
      details: '10 Ton Truck | Muscat to Dubai',
      status: 'Available Now',
      statusColor: 'bg-green-100 text-green-700',
      rating: 4.8,
      phone: '+96890000001'
    },
    {
      name: 'Salim Al Said',
      details: 'Pickup Truck | Muscat to Salalah',
      status: 'On Trip',
      statusColor: 'bg-amber-100 text-amber-700',
      rating: 4.5,
      phone: '+96890000002'
    }
  ];

  const handleWhatsApp = (phone: string, name: string) => {
    const message = encodeURIComponent(`Hello ${name}, I saw your listing on OmanWheels and I'm interested in your services.`);
    window.open(`https://wa.me/${phone.replace('+', '')}?text=${message}`, '_blank');
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Featured Listings</h2>
        <span className="bg-brandGold/10 text-brandGold px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest">Premium</span>
      </div>
      <div className="space-y-3">
        {listings.map((item, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-brandBlack">
                  <i className="fa-solid fa-truck-moving text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-brandBlack">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.details}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-brandGold mb-1">
                  <i className="fa-solid fa-star text-[10px]"></i>
                  <span className="text-xs font-bold">{item.rating}</span>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${item.statusColor}`}>
                  {item.status}
                </span>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button 
                onClick={() => handleCall(item.phone)}
                className="flex-1 py-2 bg-brandBlack text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-phone"></i> Call
              </button>
              <button 
                onClick={() => handleWhatsApp(item.phone, item.name)}
                className="flex-1 py-2 bg-green-600 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2"
              >
                <i className="fa-brands fa-whatsapp"></i> WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;
