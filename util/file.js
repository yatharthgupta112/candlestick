const fs = require('fs')

async function getFile (path)
{
    return new Promise ((resolve, reject)=>{
       fs.readFile(path,'utf8', (err,data)=>{
            if (err)
                reject(err)
            else 
            resolve(data)
        });
    })
}

// async function 


module.exports = {getFile};