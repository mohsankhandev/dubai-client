// server/routes/payment.js
const express = require('express');
const { handlePayment, getUserCourses } = require('../controllers/PaymentController');
const router = express.Router();

router.post('/purchase', handlePayment);
router.get('/user-courses/:userId', getUserCourses);

module.exports = router;







// // routes/payments.js
// const express = require('express');
// const { makePayment ,getPayments} = require('../Controller/paymentController');
// const router = express.Router();

// router.post('/', makePayment);
// router.get('/',  getPayments);


// module.exports = router;










// const express = require('express');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// const router = express.Router();

// router.post('/create-checkout-session', async (req, res) => {
//   const { price } = req.body;
  
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'Course',
//           },
//           unit_amount: price * 100, // amount in cents
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: 'http://localhost:3000/success',
//     cancel_url: 'http://localhost:3000/cancel',
//   });

//   res.json({ id: session.id });
// });

// module.exports = router;
