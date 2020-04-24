const fs = require('fs')

/**
 * read the file from base directory
 * @param {*} path 
 */ 
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


module.exports = {getFile};