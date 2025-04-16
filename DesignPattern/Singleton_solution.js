// 싱글톤을 안전하게 유지하려면, 객체를 생성하는 순간에도 null 체크를 해야한다.
class Singleton3 {
  static instance = null;
  static lock = false; // 동기화 변수 추가

  constructor() {
    if (!Singleton3.instance) {
      console.log("새로운 인스턴스 생성됨!");
      Singleton3.instance = this;
    }
    return Singleton3.instance;
  }

  static async getInstance() {
    while (Singleton3.lock) {
      await new Promise((resolve) => setTimeout(resolve, 10)); // 다른 요청 대기
    }

    Singleton3.lock = true; // 🔒 락 설정
    if (!Singleton3.instance) {
      Singleton3.instance = new Singleton3();
    }
    Singleton3.lock = false; // 🔓 락 해제
    return Singleton3.instance;
  }
}

async function main() {
  const results = await Promise.all([
    Singleton3.getInstance(),
    Singleton3.getInstance(),
    Singleton3.getInstance(),
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
//새로운 인스턴스 생성됨!
//객체 주소 비교:
//Singleton3 {}
//Singleton3 {}
//Singleton3 {}
//결과:  싱글턴 유지됨
