var express = require("express");
var router = express.Router();
var { SignUp } = require("../dataservice/dataservice");

router.post("/", (req, res) => {
  // handle the request
  userNamePwEm = req.body;
  console.log("Sign Up Working " + JSON.stringify(userNamePwEm));
  //res.json({ id: 1, name: "Catcher in the Rye" });
  SignUp(
    (jsnText) => {
      res.json(jsnText);
    },
    userNamePwEm.name,
    userNamePwEm.password,
    userNamePwEm.email
  );
  //res.json( JSON.stringify({ id: 1, name: "Catcher in the Rye" }));
});

router.get("/", (req, res) => {
  // handle the request
  userNamePw = req.body;
  console.log("get hello" + userNamePw);
  res.json(JSON.stringify({ id: 1, name: "Catcher in the Rye" }));
});

module.exports = router;
