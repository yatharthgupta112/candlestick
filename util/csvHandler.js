const parse = require('csv-parse')
const createObjectCsvWriter = require('csv-writer').createObjectCsvWriter

async function getDataCSV(data)
{
    return new Promise ((resolve,reject)=>{
        // console.log(data)
        parse(data, {
            // comment  : "#",
            // delimiter: '/n',
            columns : true,
            // objname : "row"
        },
        (err,data)=>{
            if(err)
            reject(err)
            else 
            resolve(data)
        })
    })
}

async function createCSV(data)
{
    const csvwriter= createObjectCsvWriter({
        path :'hammer.csv',
        header : [
            {id:'Date', title :'Date' },
            {id:'open', title :'Open' },
            {id:'high', title :'High' },
            {id:'low', title :'Low' },
            {id:'close', title :'Close' }
            ]
    })
    
    return csvwriter.writeRecords(data)
    // return temp
}


module.exports = {getDataCSV, createCSV}