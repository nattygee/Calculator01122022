var numPress = document.getElementById("seven-key");
var operator;

const keyBoardPress = document.querySelector('.num-screen');

//const textField = document.getElementById("text-field");

//applying new found learning from the test file
document.addEventListener("keydown", clicksy);

function clicksy(e) {
    if (e.key === "7") {
        document.getElementById("sevenKey").click();
    } else if (e.key === "8") {
        document.getElementById("eightKey").click();
    } else if (e.key === "9") {
        document.getElementById("nineKey").click();
    } else if (e.key === "4") {
        document.getElementById("fourKey").click();
    } else if (e.key === "5") {
        document.getElementById("fiveKey").click();
    } else if (e.key === "6") {
        document.getElementById("sixKey").click();
    } else if (e.key === "1") {
        document.getElementById("oneKey").click();
    } else if (e.key === "2") {
        document.getElementById("twoKey").click();
    } else if (e.key === "3") {
        document.getElementById("threeKey").click();
    } else if (e.key === "0") {
        document.getElementById("zeroKey").click();
        
        //function buttons
    } else if (e.key === "Backspace") {
        document.getElementById("clearBtn").click();
    } else if (e.key === "Enter") {
        document.getElementById("equalsBtn").click();
    } else if (e.key === "-") {
        document.getElementById("subtractBtn").click();
    } else if (e.key === "+") {
        document.getElementById("additionBtn").click();
    } else if (e.key === "*") {
        document.getElementById("multiplyBtn").click();
    }
}

/*keyBoardPress.addEventListener('keydown' {
    console.log('hellur')
});

function showAlert(e) {
    if (e.keyCode === 50) {
        alert('oh no, no ' + e.key)
    }
}*/
function calcAlert(x) {
    alert('hello this is a calc' + x);
}

/*function showValue (val) {
    document.getElementById("text-field").value += val;
}*/

const thisField = document.querySelector('.testField');

//accidentally made this log every key that's pressed - crazy
window.addEventListener('keydown', x => {
    console.log(x);
})

function showValue(val) {
    return document.getElementById("text-field").value += val;
}

var sevenKeyd = document.getElementById('sevenKey');


console.log('is working');

console.log('still working');

/* figure out how to delete values that we've placed up in the text field
1. need a function that executes when button is hit
2. function needs to reference id of the text field
3. replace numbers with "" */

function clearValues() {
    document.getElementById("text-field").value = "";
    savedNums = [];
    operator = null;
}

//rigging subtract functionality - 'add' functionality can be added after i include an addition button lol
var savedNums = [];

function subtractValue() {
    savedNums.push(document.getElementById('text-field').value);
    //this function should allow the text in the field to be replaced entirely after a function button is hit and numbers are pressed (as opposed to just being erased to create space)
    document.getElementById('text-field').value = "";
    console.log(savedNums);
    operator = "-";
    //calculateNums();
}
function addValue() {
    savedNums.push(document.getElementById('text-field').value);
    document.getElementById('text-field').value = "";
    console.log(savedNums);
    operator = "+";
}
function multiplyValue() {
    savedNums.push(document.getElementById('text-field').value);
    document.getElementById('text-field').value = "";
    console.log(savedNums);
    operator = "*";
    //calculateNums();
}

function calculateNums() {
    if (operator === "-") {
        let displayNum = savedNums[0] - document.getElementById('text-field').value;
        document.getElementById('text-field').value = displayNum;
        console.log(displayNum);
        savedNums = [];
    } else if (operator === "+") {
        //note i'm using the Number() method? constructor(?) here because otherwise they would just concatenate
        let displayNum = Number(savedNums[0]) + Number(document.getElementById('text-field').value);
        document.getElementById('text-field').value = displayNum;
        console.log(displayNum);
        savedNums = [];
    } else if (operator === "*") {
        let displayNum = savedNums[0] * document.getElementById('text-field').value;
        document.getElementById('text-field').value = displayNum;
        console.log(displayNum);
        savedNums = [];
    } else if (operator === "÷") {
        let displayNum = savedNums[0] / document.getElementById('text-field').value;
        document.getElementById('text-field').value = displayNum;
        console.log(displayNum);
        savedNums = [];
    }
}

//minus button rigged to minus key('-') and equals button rigged to enter key('Enter') (EDIT: realized that i do that up above with all the other keyboard rigging if/else)

//making 

