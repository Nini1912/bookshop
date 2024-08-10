const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());

const bookshopController = require("./controllers/bookshop.controller");

app.get("/bookshop", bookshopController.get_bookshop);

app.get("/book/:id", bookshopController.get_book_id);

app.post("/bookshop", bookshopController.post_bookshop);

app.put("/bookshop", bookshopController.put_bookshop);

app.delete("/bookshop", bookshopController.del_bookshop);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
