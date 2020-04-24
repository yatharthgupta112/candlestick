const {getFile} = require('./util/file')
const {getDataCSV,createCSV} = require('./util/csvHandler')
const {iterator} = require('./util/candleStickHandler')

async function gethammer(){
    try 
    {
      // get csv file in buffer
      let content =await getFile('data.csv');
      //converts the csv data in array of objects
      let csv = await getDataCSV(content);
      //create csv of hammer candlesticks
      await createCSV(iterator(csv))
    }
    catch(e){
      console.log(e)
    }
}

gethammer()