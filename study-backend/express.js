const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("HOME");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.get("/get", function (req, res) {
  res.send("Hello World!");
});
app.post("/post", function (req, res) {
  res.send("Got a POST request");
});
app.put("/user", function (req, res) {
  res.send("Got a PUT request at /user");
});
app.delete("/delete", function (req, res) {
  res.send("Got a DELETE request at /user");
});
