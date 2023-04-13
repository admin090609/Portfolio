let display = document.getElementById('span');
let plusminus= document.getElementById('plusminus');
let percent= document.getElementById('percent');

function PC(){
    display.value=display.value* 0.01
}

function PM(){
        if(display.value>0){
            display.value=-display.value
        }
        else{
            display.value=-display.value
        }
}