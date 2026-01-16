
import React, { useState, useRef } from 'react';

const AccountSection: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-brandBlack text-white p-6 rounded-3xl mx-4 mb-6 shadow-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brandRed/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
      
      <div className="flex flex-col items-center gap-4 relative z-10">
        <div className="relative group">
          <div className="w-24 h-24 rounded-full border-4 border-brandRed overflow-hidden bg-gray-800 flex items-center justify-center shadow-lg">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <i className="fa-solid fa-user text-4xl text-gray-500"></i>
            )}
          </div>
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-0 right-0 w-8 h-8 bg-brandGold text-brandBlack rounded-full flex items-center justify-center border-2 border-brandBlack hover:scale-110 transition-transform"
          >
            <i className="fa-solid fa-camera text-xs"></i>
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            accept="image/*" 
            className="hidden" 
          />
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold">Account Holder Name</h2>
          <p className="text-brandGold text-xs font-semibold uppercase tracking-widest">Verified Transporter</p>
        </div>

        <div className="grid grid-cols-3 w-full gap-2 mt-2">
            <div className="bg-white/5 rounded-xl p-2 text-center">
                <p className="text-[10px] text-gray-400">Total Trips</p>
                <p className="font-bold">124</p>
            </div>
            <div className="bg-white/5 rounded-xl p-2 text-center">
                <p className="text-[10px] text-gray-400">Rating</p>
                <p className="font-bold text-brandGold">4.9</p>
            </div>
            <div className="bg-white/5 rounded-xl p-2 text-center">
                <p className="text-[10px] text-gray-400">Earnings</p>
                <p className="font-bold">OMR 1.2k</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
