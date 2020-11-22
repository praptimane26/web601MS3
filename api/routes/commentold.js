var express = require("express");
var router = express.Router();
var { StoreComment } = require("../dataservice/dataservice");

router.post("/", (req, res) => {
  // handle the request
  userNameComment = req.body;
  console.log("post hello " + JSON.stringify(userNameComment));
  //res.json({ id: 1, name: "Catcher in the Rye" });
  StoreComment(
    (jsnText) => {
      res.json(jsnText);
    },
    userNameComment.name,
    userNameComment.comment
  );


});

router.get("/", (req, res) => {
  // handle the request
  userNamePw = req.body;
  console.log("get hello" + userNamePw);
  res.json(JSON.stringify({ id: 1, name: "Catcher in the Rye" }));
});

module.exports = router;
