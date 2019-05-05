// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
if (parseAmericanExpress(cardNumber))
    return 'American Express';
else if (parseDinersClub(cardNumber))
    return 'Diner\'s Club';
else if (parseSwitch(cardNumber))
	return 'Switch';
else if (parseVisa(cardNumber))
    return 'Visa';
else if (parseDiscover(cardNumber))
    return 'Discover';
else if (parseMasterCard(cardNumber))
	return 'MasterCard';
else if (parseMaestro(cardNumber))
    return 'Maestro';
else if (parseChinaUnionPay(cardNumber))
	return 'China UnionPay';
else
    return 'Unknown';
};

function parseAmericanExpress (num) {
  return (num.slice(0, 2) === '34' || 
          num.slice(0, 2) === '37') && num.length === 15 ? true : false;
};

function parseDinersClub (num) {
  return (num.slice(0, 2) === '38' || num.slice(0, 2) === '39') && num.length === 14 ? true : false;
};

function parseVisa (num) {
  return num[0] === '4' && (num.length === 13 || num.length === 16 || num.length === 19) ? true : false;
};


function parseDiscover (num) {
  var prefixOfThree = Number(num.slice(0,3));
  return (num.slice(0, 4) === '6011' || num.slice(0, 2) === '65' || (prefixOfThree >= 644 && prefixOfThree <= 649)) 
		&& (num.length === 16 || num.length === 19) ? true : false;
}

function parseMasterCard (num) {
  return (num.slice(0, 2) === '51' || num.slice(0, 2) === '52' || num.slice(0, 2) === '53' || num.slice(0, 2) === '54' || num.slice(0, 2) === '55' || num.slice(0, 2) === '56') && num.length === 16 ? true : false;

}

function parseMaestro (num) {
  return (num.slice(0, 4) === '5018'  || num.slice(0, 4) === '5020' || num.slice(0, 4) === '5038' || num.slice(0, 4) === '6304')
   && (num.length >= 12 && num.length <= 19) ? true : false;
}

	// China UnionPay always has a prefix of 622126-622925, 
	// 624-626, or 6282-6288 and a length of 16-19.
function parseChinaUnionPay (num) {
	var prefixOfSix = Number(num.slice(0,6));
	var prefixOfThree = Number(num.slice(0,3));
	var prefixOfFour = Number(num.slice(0,4));
	return ((prefixOfSix >= 622126 && prefixOfSix <= 622925) || (prefixOfThree >= 624 && prefixOfThree <= 626)
				|| (prefixOfFour >= 6282 && prefixOfFour <= 6288)) && (num.length >= 16 && num.length <= 19) ? true : false;
}

function parseSwitch (num) {
	var prefixArr = ['4903', '4905', '4911', '4936', '6333', '6759', '564182', '633110'];
	var prefixOfFour = num.slice(0, 4);
	var prefixOfSix = num.slice(0,6);
	return ((prefixOfFour === '4903' || prefixOfFour === '4905' || prefixOfFour === '4911' || prefixOfFour === '4936'
	|| prefixOfFour === '6333' || prefixOfFour === '6759') || (prefixOfSix === '564182' || prefixOfSix === '633110') && (num.length === 16 || num.length === 18 || num.length === 19));
}
	

