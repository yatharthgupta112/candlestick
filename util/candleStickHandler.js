

//checks if a stock is a hammer
function isHammer(obj)
{
    if(((obj.open==obj.high) || (obj.close==obj.high)) 
        
        && ((Math.abs(obj.close - obj.open)<= 3/10*(Math.abs(obj.high-obj.low)))
        // || ( Math.abs(obj.close - obj.open)<= 3/7*(Math.abs(obj.close-obj.low)))
        ))
        {
            return !isDoji(obj)
        }

        else 
        return false
}


function isDoji(obj)
{
    return Math.abs(obj.open-obj.close)<= 0.01 ? true : false;
}


 function iterator (csv)
{
    
   return csv.filter((stock)=>{
        if(isNull(stock))
            return isHammer(stock)
        else
        return false
    })

}

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