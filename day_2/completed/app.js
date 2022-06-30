// // variables 
// // comments
// // condition 
// // function 
// // loops iteration  (for loop while map foreach)

// //  firstName = camalecase 

// // number 1
// // string "fhj dsfs"
// // undefined
// // null 



// //let firstname = null;
// console.log(typeof(firstname))
// let name = "React js"
//  add sub dive 
// * multiply
// + add
// - subract
//  / divide

// 2+2 =4
// "Aryan"+" "+"phuyal"="Aryanphuyal"

// let a = 12;
//  a =a+ 18;


// global scope
let counter = 0;
const value  = document.getElementById('value') 
value.innerHTML = counter;  
const resultValue = "";
const increaseButton = document.getElementById('increase')
const decreaseButton = document.getElementById('decrease')
const saveButton = document.getElementById('saveButton')
let isFirst = true;

const increaseAction =  (e)=>{
    if(counter>=20){
            alert("Limit reached")
    }else {
        counter++;
        value.innerHTML = counter;

    }
}

const decreaseAction =  ()=> {
    if(counter<=0){
        alert('cant be less than zero')
    }else{
        counter--;
        value.innerHTML = counter;
    }
}

increaseButton.addEventListener('click',increaseAction);

decreaseButton.addEventListener('click',decreaseAction)

const save=(e)=>{
    let result = document.getElementById('result')
    if(isFirst){
        isFirst=false;
        result.innerHTML +=" "+counter
    }else {
        result.innerHTML +="-"+counter
    }
    // result.innerHTML = newResult
}
// console.log(result);

saveButton.addEventListener('click',save)

// 5-1-12