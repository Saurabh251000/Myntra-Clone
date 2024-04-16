import dotenv from "dotenv";
import Razorpay from "razorpay";

dotenv.config();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});


export const checkout = async (req, res) => {
  // setting up options for razorpay order.
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  try {
    const order = await instance.orders.create(options);
    res.status(200).json({
      success: true,
      order,
    })
  } catch (err) {
    res.status(400).send('Not able to create order. Please try again!');
  }
};

export const paymentVerification = async (req, res) => {
  const { razorpay_payment_id, order_id, razorpay_signature } = req.body;
  try {
    generated_signature = hmac_sha256(order_id + "|" + razorpay_payment_id, process.env.RAZORPAY_API_SECRET);
    console.log(generated_signature);
    console.log(razorpay_signature);
    if (generated_signature == razorpay_signature) {
      res.status(200).json({
        success: true,
      })
    } else {
      res.status(503).send('Not valid Signature');
    }

  } catch (err) {
    res.status(400).send('Not able to verify your order. Please try again!');
  }
};

export const getKey = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      key: process.env.RAZORPAY_API_KEY,
    })
  } catch (err) {
    res.status(400).send('Not able send Key ID. Please try again!');
  }
};