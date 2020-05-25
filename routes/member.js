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

module.exports = router;
