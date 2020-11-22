var express = require("express");
var router = express.Router();
var { StoreComment, GetUsers } = require("../dataservice/dataservice");

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

/* GET users listing. */
router.get("/", function (req, res, next) {
  GetComment((jsnText) => {
    res.send(jsnText);
  });
});

module.exports = router;
