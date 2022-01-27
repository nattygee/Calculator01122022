const btnPress = document.querySelector('.clickHere');
const input1 = document.getElementById('eventTest');


//window.addEventListener('keydown', logSomething);

/*function logSomething (x) {
    if (x.keyCode === 65) {
        console.log('helloway');
    }
    console.log("A-button is logging innit");
}*/

console.log("can confirm no errors");   

let logSomething = x => {
    if (x.keyCode === 65) {
        console.log('it works again')
    }
}

//tieing up key presses with event listeners and logging results - nothing fancy but finally got the event listeners to work. The first variable in the string x.y.z needed to be like 'window' or 'document'... before i was trying to use a function or something
window.addEventListener('keydown', logSomething)

//document.addEventListener('keydown', pressAnyKey);

/*function pressAnyKey(e) {
    if (e.keyCode != '') {
        /*originally i had const pressBtn = document.getElementById("eventTest")
        and then pressBtn.style.fontSize = "2em" and it was throwing an error
        document.getElementById("eventTest").style.fontSize = "2em";
        console.log('keypressed');
    }
}*/
document.addEventListener('keydown', clicker);

function clicker(y) {
    if (y.keyCode === 13) {
        document.getElementById("remoteClick").click();
        document.getElementById("remoteClick").style.color = "red";
        console.log('clicked');
    }
}

//trying to figure how to create shortcut keys i guess

/*function pressBtn(y) {
    if (y.keyCode === 13) {
        clickBtn.translate(39);
    }
}*/

//document.addEventListener('keydown', pressBtn);



/*function logSomething () {
    console.log('hey');
}*/

//console.log(btnPress)