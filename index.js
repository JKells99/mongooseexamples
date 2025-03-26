require ("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

console.log(process.env.MONGO_URI)

mongoose
.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

const userRoutes = require("./routes/user");
const carRoutes = require("./routes/cars");
app.use("/users", userRoutes);
app.use("/cars", carRoutes);


app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
