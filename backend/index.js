import express from "express"
const app = express();
import cors from "cors"
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js"
import connectToMongodb from "./db.js";
import cookieParser from "cookie-parser";

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/users", authRoutes);
app.use("/api/products", productRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectToMongodb();
  console.log(`server running on port ${PORT}`);
});
