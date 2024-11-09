// CRUD with File System
// Make, Read, Update, Rename, Delete file

const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'files')
const filePath = `${dirPath}/FromcrudFile.txt`

// write file
// fs.writeFileSync(filePath, `This is simple file`)

// read file
// fs.readFile(filePath, `utf8`, (error, item)=>{
    // console.log(item)
// })

// update file
// fs.appendFile(filePath, ' and file name is IDK', (err)=>{
//     if(!err) console.log("File is updated")
// })

// rename file
// const filePath = `${dirPath}/RenamedIt`
// fs.rename(filePath, `${dirPath}/RenamedIt.txt`, (err)=>{
//     if(!err) console.log("File is renamed")
// })

// delete file
// fs.unlinkSync(`${dirPath}/hello4.txt`)

