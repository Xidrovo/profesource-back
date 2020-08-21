async function publish(req, res, next) {
  const tag = await global.db.Tags.create({
    TagName: "DAWM",
  });
  return res.send(tag);
}

module.exports = {
  publish,
};
