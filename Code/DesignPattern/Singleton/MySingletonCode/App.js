import Singleton from "./Singleton.js";

const firstBtn = document.getElementById("SingletonFirstBtn");
const secondBtn = document.getElementById("SingletonSecondBtn");
const output = document.getElementById("outputAddress");

const outputAddress = (instance, label) => {
  const address = document.createElement("p");
  const text = document.createTextNode(`${label}: ${instance.address}`);
  address.appendChild(text);
  output.appendChild(address);
};

const firstPopUp = () => {
  const firstInstance = new Singleton();
  outputAddress(firstInstance, "첫번째로 만든 인스턴스 랜덤값");
};

const secondPopUp = () => {
  const secondInstance = new Singleton();
  outputAddress(secondInstance, "두번째로 만든 인스턴스 랜덤값");
};

firstBtn.onclick = firstPopUp;
secondBtn.onclick = secondPopUp;
