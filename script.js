let text = document.querySelector('.text');
let str = text.innerHTML;
text.innerHTML = '';
let count = 0;
let timer;


function print(){
    text.innerHTML += str.charAt(count);
    count++;
    if(str.length <= count){
        clearInterval(timer);
    }
    console.log(count); 
};

timer = setInterval(print, 10);