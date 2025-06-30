module.exports = (repo) => async (data) => {
  return await repo.create(data);
};
