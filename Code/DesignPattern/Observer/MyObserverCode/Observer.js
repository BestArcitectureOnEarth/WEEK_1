// observer.js
export class Observer {
  constructor(element, subject) {
    this.element = element;
    this.subject = subject;
  }

  update(color) {
    this.element.style.backgroundColor = color;
  }
}
