const createFile = require('./classes/File')

const anyFileInstance = createFile('any')
const smallFileInstance = createFile('small')
const mediumFileInstance = createFile('medium')
const bigFileInstance = createFile('big')

console.log(anyFileInstance);
console.log(smallFileInstance);
console.log(mediumFileInstance);
console.log(bigFileInstance);