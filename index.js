const display = document.getElementById("display");

function add(input){
    display.value += input;
}
function cleardata(){
    display.value = "";
}
function calc(){
    try{
        display.value = eval(display.value)
    }
    catch(errors){
        display.value = "Error";
    }
}