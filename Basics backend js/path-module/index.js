const path = require('path')

console.log("Directory name:", path.dirname(__filename))

console.log("File name:", path.basename(__filename))

console.log("File extension", path.extname(__filename))

const joinPath= path.join('/user', 'documents', 'node')
console.log("JoinedPath", joinPath)

const resolvePath= path.resolve('/user', 'documents', 'node')
console.log("ResolvePath", resolvePath)


const normalizePath = path.normalize('/user/.document/../node/project')
console.log("Normalized path:", normalizePath) 