import ConcreteSubject from "./ConcreteSubject.js";
import ConcreteObserver from "./ConcreteObserver.js";

const addBtn = document.getElementById("addNewObserver");
const container = document.getElementById("observersContainer");

// 정보 주체 생성
const controlCheckbox = new ConcreteSubject(
  document.getElementById("mainCheckbox")
);

const addNewObserver = () => {
  // 새로운 체크박스 생성
  const check = document.createElement("input");
  check.type = "checkbox";

  // 생성한 체크박스를 옵저버와 연결
  const checkObserver = new ConcreteObserver(check);

  // 정보 주체인 controlCheckbox 에 옵저버 추가
  controlCheckbox.addObserver(checkObserver);

  // container 에 옵저버 추가
  container.appendChild(check);
};

addBtn.onclick = addNewObserver;
