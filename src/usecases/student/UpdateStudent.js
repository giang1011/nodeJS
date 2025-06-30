module.exports = (repo) => async (id, data) => {
  return await repo.update(id, data);
};
