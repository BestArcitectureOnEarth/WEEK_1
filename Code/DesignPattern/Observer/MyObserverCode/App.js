import { Subject } from "./Subject.js";
import { Observer } from "./Observer.js";

const subject = new Subject(); // 주체 생성
const observersContainer = document.getElementById("observersContainer"); // Observer들이 표시될 컨테이너
const addObserverBtn = document.getElementById("addObserverBtn"); // Observer 추가 버튼
const subjectColor = document.getElementById("subjectColor"); // 색상 선택

// 새로운 Observer를 생성하는 함수
const createObserver = () => {
  const observerDiv = document.createElement("div");

  // div 스타일 설정
  observerDiv.style.width = "10px";
  observerDiv.style.height = "10px";
  observerDiv.style.border = "1px solid black";
  observerDiv.style.margin = "5px";
  // div를 컨테이너에 추가
  observersContainer.appendChild(observerDiv);

  // 새로운 Observer 생성, subject랑 연결
  const observer = new Observer(observerDiv, subject);
  subject.subscribe(observer);
};

// 버튼 클릭시 새 Observer 생성
addObserverBtn.onclick = createObserver;

// 색상 선택 값이 변경될 때 색상 업데이트
subjectColor.addEventListener("input", (e) => subject.setColor(e.target.value));
