const lodash = require('lodash')

const names= ['shah','laeeq']
const capitalize = lodash.map(names, lodash.capitalize)

console.log(capitalize)