const express = require("express");
const path = require("path");
const nomeApp = process.env.npm_package_name;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static(`$/dist/$`));

app.get("/*", (req, res) => {
  //res.sendFile(path.join(`$/dist/$/index.html`));
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 8080);
