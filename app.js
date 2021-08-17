const express = require("express");
const routes = require("./routes");

require("dotenv").config();

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json())    


// register routes
app.use("/api/v1/", routes());

app.listen(port, "0.0.0.0", () => {
    console.log(`App listening on port ${port}`);
  });




