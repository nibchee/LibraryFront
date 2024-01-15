import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51OYTGcSHMohIIJi2wA6PPafa1jdv47T9shvOaAAQq8Y78BmyLn781M6BLbZgaon74Ztzlz2PvNW1JcB7EfJho3Fx00HrkhCbFV');
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>

  </BrowserRouter>
);

