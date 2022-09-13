const counter = {
  counterValue: 0,
  decrement() {
    this.counterValue -= 1;
  },
  increment() {
    this.counterValue += 1;
  },
};

const counterValueBtn = document.querySelector('#value');
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

decrBtn.addEventListener('click', function () {
  counter.decrement();
  counterValueBtn.textContent = counter.counterValue;
});
incrBtn.addEventListener('click', function () {
  counter.increment();
  counterValueBtn.textContent = counter.counterValue;
});
