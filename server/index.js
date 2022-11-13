// Modules and Globals
const express = require("express");
const PORT = process.env.PORT || 5400;
const app = express();

// Controllers & Routes
app.get("/api", (req, res) => {
    res.json({ message: "Hello from the Backend"})
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});