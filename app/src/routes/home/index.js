"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);

router.get("/login", ctrl.output.login); //로그인 페이지 화면을 보여주는 역할
router.post("/login", ctrl.process.login);

module.exports = router;
