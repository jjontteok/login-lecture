"use strict";

//querySelector
//id를 불러올 때 #을 붙이는 것 <input id = "psword"../> 에서 psword를 불러와달라는 의미
const id = document.querySelector("#id"), //login.ejs의 id로 불러온다.
  psword = document.querySelector("#psword"), //login.ejs의 id로 불러온다.
  loginBtn = document.querySelector("button"); //버튼은 하나이기 때문에 button태그로 불러온다.

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };
  console.log(req);
}
