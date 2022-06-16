//selectors

const output = document.querySelector('.output');
const result = document.querySelector('.result');
const keys = document.querySelectorAll('button');


//eventListeners

keys.forEach(key=>{
    key.addEventListener('click', calculate);
})
function calculate(){
    let buttonText = this.innerText;
    if(buttonText==='AC'){
        output.innerText = '';
        result.innerText = '';

        //decoration
        result.style.animation = '';
        output.style.animation = '';
        result.style.animationFillMode = '';
        output.style.animationFillMode = '';
        return;
    }
    if(buttonText === "DEL"){
        output.textContent = output.textContent.substr(0, output.textContent.length-1);
        return;
    }
    if(buttonText=== '='){
        result.innerText = eval(output.innerText)

        //decoration
        result.style.animation = 'big 0.5s ease-in-out';
        output.style.animation = 'small 0.5s ease-in-out';
        result.style.animationFillMode = 'forwards';
        output.style.animationFillMode = 'forwards';
    }else{
        output.textContent += buttonText;
        return
    }
}