const prompt = require("prompt-sync")();

for (let index = 1000; index <= 1999; index++) {
  if (index % 11 === 5) {
    console.log(index);
  }
}
