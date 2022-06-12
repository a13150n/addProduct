require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");


const router = require("./routes/user");
const routers = require("./routes/product");



connection();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes)


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

