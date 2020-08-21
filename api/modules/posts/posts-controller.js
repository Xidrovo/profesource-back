async function publish(req, res, next) {
  // crear post
  const post = await global.db.Posts.create({
    // username: "cxcarvaj",
    Description: "Prueba",
    File:"file.txt",
    Punctuation:5,
    Publication_date: new Date(),
    status:"APPROVED",
    state:1,
  });
  return res.send(post);
}

module.exports = {
  publish,
};
