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
        <Tab name='One'>1</Tab>
        <Tab name='Two'>2</Tab>
        <Tab name='Three'>3</Tab>
      </Tabs>
    </>
  );
}

export default App;
