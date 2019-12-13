import React from 'react';

import './medium-card.scss';

export const MediumCard = ({
  bigText,
  backgroundImageUrl="https://res.cloudinary.com/dnglix0tu/image/upload/v1576275464/bike%20registration/make-your-event.jpg"
}) => (
  <div className="md_card" style={{ backgroundImage: `url(${backgroundImageUrl})`}}>
    <div className="md_card__shade">
      <h2 className="md_card__text">{bigText}</h2>
    </div>
  </div>
);