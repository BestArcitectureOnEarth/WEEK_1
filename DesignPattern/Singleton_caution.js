// 싱글톤 주의사항
// 1. 상태 값을 가지지 않는 것이 좋다.
// 단일 객체가 상태 값을 가지는 경우 특정 참조 변수가 상태를 변경했을 때
// 다른 참조 변수에도 영향을 미친다.
// 2. 여러 쓰레드가 동시에 접근하는 경우 해당 애플리케이션에 문제가 발생할 수 있다.

// 두 쓰레드 A와 B가 존재한다. 스레드 A가 getInstance() 메서드의 if 검사에 통과해서 싱글톤 객체를 생성하려고 하는데,
// 스레드 B도 if검사를 통과할 수 있는 문제가 있다.

// 문제 발생 예제: 동시 접근으로 싱글턴 깨짐

class Singleton2 {
  static instance = null;

  constructor() {
    // 매번 새로운 객체 생성
    console.log("새로운 인스턴스 생성됨!");
    Singleton2.instance = this;
  }

  static getInstance() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("객체 요청됨!");
        // 기존 객체를 덮어씌움
        Singleton2.instance = new Singleton2();
        resolve(Singleton2.instance);
      }, Math.random() * 1000);
    });
  }
}

async function main() {
  const results = await Promise.all([
    Singleton2.getInstance(),
    Singleton2.getInstance(),
    Singleton2.getInstance(),
  ]);

  console.log("객체 주소 비교:");
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);

  console.log(
    "결과: ",
    results[0] === results[1] && results[1] === results[2]
      ? "싱글턴 유지됨"
      : "싱글턴 깨짐"
  );
}

main();
// 객체 요청됨!
// 새로운 인스턴스 생성됨!
// 객체 요청됨!
// 새로운 인스턴스 생성됨!
// 객체 요청됨!
// 새로운 인스턴스 생성됨!
// 객체 주소 비교:
// Singleton2 {}
// Singleton2 {}
// Singleton2 {}
// 결과:  싱글턴 깨짐
