// 싱글톤 실습 과제

// 싱글톤 패턴이란, 어플리케이션이 시작될 때 어떤 클래스가 최초 한번만 메모리를 할당하고
// 그 메모리에 인스턴스를 만들어 사용하는 디자인 패턴이다.
// - 고정된 메모리 영역을 얻는다.
// - 인스턴스가 한 개만 생성된다. -> 메모리 낭비를 방지
// - 하나의 인스턴스를 메모리에 등록해서 여러 쓰레드가 동시에 해당 인스턴스를 공유하여 사용하므로
// - 요청이 많은 곳에서 사용하면 효율적이다.

// - 전역 상태 관리가 필요할 때 유용하다.

// - 주의: 여러 쓰레드가 동시 접근하는 경우 문제가 발생한다.

// Enum을 활용한 싱글톤
class Singleton {
  static instance = null; // 클래스 단위에서 하나의 인스턴스를 공유하도록 static 선언
  constructor() {
    if (Singleton.instance) {
      console.log("새로운 인스턴스 생성됨!");
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); //true
