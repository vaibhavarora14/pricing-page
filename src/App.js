import React from 'react';
import './App.css';
import PriceCard from './components/price-card/price-card';

function App() {
  return (
    <>
      {/* Tabs */}
      {/* Page */}

      {/* 
        Components to achieve above
        * Tab plugin
        * Button
        * Price Card
      */}

      <PriceCard data={{
        planName: 'vaibhav',
        pricePerLiveTransfer: '$69',
        qualifiedLeadsPerMonth: 20,
        totalPlatformPrice: '$299',
        finalPackagePrice: '$1679'
      }} />
    </>
  );
}

export default App;
