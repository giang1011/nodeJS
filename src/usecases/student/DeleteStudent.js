module.exports = (repo) => async (id) => {
  return await repo.delete(id);
};
