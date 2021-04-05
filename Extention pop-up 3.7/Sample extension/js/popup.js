init()

async function init() {
    //Here are defined time and boolean variables
    let myVar = setInterval(myTimer, 1000);
    let invalid = true;
    let timer = 0;
    //Here are defined elements of pop up
    let elementLoader = document.getElementById("loader");
    let elementForm = document.getElementById("form");
    let elementWelcome = document.getElementById("welcome");
    let elementWrong = document.getElementById("wrong");
    let buttonx = document.getElementById("buttonx");
    let elementName = document.getElementById("nameu");
    let elementPass = document.getElementById("passw");

    //Here we hide some elements
    elementWelcome.classList.toggle("noshow");
    elementWrong.classList.toggle("noshow");
    elementForm.classList.toggle("noshow");

    //Here works setInterval function to imitate loading
    function myTimer() {

        timer++;
        if (timer === 1) {
            elementLoader.classList.toggle("noshow");
            elementForm.classList.toggle("noshow");
            clearInterval(myVar);
        }

    }

    //Here we set handlers on form elements
    elementName.onchange = nameOnChange;
    elementPass.onchange = passOnChange;
    buttonx.onclick = onsubmitHandler;

    // Here validation functon
    function validate(elem, pattern) {
        var res = elem.value;
        if (res != pattern) {
            invalid = true;
        } else {
            invalid = false;
        }
    }

    function nameOnChange() {
        var pattern = "admin";
        validate(this, pattern);
    }

    function passOnChange() {
        var pattern = "admin";
        validate(this, pattern);
    }

    //Here we show welcome/wrong upon input
    function onsubmitHandler() {
        if (invalid) {
            elementForm.classList.toggle("noshow");
            elementWrong.classList.toggle("show");
        } else {
            elementForm.classList.toggle("noshow");
            elementWelcome.classList.toggle("show");
        }
    }


}