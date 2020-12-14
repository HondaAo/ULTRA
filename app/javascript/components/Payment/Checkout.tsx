import * as React from 'react'
import {StripeProvider, Elements} from 'react-stripe-elements';

import Stripe from './Stripe';

export const Checkout = ({ course }) => {
    console.log(course)
  return (
    <div className="checkout">
    <StripeProvider apiKey="pk_test_51HbGBEE3hSvEQEMsT27MYIrZKVeiRZtnd1vsEUoXMdG9nrYv7QuVYgefWAckO4tIqUeCwAx85YSqhK6EDH1LvXfg00qXOyVSp1">
         <Elements>
             <Stripe id={course.id} charge={course.charge} name={course.title} />
         </Elements>     
    </StripeProvider>
    </div>
  );
};