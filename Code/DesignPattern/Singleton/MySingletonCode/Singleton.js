class Singleton {
  static instance;

  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
      this.address = Math.random();
    }
    return Singleton.instance;
  } 
}

export default Singleton;
