module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    res.send({ error: "Not enough credits." });
  }
  next();
};
