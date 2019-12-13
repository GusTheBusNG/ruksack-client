import React from 'react';

import './big-card.scss';

export const BigCard = ({ bigText }) => (
  <div className="big_card">
    <div className="big_card__shade">
      <h3 className="big_card__text">{bigText}</h3>
    </div>
  </div>
)