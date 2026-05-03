// ORDER
// 1
console.log('first')
// ASYNC -- Offloaded
// 3
setTimeout(() => {
    console.log('second')
}, 1000)
// 2
console.log('third')