// Modules and Globals
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Initialize the app
const app = express();
const port = process.env.PORT || 5400;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
const routes = require('./server/routes/taskRoutes')
app.use("/tasks", routes);

//db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));


const PORT = process.env.PORT || 5400;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});