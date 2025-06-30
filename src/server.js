require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectMongoDB = require("./config/mongodb");

const studentRepo = require("./infrastructure/mongodb/StudentRepositoryImpl");

const create = require("./usecases/student/CreateStudent")(studentRepo);
const getAll = require("./usecases/student/GetAllStudents")(studentRepo);
const getById = require("./usecases/student/GetStudentById")(studentRepo);
const update = require("./usecases/student/UpdateStudent")(studentRepo);
const remove = require("./usecases/student/DeleteStudent")(studentRepo);

const studentRoutes = require("./interface/routes/studentRoutes")({
  create, getAll, getById, update, remove,
});

const app = express();
app.use(cors());

app.use(express.json());

connectMongoDB();

app.use("/students", studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server đang chạy tại http://localhost:${PORT}`);
});
