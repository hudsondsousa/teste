function invertString(str) {
  let invertedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    invertedString += str[i];
  }
  return invertedString;
}

const inputString = "hello"; // Pode ser qualquer string
console.log(invertString(inputString)); // Saída: "olleh"
