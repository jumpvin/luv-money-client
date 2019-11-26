import React from 'react';
import Header from '../../molecules/Header';
import Card from '../../molecules/Card';
import UserFavicon from '../../atoms/UserFavicon';

const ExpsenseDetails = () => (
  <div className='expense-details'>
    <Header>
      All Roomie Pool Expenses
    </Header>
    <Card addClass ='expense'>
      <div>
        <UserFavicon path='https://avatars3.githubusercontent.com/u/47696364?s=460&v=4'/>
        <div>Consume</div>
        <div>12/5/19</div>
        <div>$27.09</div>
        <div>$27.09</div>
      </div>
    </Card>
  </div>
);

export default ExpsenseDetails;
