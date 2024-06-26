require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const c2c_orderRoutes = require("./routes/c2c_orders")
const fundoutRoutes = require("./routes/fundout")
const paymentRoutes = require("./routes/payment")
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/c2c_order", c2c_orderRoutes);
app.use("/api/fundout", fundoutRoutes);
app.use("/api/payment", paymentRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));