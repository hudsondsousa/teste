function fibonacci(number) {
  let a = 0;
  let b = 1;
  while (a <= number) {
    if (a === number) return true;
    let temp = a;
    a = b;
    b = temp + b;
  }
  return false;
}

const inputNumber = 8; // Pode ser qualquer número
if (fibonacci(inputNumber)) {
  console.log(`${inputNumber} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${inputNumber} não pertence à sequência de Fibonacci.`);
}
