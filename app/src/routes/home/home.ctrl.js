"use strict";

const users = {
  id: ["김쫀떡", "나개발", "김팀장"],
  psword: ["1234", "1234", "123456"],
};

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    if (users.id.includes(id)) {
      //클라이언트가 적은 id가 users의 id와 일치하면
      const idx = users.id.indexOf(id); //해당 users의 인덱스를 받아와
      if (users.psword[idx] === psword) {
        //id와 맞는 psword를 입력했다면
        //json객체로 응답해주기
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};
