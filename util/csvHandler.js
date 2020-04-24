const parse = require('csv-parse')
const createObjectCsvWriter = require('csv-writer').createObjectCsvWriter

/**
*  convert csv to object  
* @param {*} data
 */
async function getDataCSV(data)
{
    return new Promise ((resolve,reject)=>{
        parse(data, {
            columns : true,
        },
        (err,data)=>{
            if(err)
            reject(err)
            else 
            resolve(data)
        })
    })
}


/**
 * create csv file from array of objects  
 * @param {*} data
 *
 */
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
}


module.exports = {getDataCSV, createCSV}