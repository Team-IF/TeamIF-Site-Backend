const express = require("express");
const router = express.Router();
const member = require("../db/member");

router.get("/", (req, res) => {
  member.getAll().then((result) => {
    res.json(result);
  });
});

router.get("/:id", (req, res) => {
  member.getOne(req.params.id).then((result) => {
    res.json(result[0]);
  });
});

router.post("/", (req, res) => {
  member.create(req.body).then((result) => {
    res.json(result);
  });
});

router.patch("/:id", (req, res) => {
  member.update(req.body).then((result) => {
    res.json("{}");
  });
});

router.delete("/:id", (req, res) => {
  member.delete(req.params.id).then((result) => {
    res.json("{}");
  });
});

module.exports = router;
