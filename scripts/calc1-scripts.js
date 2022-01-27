var numPress = document.getElementById("seven-key");

const keyBoardPress = document.querySelector('.num-screen');

//applying new found learning from the test file
document.addEventListener("keydown", clicksy);

function clicksy(e) {
    if (e.key === "7") {
        document.getElementById("sevenKey").click();
        console.log('7 key pressed');
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