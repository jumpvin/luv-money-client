import React from 'react';
import Header from '../../molecules/Header';
import WelcomeHeader from '../../atoms/WelcomeHeader';
import OweCard from '../../organisms/OweCardList';

const Dashboard = () => (
  <div>
    <Header>
      <WelcomeHeader 
        name='Anu'
        amount={3}
      />
    </Header>
    <OweCard />
  </div>
);

export default Dashboard;
