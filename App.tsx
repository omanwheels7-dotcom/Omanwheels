
import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import QuickActions from './components/QuickActions';
import PopularRoutes from './components/PopularRoutes';
import FeaturedListings from './components/FeaturedListings';
import Categories from './components/Categories';
import DriverListings from './components/DriverListings';
import RecentCargoPosts from './components/RecentCargoPosts';
import Footer from './components/Footer';
import AccountSection from './components/AccountSection';
import FindCargoSection from './components/FindCargoSection';
import FindDriverSection from './components/FindDriverSection';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('truck'); // 'truck', 'cargo', 'driver'

  const renderContent = () => {
    switch (activeTab) {
      case 'cargo':
        return (
          <div className="p-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <FindCargoSection />
          </div>
        );
      case 'driver':
        return (
          <div className="p-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <FindDriverSection />
          </div>
        );
      default:
        return (
          <div className="animate-in fade-in duration-500">
            {/* Account & Profile */}
            <section className="pt-6">
              <AccountSection />
            </section>

            {/* Hero & Search Section */}
            <section className="px-4">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </section>

            {/* Action Buttons */}
            <section className="px-4 py-6">
              <QuickActions />
            </section>

            {/* Popular Routes */}
            <section className="px-4 py-4">
              <PopularRoutes />
            </section>

            {/* Categories */}
            <section className="px-4 py-4 bg-gray-50">
              <Categories />
            </section>

            {/* Featured Listings */}
            <section className="px-4 py-4">
              <FeaturedListings />
            </section>

            {/* Drivers / Trucks */}
            <section className="px-4 py-4 bg-gray-50">
              <DriverListings />
            </section>

            {/* Recent Cargo Posts */}
            <section className="px-4 py-4">
              <RecentCargoPosts />
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto bg-white shadow-2xl relative border-x border-gray-100">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-y-auto pb-24">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
