const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8081;
const expressStaticGzip = require("express-static-gzip");

app.use(expressStaticGzip(path.join(__dirname, "build")));

// This route serves the React app
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
