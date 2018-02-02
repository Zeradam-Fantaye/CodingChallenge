// Prompt the user to get the input data
 let input = prompt("Enter the numbers");

// One digit array -- text form
let oneDigit = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

// Two digit array between 10 and 19 -- text form
let digits = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

// Two digit array for 20, 30, 40, 50, 60, 70, 80, 90
let twoDigits = ["Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

let value = parseInt(input);
let textDollar;
let teensFlag = false;

//Helper function to construct three digit numbers
threeDigitHelper = num => {

    let text;

    if (num.length === 1)
        text = ones(num);

    // All number 10 until 99
    if (num.length === 2){
        text = tens(num);
        text += ones(num);
        teensFlag = false;
    }

    if (num.length === 3){
        text = hundreds(num);
        text += tens(num);
        text += ones(num);
        teensFlag = false;
    }

    return text;
}

//Function to construct 7 digt numbers to 9 digit numbers
millions = num => {

    let text;

    if (num.length === 7)
        num_sbstr = num.substring(0, 1);
    if (num.length === 8)
        num_sbstr = num.substring(0, 2);
    if (num.length === 9)
        num_sbstr = num.substring(0, 3);

    text = threeDigitHelper(num_sbstr);

    return text + "Million";
}

//Function to construct 4 digt numbers to 6 digit numbers
thousands = num => {

    let num_sbstr;
    let text;
    
    if (num.length === 4)
        num_sbstr = num.substring(0, 1);
    else if (num.length === 5)
        num_sbstr = num.substring(0, 2);
    else if (num.length === 6)
        num_sbstr = num.substring(0, 3);

    else if (num.length === 7)
        num_sbstr = num.substring(1, 4);
    else if (num.length === 8)
        num_sbstr = num.substring(2, 5);
    else 
        num_sbstr = num.substring(3, 6);

    text = threeDigitHelper(num_sbstr);

    if (text.length > 1)
        return text + "Thousand";
    else
        return "";
}

//Function to construct 3 digit numbers
hundreds = num => {
    let val = parseInt(num);
    let i;
    let hundredsDigit;

    for(i = 0; i < 3; i++){
        hundredsDigit = val % 10;
        val = Math.floor(val / 10);
    }

    if (hundredsDigit === 0)
        return "";
    else
        return oneDigit[hundredsDigit - 1] + "Hundred";
}

//Function to construct 2 digit numbers
tens = num => {
    
    let val = parseInt(num);
    let i;
    let tenDigit;

    for(i = 0; i < 2; i++){
        tensDigit = val % 10;
        val = Math.floor(val / 10);
    }

    if (tensDigit === 1){
        teensFlag = true;
        
        return digits[parseInt(num[num.length - 1])];
    }

    else if (tensDigit === 0){
        return ""; 
    }

    else
        return twoDigits[tensDigit - 2];
}

//Function to construct 1 digit numbers
ones = num => {
    let val = parseInt(num);
    let onesDigit = val % 10;

    if (val === 0 && num.length === 1)
        return "Zero";
    else if (onesDigit === 0 || teensFlag)
        return "";
    else 
        return oneDigit[onesDigit - 1]
}

// All number from 1,000,000 to 999,999,999
if (input.length > 6 && input.length < 10){
    textDollar = millions(input);
    textDollar += thousands(input);
    textDollar += hundreds(input);
    textDollar += tens(input);
    textDollar += ones(input);
    teensFlag = false;
}

// All numbers from 1,000 to 999,999
else if (input.length > 3 && input.length < 7){
    textDollar = thousands(input);
    textDollar += hundreds(input);
    textDollar += tens(input);
    textDollar += ones(input);
    teensFlag = false;
}

// All numbers from 100 to 999
else if (input.length === 3){
    textDollar = hundreds(input);
    textDollar += tens(input);
    textDollar += ones(input);
    teensFlag = false;
}

// All numbers from 10 until 99
else if (input.length === 2){
    textDollar = tens(input);
    textDollar += ones(input);
    teensFlag = false;
}

// All numbers from 0 to 9
else
    textDollar = ones(input);

textDollar += "Dollars";
console.log(textDollar);










