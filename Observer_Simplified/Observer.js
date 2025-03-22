class Observer {
  constructor(element) {
    this.element = element;
  }

  // Subject 에게 전달받은 data 로 check 상태 업데이트
  update(data) {
    this.element.checked = data;
  }
}

export default Observer;
