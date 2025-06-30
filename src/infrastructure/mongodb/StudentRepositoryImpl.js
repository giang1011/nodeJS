const Student = require("./StudentSchema");

module.exports = {
  async create(data) {
    return await Student.create(data);
  },

  async getAll() {
    return await Student.find();
  },

  async getById(id) {
    return await Student.findById(id);
  },

  async update(id, data) {
    return await Student.findByIdAndUpdate(id, data, { new: true });
  },

  async delete(id) {
    return await Student.findByIdAndDelete(id);
  }
};
