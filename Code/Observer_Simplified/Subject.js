class Subject {
  constructor(element) {
    this.observers = [];
    this.element = element;

    this.element.onclick = () => {
      this.notify(this.element.checked);
    };
  }

  // 옵저버 추가
  addObserver(observer) {
    this.observers.push(observer);
  }

  // 정보 전달을 위해 Observer 의 update 호출
  notify(context) {
    const observerCount = this.observers.length;
    for (let i = 0; i < observerCount; i++) {
      this.observers[i].update(context);
    }
  }
}

export default Subject;
