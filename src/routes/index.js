const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/chat", (req, res) => res.render("chat_index"));

router.get("/rooms", (req, res) => {
  res.render("listRooms");
});
router.get("/rooms/:id", (req, res) => {
  res.render("chat.ejs", {
    id: req.params.id,
    nickname: req.query.nickname,
    join: req.query.join === "true",
  });
});
router.get("*", (req, res) => res.status(404).render("404"));

module.exports = router;
