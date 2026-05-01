const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) =>{
    if (err) {
        console.log(err)
        return;
    } 
    const firstFile = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    } 
    const secondFile = result;
    writeFile('./content/result-async.txt', "Aquí esta lo que dice:\n" + firstFile + "\n" + secondFile, (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log(result)
    })
    })
})