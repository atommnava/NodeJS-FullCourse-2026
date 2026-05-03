const { readFile } = require('fs')

console.log('started first task')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        return;
    } 
    console.log(result)
    console.log('1st task completed')
})
console.log('starting new task')