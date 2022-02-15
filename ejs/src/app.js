const express = require("express");
const productsRouter = require("./routes/products.js");

const app = express();

const server = app.listen(8080, () => {
  console.log("listening on port 8080");
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", productsRouter);

app.set("views", "./views");
app.set("view engine", "ejs");
