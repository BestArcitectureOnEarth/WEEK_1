import Observer from "./Observer.js";

class ConcreteObserver extends Observer {
  constructor(element) {
    super();
    this.element = element;
  }

  update(data) {
    // data 로 무언가를 업데이트
    this.element.checked = data;
  }
}

export default ConcreteObserver;
