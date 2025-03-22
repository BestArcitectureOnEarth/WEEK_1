import Subject from "./Subject.js";

class ConcreteSubject extends Subject {
  constructor(element) {
    super();
    this.element = element;

    // 주체의 상태 변화를 감지해서 옵저버에게 알림
    this.element.onclick = () => {
      this.notify(this.element.checked);
    };
  }
}

export default ConcreteSubject;
