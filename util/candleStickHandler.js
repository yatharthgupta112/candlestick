

/**
 * checks if a stock is a hammer
 * @param {*} obj 
 */
function isHammer(obj)
{
    if(((obj.open==obj.high) || (obj.close==obj.high)) // check for head of the hammer
         && Math.abs(obj.close - obj.open)<= 3/10*(Math.abs(obj.high-obj.low))) // checks hammer head <=30% of the candlestick
        { return !isDoji(obj)}
    else 
      return false
}

/**
 * checks if the pattern is doji candlestick or not 
 * @param {*} obj 
 */
function isDoji(obj)
{
    return Math.abs(obj.open-obj.close)<= 0.01 ? true : false;
}


/**
 *  itereate over the csv objects
 * @param {*} csv 
 */
 function iterator (csv)
{
    
   return csv.filter((stock)=>{
        if(isNull(stock))
            return isHammer(stock)// only return hammer candle sticks 
        else
        return false
    })

}

/**
 * checks if any of the stock value is not null or undefined 
 * @param {*} stock
 * 
 */
function isNull(stock)
{
    for ( let value of Object.values(stock))
    {   
        if(value==null || value == undefined)
            return false
    }
    return true
}

module.exports = {iterator}