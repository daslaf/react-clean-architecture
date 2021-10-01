import type { Counter } from "../domain/counterEntity";
import { create } from "../domain/counterModel";

let count = 0;

function getCounter(): Promise<Counter> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(create(count));
    }, 1000);
  });
}

function updateCounter(counter: Counter): Promise<Counter> {
  return new Promise((resolve) => {
    setTimeout(() => {
      count = counter.value;
      resolve(create(count));
    }, 1000);
  });
}

export { getCounter, updateCounter };
