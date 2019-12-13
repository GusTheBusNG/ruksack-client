import React from 'react';
import { OurNavBar } from '../../components/navbar';
import { BigCard } from '../../components/big-card';

import './home.scss';

export const Home = () => (
  <>
    <OurNavBar />
    <div className="home_card_layout">
      <BigCard bigText="Find Your Race" />
    </div>
  </>
);