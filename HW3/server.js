const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors"); 
const app = express();

app.use(cors({
    origin: "http://127.0.0.1:5500"
  }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "product_manager",
  port: 4306,
});

db.connect((err) => {
  if (err) throw err;
  console.log(" Ket noi SQL thanh cong");
});

class Products {
  constructor(name, price, idate, quantity) {
    this.name = name;
    this.price = price;
    this.idate = idate;
    this.quantity = quantity;
  }
}


app.post("/add", (req, res) => {
  const { title, price, idate, quantity } = req.body;
  const sql = "INSERT INTO products (title, price, idate, quantity) VALUES (?, ?, ?, ?)";
  db.query(sql, [title, price, idate, quantity], (err) => {
    if (err) return res.send("Loi Them san pham");
    res.redirect("/");
  });
});

app.post("/delete", (req, res) => {
  const { id } = req.body;
  const sql = "DELETE FROM products WHERE id = ?";
  db.query(sql, [id], (err) => {
    if (err) return res.send("Loi xoa san pham");
    res.redirect("/");
  });
});

app.post("/update", (req, res) => {
  const { id, title, price, idate, quantity } = req.body;
  const sql = "UPDATE products SET title=?, price=?, idate=?, quantity=? WHERE id=?";
  db.query(sql, [title, price, idate, quantity, id], (err) => {
    if (err) return res.send("Loi update san pham");
    res.redirect("/");
  });
});

app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.send("Loi doc san pham");
    res.json(results);
  });
});

app.listen(3000, () => console.log(" Server chay tai http://localhost:3000"));
