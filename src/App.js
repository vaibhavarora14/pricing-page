import React from 'react';
import './App.css';
import PriceCard from './components/price-card/price-card';
import { Tabs, Tab } from './components/tab/tab';

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

      <Tabs>
        <Tab name='Tab 1'>Tab 1 Content</Tab>
        <Tab selected name='Tab 2'>Tab 2 Content</Tab>
        <Tab name='Tab 3'>Tab 3 Content</Tab>
      </Tabs>
    </>
  );
}

export default App;
