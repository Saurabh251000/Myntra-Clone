import express from "express";
import { checkout, paymentVerification, getKey } from "../controllers/payment.controller.js";

const router = express.Router();
// console.log("routes aaya");

router.post("/checkout", checkout);
router.post("/verify", paymentVerification);
router.get("/getKey", getKey);


export default router;
