// 옵저버 실습 과제
// 옵저버(관찰자)들이 관찰하고 있는 대상자의 상태가 변화가 있을 때마다 대상자는 직접 목록의
// 각 관찰자들에게 통지하고, 관찰자들은 알림을 받아 조치를 취한다.

// - 일대다 의존성
// - 분산 이벤트 핸들링 시스템을 구현하는데 사용
// - 발행/구독 모델로도 불림

class NewsAgency {
  constructor() {
    this.news = "";
    this.observers = [];
  }

  // 관찰자 등록
  addObserver(observer) {
    this.observers.push(observer);
  }

  // 관찰자 제거
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  // 관찰자들에게 알림
  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this.news);
    }
  }

  // 뉴스가 변경되면 관찰자들에게 알림
  setNews(news) {
    this.news = news;
    this.notifyObservers();
  }
}

// 옵저버 인터페이스
class Observer {
  update(news) {}
}

// 옵저버를 상속받은 NewsChannel 클래스
class NewsChannel1 extends Observer {
  update(news) {
    console.log(`News Channel 1: ${news}`);
  }
}

class NewsChannel2 extends Observer {
  update(news) {
    console.log(`News Channel 2: ${news}`);
  }
}

// agency 객체
const agency = new NewsAgency();

// channel 객체
const channel1 = new NewsChannel1();
const channel2 = new NewsChannel2();

agency.addObserver(channel1);
agency.addObserver(channel2);

// 새로운 뉴스 발행
agency.setNews(`Breaking News: Earthquake hits the city`);

agency.removeObserver(channel1);

agency.setNews(`Breaking News: It was fake news`);
//News Channel 1: Breaking News: Earthquake hits the city
//News Channel 2: Breaking News: Earthquake hits the city
//News Channel 2: Breaking News: It was fake news
