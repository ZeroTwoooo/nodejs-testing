function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your guess? `, (guess) => {
    if(guess == getRandomInt(10)) {
        console.log('Good Job!')
    }else {
        console.log('Nice try! But incorrect')
    }
    process.exit(1);
  })