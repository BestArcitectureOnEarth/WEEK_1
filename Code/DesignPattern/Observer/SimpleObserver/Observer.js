// 주체 (Subject) 클래스
class Subject {
  constructor() {
    this.observers = []; // 옵저버 목록
  }

  // 옵저버 등록 (구독)
  addObserver(observer) {
    this.observers.push(observer);
  }

  // 옵저버 제거 (구독 해지)
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // 상태 변경 시 모든 옵저버에게 알림
  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

// 옵저버 (Observer) 클래스
class Observer {
  constructor(name) {
    this.name = name;
  }

  // 업데이트 메서드 (주체가 notify를 호출할 때 실행됨)
  update(data) {
    console.log(`${this.name} received update: ${data}`);
  }
}

// 사용 예시
const newsPublisher = new Subject(); // 뉴스 발행자 생성

const subscriber1 = new Observer("Alice"); // 구독자1
const subscriber2 = new Observer("Bob"); // 구독자2

newsPublisher.addObserver(subscriber1);
newsPublisher.addObserver(subscriber2);

// 새로운 뉴스 발행 (옵저버들에게 알림)
newsPublisher.notify("Breaking News: New JavaScript update!");

console.log("--Subscriber2 is now not subscribed--");
// Bob이 구독 해지
newsPublisher.removeObserver(subscriber2);

// 새로운 뉴스 발행 (Bob은 알림을 받지 않음)
newsPublisher.notify("Another News: TypeScript is getting popular!");
