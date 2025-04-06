"use strict";

const hello = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

//hello와 login 객체를 밖으로 export 해준다.
//key와 value가 같음
module.exports = { hello, login };
