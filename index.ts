function add(a: number, b: number): number {
  return a + b + ""; // ❌ специально превращаю в string
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    return "Cannot divide by zero"; // ❌ ошибка типов
  }
  return a / b;
}

console.log(add(2, 3));
console.log(divide(10, 0));
