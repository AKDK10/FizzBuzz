const readline = require('readline-sync');
console.log('please enter a number');
const response = readline.prompt();


let isDivisibleByNber = function(nber, d){
    return nber % d === 0;
}

let wordBeginsWithB = function(word){
    if(word.charAt(0) === "b" || word.charAt(0) === "B"){
         return true;
    } 
    else return false;
}
 
for(let i = 1; i <=response; i++){
    let wordToPrint = [];

    if(isDivisibleByNber(i,3)){
        wordToPrint.push("Fizz");
    }

    if(isDivisibleByNber(i,5)){
        wordToPrint.push("Buzz");
    }

    if(isDivisibleByNber(i,7)){
        wordToPrint.push("Bang");
    }

    if(isDivisibleByNber(i,11)){
        wordToPrint =["Bong"];
    }

    if(isDivisibleByNber(i,13)){
              
        let wordWithBIndex = wordToPrint.findIndex(wordBeginsWithB);
        if(wordWithBIndex === -1){
            wordToPrint.push("Fezz");
        }
        else
            wordToPrint = wordToPrint.slice(0, wordWithBIndex).concat("Fezz").concat(wordToPrint.slice(wordWithBIndex));      
              
    }
    
    if(isDivisibleByNber(i,17)){
        wordToPrint = wordToPrint.reverse();
    }

    if(wordToPrint.length === 0){
        wordToPrint = [i.toString()];
    }

    console.log(wordToPrint.join(""));
   
}

//user passes rules to implement
// for(let i = 0; i < process.argv.length; ++i) {
	
// }

