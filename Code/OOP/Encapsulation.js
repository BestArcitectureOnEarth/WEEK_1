// 캡슐화
class BankAccount {
  #balance = 0; // private 필드 선언

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let account = new BankAccount("Alice");
account.deposit(100);
console.log(account.getBalance()); // 100
//console.log(account.#balance); // 오류: Private 필드는 외부에서 접근 불가
