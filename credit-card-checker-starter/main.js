// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

function validateCard(arr) {
    let sum = 0;
    //let evenNumbers = 0;
    //let oddNumbers = 0;
    const reverseArr = arr.reverse();
    for (let i = 0; i < reverseArr.length; i++) {
        
        // select odd index elements
        if (i % 2 !== 0) {
            let oddDouble = reverseArr[i] * 2;
            //console.log(oddDouble)
            if (oddDouble > 9) {
                oddDouble -= 9;
            }
            sum += oddDouble;
        } else {
            sum += reverseArr[i];
        }
            
    }
    //console.log(reverseArr);
    //console.log(sum);
    return sum % 10 === 0; 
} 

/*
console.log(validateCard(valid1));
console.log(validateCard(valid2));
console.log(validateCard(valid3));
console.log(validateCard(valid4));
console.log(validateCard(invalid1));
console.log(validateCard(invalid2));
console.log(validateCard(invalid3));
console.log(validateCard(invalid4));
*/


/*
function validateCard(arr) {
    // Reverse arr
    let reverseArr = arr.reverse();
    //console.log(reverseArr);

    for (let i = 0; i < reverseArr.length; i++) {
        // Select odd index elements
        if (i % 2 !== 0) {
            reverseArr[i] *= 2;
            if (reverseArr[i] > 9) {
                reverseArr[i] -= 9;
            }
        } else {
            reverseArr[i] = reverseArr[i];
        }
    }
    //console.log(reverseArr);
    let sum = reverseArr.reduce((a, b) => a + b);
    //console.log(sum);
    return sum % 10 === 0;
}
*/


const findInvalidCards = nestedArrs => {
    let invalid = [];
    for (let i = 0; i < nestedArrs.length; i++) {
        if (!validateCard(nestedArrs[i])) {
            invalid.push(nestedArrs[i].reverse());
        }
    }
    //console.log(invalid);
    return invalid;
}

//console.log(validateCard(invalid1));
//console.log(findInvalidCards(batch));
const invalid = findInvalidCards(batch);
console.log(invalid);

const idInvalidCardCompanies = (invalidCards) => {
    const companies = [];
    for (let i = 0; i < invalidCards.length; i++) {
        // Look for unidentified companies
        if (invalidCards[i][0] !== 3 && invalidCards[i][0] !== 4 && invalidCards[i][0] !== 5 && invalidCards[i][0] !== 6) {
        console.log('Company not found');
        } else if (invalidCards[i][0] === 3) {
            companies.push('Amex');
        } else if (invalidCards[i][0] === 4) {
            companies.push('Visa');
        } else if (invalidCards[i][0] === 5) {
            companies.push('Mastercard');
        } else if (invalidCards[i][0] === 6) {
            companies.push('Discover');
        }
    }
    const companiesOnce = companies.filter((a, b) => {
        return companies.indexOf(a) === b;
    })
    return companiesOnce;
}

console.log(idInvalidCardCompanies(invalid));

/*
If you’d like to challenge yourself further, you could consider the following:

Use different credit card numbers from a credit card number generator and validator site and test if your functions work for all types of credit cards.
To make it easier to test credit card numbers, create a function that accepts a string and converts it into an array of numbers like the initially provided arrays. (Check the hint for a helpful function)
Create a function that will convert invalid numbers into valid numbers.

*/

