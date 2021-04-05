// init()

// async function init(){
//     console.log(document.body.innerText)
// }


var myVar = setInterval(myTimer, 1000);

let elementWelcome = document.getElementById("welcome");

elementWelcome.classList.toggle("noshow");

let elementWrong = document.getElementById("wrong");

elementWrong.classList.toggle("noshow");
// 
let button = document.getElementById("but");
// 
let invalid = true;
let timer = 0;

let element = document.getElementById("loader");
element.classList.toggle("noshow");
let elementOne = document.getElementById("forma");
elementOne.classList.toggle("show");



function myTimer() {

    timer++;
    if (timer === 1) {
        clearInterval(myVar);
    }
    form1.userName.onchange = nameOnChange;
form1.email.onchange = emailOnChange;
button.onclick = onsubmitHandler;
    /////////////////////////////////////////

    // init()

    // function init() {

    // }

    

    function validate(elem, pattern) {
        var res = elem.value;
        if (res != pattern) {
            invalid = true;
        } else {
            invalid = false;
        }
    }

    function nameOnChange() {
        var pattern = 1;
        validate(this, pattern);
    }

    function emailOnChange() {
        var pattern = 1;
        validate(this, pattern);
    }


    function onsubmitHandler() {
        if (invalid) {
            element.classList.toggle("noshow");
            elementOne.classList.toggle("noshow");
            elementWrong.classList.toggle("show");
             
       
        } else {
             
            element.classList.toggle("noshow");
            elementOne.classList.toggle("noshow");
            elementWelcome.classList.toggle("show");
          
          
        }
    }
}