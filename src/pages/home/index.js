import React from 'react';
import { OurNavBar } from '../../components/navbar';
import Button from 'react-bootstrap/Button';

import './home.scss';

export const Home = () => (
  <>
    <OurNavBar />
    <Button variant="primary">Primary</Button>
  </>
);