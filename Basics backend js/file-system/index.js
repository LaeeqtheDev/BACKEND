const fs = require('fs')
const path = require("path")

const dataFolder = path.join(__dirname, 'data')

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("Data Folder Created")
}

const filePath = path.join(dataFolder, 'example.txt')

//sync way of creating the file
fs.writeFileSync(filePath, 'Hello from nodejs' )
console.log('file created successfully')

//reading from data
const readFileContent = fs.readFileSync(filePath, 'utf8')
console.log("File content:", readFileContent)

//edit files
fs.appendFileSync(filePath, '\nHELLO HELLO MIC TESTING')
console.log('new file content added')

//async way of creating the file
const asyncFilePath = path.join(dataFolder, "async-example.txt")
fs.writeFileSync(asyncFilePath, "Hello async node js", (err)=>{
    if(err) throw err;
    console.log("Async File is created successfully");

    fs.readFile(asyncFilePath, 'utf8', (err, data)=>{
        if(err) throw err;
        console.log('async file content:', data)

        fs.appendFile(asyncFilePath, '\nThis is a new content', (err)=>{
            if(err) throw err;
            console.log("new line added")
        })
    })
})
