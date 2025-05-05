"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); //미들웨어 사용
app.use(bodyParser.json()); //body-parser가 json데이터를 파싱할 수 있도록 명시한다.

//extended: true -> URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 표함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); //use -> 미들웨어를 등록해주는 메서드

module.exports = app;
