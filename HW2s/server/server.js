const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const ungDung = express();
ungDung.use(cors());
ungDung.use(bodyParser.json());

const csdl = mysql.createConnection({
  host: "localhost",
  port: 4306, 
  user: "root",
  password: "",
  database: "student_db",
});

csdl.connect((loi) => {
  if (loi) throw loi;
  console.log("Da ket noi MySQL");
});

class SinhVien {
  constructor(hoTen, tuoi, email, diaChi) {
    this.name = hoTen;
    this.age = tuoi;
    this.email = email;
    this.address = diaChi;
  }
}

ungDung.post("/sinhvien", (yeuCau, phanHoi) => {
  const { name, age, email, address } = yeuCau.body;

  const cauLenh = "INSERT INTO student_form (name, age, email, address) VALUES (?, ?, ?, ?)";
  csdl.query(cauLenh, [name, age, email, address], (loi, ketQua) => {
    if (loi) {
      console.error("Loi khi them vao MySQL:", loi.sqlMessage || loi.message);
      return phanHoi.status(500).send("Loi luu du lieu: " + loi.sqlMessage);
    } else {
      phanHoi.send("Luu thanh cong");
    }
  });
});

ungDung.listen(5000, () => {
  console.log("May chu dang chay tai http://localhost:5000");
});
