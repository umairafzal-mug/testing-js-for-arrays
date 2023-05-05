








function calculater(op, value1, value2){
    if(op === "/"){
        console.log(value1/value2);
    }
    else if(op === "*"){
        console.log(value1*value2);
    }
    else if(op === "+"){
        console.log(value1+value2);
    }else if(op === "-"){
        console.log(value1-value2);
    }
    
}


let value1 = prompt("Enter first num")
let op = prompt("Enter perator")
let value2 = prompt("Enter second num")
console.log(value1, op, value2);

calculater(op, value1, value2);







// Global Variable
// let name;

// // Set Value in Global Variable
// function setName(val){
//     name=val
// }

// // Get Value From Global Variable
// function getName(){
//     // return name;
//     return name;
// }



// // Call the set Method to set Value
// setName("Umair")

// // Call the get Method to Get Value
// var getNameVal= getName()
// // Logged The Value
// console.log(getNameVal);