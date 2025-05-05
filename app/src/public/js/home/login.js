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

  //내가 전달하는 데이터가 JSON이라고 알려줘야 한다. -> header로 표현하고 오브젝트로 전달
  //내가 보내는 데이터의 타입 명시 Content-Type

  //서버 /login이라는 경로, POST라는 메서드로 데이터를 받을 수 있는 API가 마련되어 있어야 한다.
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
}
