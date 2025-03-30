// subject.js
export class Subject {
  constructor() {
    this.observers = [];
    this.color = "#000000";
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.color));
  }

  setColor(color) {
    this.color = color;
    this.notifyObservers();
  }
}
