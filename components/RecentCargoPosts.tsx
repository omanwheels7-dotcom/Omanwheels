
import React from 'react';

const RecentCargoPosts: React.FC = () => {
  const posts = [
    {
      title: 'Furniture to Dubai',
      weight: '4000 KG',
      route: 'Muscat to Dubai',
      tag: 'Needed Today',
      tagColor: 'bg-brandRed text-white',
      budget: 'OMR 280'
    },
    {
      title: 'Electronics Shipment',
      weight: '2500 KG',
      route: 'Salalah to Riyadh',
      tag: 'Urgent',
      tagColor: 'bg-brandBlack text-brandGold',
      budget: 'OMR 450'
    },
    {
      title: 'General Goods',
      weight: '6000 KG',
      route: 'Nizwa to Sohar',
      tag: 'Budget: OMR 150',
      tagColor: 'bg-gray-100 text-gray-600',
      budget: 'OMR 150'
    }
  ];

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Recent Cargo Posts</h2>
        <button className="text-brandRed text-sm font-semibold">Post Yours</button>
      </div>
      <div className="space-y-4">
        {posts.map((post, idx) => (
          <div key={idx} className="relative overflow-hidden bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
            <div className="absolute top-0 right-0">
               <span className={`text-[10px] font-bold px-4 py-1 rounded-bl-2xl ${post.tagColor}`}>
                {post.tag}
              </span>
            </div>
            <div className="mb-3">
              <h3 className="font-bold text-lg mb-1">{post.title}</h3>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-weight-hanging text-brandGold"></i> {post.weight}
                </span>
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-location-dot text-brandRed"></i> {post.route}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-gray-50">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Estimated Budget</span>
                <span className="font-black text-brandBlack">{post.budget}</span>
              </div>
              <button className="bg-brandLightBlue/10 text-brandLightBlue px-6 py-2 rounded-xl text-xs font-bold hover:bg-brandLightBlue hover:text-white transition-colors">
                Place Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentCargoPosts;
