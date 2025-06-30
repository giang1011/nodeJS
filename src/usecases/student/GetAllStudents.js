module.exports = (repo) => async () => {
  return await repo.getAll();
};
