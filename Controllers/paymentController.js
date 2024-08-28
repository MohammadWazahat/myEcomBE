const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();
const Payment = require("../Models/paymentModel.js");

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

const checkout = async (req, res) => {
  // console.log(req.body);
  // console.log(instance);

  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };
    // console.log(options);
    const order = await instance.orders.create(options);
    // console.log(order);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      error: error,
    });
  }
};

const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect(
      `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};

module.exports = {
  checkout,
  paymentVerification,
};
