import Subject from "./Subject.js";
import Observer from "./Observer.js";

// HTML 요소 가져오기
const addBtn = document.getElementById("addNewObserver");
const container = document.getElementById("observersContainer");

// Subject 를 생성하고 메인 체크박스를 Subject 에 전달
const controlCheckbox = new Subject(document.getElementById("mainCheckbox"));

const addNewObserver = () => {
  // 새로운 체크박스 생성
  const check = document.createElement("input");
  check.type = "checkbox";

  // Observer 를 생성하고 생성한 체크박스를 Observer 에 전달
  const checkObserver = new Observer(check);

  // Subject 에 생성한 Observer 추가
  controlCheckbox.addObserver(checkObserver);

  // container 에 체크박스 추가
  container.appendChild(check);
};

addBtn.onclick = addNewObserver;
