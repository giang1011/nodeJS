module.exports = (repo) => async (id) => {
  return await repo.getById(id);
};
