// 싱글톤 클래스 (인스턴스를 하나만 유지)
class Singleton {
  static instance = null; // 단 하나의 인스턴스를 저장 // 외부에서 접근 가능

  constructor() {
    if (!Singleton.instance) {
      this.data = "공유 데이터"; // 전역에서 공유되는 데이터
      Singleton.instance = this; // 첫 번째 인스턴스를 저장
    }
    return Singleton.instance; // 기존 인스턴스를 반환
  }

  getData() {
    return this.data;
  }

  setData(newData) {
    this.data = newData;
  }
}

// 사용 예시 (싱글톤 객체 생성)
const singletonA = new Singleton();
console.log(singletonA.getData()); // "공유 데이터"

const singletonB = new Singleton();
singletonB.setData("변경된 데이터");

// 같은 인스턴스를 공유하므로 singletonA에서도 값이 변경됨
console.log(singletonA.getData()); // "변경된 데이터"

console.log(singletonA === singletonB); // true (같은 객체)
