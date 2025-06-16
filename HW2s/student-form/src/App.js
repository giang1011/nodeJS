import React, { useState } from "react";
import axios from "axios";

function UngDung() {
  const [sinhVien, setSinhVien] = useState({
    name: "",
    age: "",
    email: "",
    address: "",
  });

  const thayDoiDuLieu = (e) => {
    setSinhVien({ ...sinhVien, [e.target.name]: e.target.value });
  };

  const guiDuLieu = async () => {
    console.log("Du lieu gui di:", sinhVien);
    try {
      await axios.post("http://localhost:5000/students", sinhVien);
      alert("Da luu thong tin sinh vien!");
      setSinhVien({ name: "", age: "", email: "", address: "" }); 
    } catch (loi) {
      console.error("Loi khi luu:", loi.response?.data || loi.message);
      alert("Loi khi luu thong tin.");
    }
  };

  return (
    <div style={kieu.container}>
      <h2>Form Nhap Thong Tin Sinh Vien</h2>
      <input
        type="text"
        name="name"
        value={sinhVien.name}
        placeholder="Ho ten"
        onChange={thayDoiDuLieu}
        style={kieu.input}
      />
      <input
        type="number"
        name="age"
        value={sinhVien.age}
        placeholder="Tuoi"
        onChange={thayDoiDuLieu}
        style={kieu.input}
      />
      <input
        type="email"
        name="email"
        value={sinhVien.email}
        placeholder="Email"
        onChange={thayDoiDuLieu}
        style={kieu.input}
      />
      <input
        type="text"
        name="address"
        value={sinhVien.address}
        placeholder="Dia chi"
        onChange={thayDoiDuLieu}
        style={kieu.input}
      />
      <button onClick={guiDuLieu} style={kieu.button}>
        Luu
      </button>
    </div>
  );
}

const kieu = {
  container: {
    width: "300px",
    margin: "auto",
    paddingTop: "50px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
};

export default UngDung;
