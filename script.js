//Opdracht 9 
//Function declaration
function calculateFormula1 (number1, number2){
    console.log((number1*number1+number2*number2)*(number1*number1+number2*number2));
}
calculateFormula1 (2,3);
//Function expression
const calculateFormula2 = function(number1, number2){
    console.log((number1*number1+number2*number2)*(number1*number1+number2*number2));
};
calculateFormula2 (2,3);
//Arrow function
const calculateFormula3 = (number1, number2) =>{
    console.log((number1*number1+number2*number2)*(number1*number1+number2*number2));
};
calculateFormula3 (2,3);