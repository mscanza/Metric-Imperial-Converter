/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let isDouble;
    let fractions = [];
    var result = input.split(/[a-z]/i)[0];
 if (result === '') {
      result = 1;
    } else if (result.includes('/')) {
  result.split("").forEach(function(item) {
   if (item === '/') {
     fractions.push(item);
   }
 })
}
 if (fractions.length > 1) {
     result = undefined;
   }
try {eval(result)
      } catch(err) {
        return undefined;
      }
    result = eval(result)
     return isNaN(result) ? undefined : result;
  }
    
  this.getUnit = function(input) {
      var result;
      try {
       result = input.split("").filter(item => item.match(/[a-z]/i)).join("")
      } catch(err) {
        return undefined;
      }
      
    return result.match(/^gal$|^GAL$|^l$|^L$|^lbs$|^LBS$|^kg$|^KG$|^mi$|^MI$|^km$|^KM$/) ? result : undefined;
  };
  
  this.getReturnUnit = function(initUnit) {
   switch(initUnit) {
      case 'GAL':
      case 'gal': return 'l';
       break;
     case 'LBS':
     case 'lbs': return 'kg';
       break;
     case "MI":
     case 'mi': return 'km';
       break;
     case 'L':
     case 'l': return 'gal';
       break;
     case 'KG':
     case 'kg': return 'lbs';
       break;
     case 'KM':
     case 'km': return 'mi';
       break;
     default: return undefined;
   }
  };

  this.spellOutUnit = function(unit) {
    switch(unit) {
      case 'gal': return 'gallons';
        break;
      case 'lbs': return 'pounds';
        break;
      case 'mi': return 'miles';
        break;
      case 'L':
      case 'l': return 'liters';
        break;
      case 'kg': return 'kilograms';
        break;
      case 'km': return 'kilometers';
    }
  };
  
  this.convert = function(initNum, initUnit) {
     const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit) {
      case 'GAL':
      case 'gal': result = initNum  * galToL;
        break;
      case 'L':
      case 'l':   result = initNum / galToL;
        break;
      case 'LBS':
      case 'lbs': result = initNum * lbsToKg;
        break;
      case 'KG':
      case 'kg': result = initNum / lbsToKg;
        break;
      case 'MI':
      case 'mi': result = initNum * miToKm;
        break;
      case 'KM':
      case 'km': result = initNum / miToKm;
        break;
      default:   result = undefined;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum.toString() + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum.toString() + ' ' + this.spellOutUnit(returnUnit)
    
    return result;
  };
  
}

module.exports = ConvertHandler;
