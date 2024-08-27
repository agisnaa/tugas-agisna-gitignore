const express = require("express");
const app = express();
const port = 5000;

// testing API

app.use("/api/goals", require("./routes/goalRoutes.js"));

app.listen(port, () => {
  console.log(`server berjalan di port ${port}`);
})