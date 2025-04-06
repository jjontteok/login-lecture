"use strict";

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//__dirname : app.js가 있는 위치를 반환함 -> 현재 파일의 디렉토리 기준으로 src/public 경로 지정
//src/public 폴더를 정적 파일 경로로 지정해서, 브라우저가 직접 접근할 수 있도록 함
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home);

module.exports = app;
