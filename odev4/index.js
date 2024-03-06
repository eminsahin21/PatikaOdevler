const { error } = require('console')
const fs = require('fs')

fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}','utf8', (err) => {
    if(err) console.log(err)
    console.log('Veri Eklendi!')
})

fs.readFile('employees.json','utf8',(err,data) => {
    if(err) console.log(err)
    console.log('Veri Okundu!')
    console.log(data)
})

// fs.unlink('employees.json',(err) => {
//     if(err) console.log(err)
// })