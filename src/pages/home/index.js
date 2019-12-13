import React from 'react';
import { OurNavBar } from '../../components/navbar';
import { BigCard } from '../../components/big-card';
import { MediumCard } from '../../components/md-card';

import './home.scss';

export const Home = () => (
  <>
    <OurNavBar />
    <div className="home_card_layout">
      <BigCard id="find-your-race-card" bigText="Find Your Race" />
      <MediumCard bigText="Create Your Race" />
      <MediumCard
        bigText="View Your Results"
        backgroundImageUrl="https://res.cloudinary.com/dnglix0tu/image/upload/v1576277090/bike%20registration/see-your-results.jpg"
      />
    </div>
  </>
);