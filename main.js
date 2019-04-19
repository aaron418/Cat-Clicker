const cat1 = document.querySelector("#img1");

let counter1 = 0;

const click = document.querySelector("#click");

click.textContent = counter1;

cat1.addEventListener("click",()=>{
    counter1++;
    click.textContent = counter1;
})



const cat2 = document.querySelector("#img2");

let counter2 = 0;

const clicker = document.querySelector("#clicker");

clicker.textContent = counter2;

cat2.addEventListener("click",()=>{
    counter2++;
    clicker.textContent = counter2;
})