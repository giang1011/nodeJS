const express = require("express");
const router = express.Router();

module.exports = ({ create, getAll, getById, update, remove }) => {
  router.post("/", async (req, res) => {
    const student = await create(req.body);
    res.json(student);
  });

  router.get("/", async (req, res) => {
    const students = await getAll();
    res.json(students);
  });

  router.get("/:id", async (req, res) => {
    const student = await getById(req.params.id);
    res.json(student);
  });

  router.put("/:id", async (req, res) => {
    const updated = await update(req.params.id, req.body);
    res.json(updated);
  });

  router.delete("/:id", async (req, res) => {
    await remove(req.params.id);
    res.json({ message: "Đã xóa thành công" });
  });

  return router;
};
