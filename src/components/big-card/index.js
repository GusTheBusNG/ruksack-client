import React from 'react';

import './big-card.scss';

export const BigCard = (props) => (
  <div {...props} className="big_card">
    <div className="big_card__shade">
      <h2 className="big_card__text">{props.bigText}</h2>
    </div>
  </div>
)