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

  //우선 login이라는 경로가 있다고 가정하고 작성
  //login이라는 경로로 데이터를 전달해준다.
  //오브젝트 형태로 데이터를 보내줘야 한다. json이라는 데이터 타입을 이용해서 전달
  //JSON.stringify(req)를 콘솔로 찍어보면 일반 문자열 형태로 출력이 된다.
  //body를 통해서 데이터를 전달할 때는 http 메서드 중의 post로 전달해줘야 한다.
  fetch("/login", {
    method: "POST",
    body: JSON.stringify(req),
  });
}
