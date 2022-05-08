console.log('JS Running');
let Started = false;// This checks if user starting click buttons if not then we remove the zero before the user clicks s
let OutputLabel = document.getElementById('OutputLabel');
//OutputLabel.innerHTML = '2006';
let Numbers = [document.getElementById("ZeroNumb"),document.getElementById("OneNumb"), document.getElementById("TwoNumb"),
    document.getElementById("ThreeNumb"), document.getElementById("FourNumb"),
    document.getElementById("FiveNumb"), document.getElementById("SixNumb"),
    document.getElementById("SevenNumb"), document.getElementById("EightNumb"),
    document.getElementById("NinthNumb")];
let Operators = [document.getElementById("PlusSign"), document.getElementById("MinusSign"),
    document.getElementById("MultiplySign"), document.getElementById("DivideSign")];
let EqualsButton = document.getElementById("EqualsTo");
//Assigned all the buttons to variables and arrays
let FirstNumber;
let SecondNumber;
// Now looping through all numbers and making OnClick function on them
for (let i = 0; i < Numbers.length; i++) {
    Numbers[i].onclick = function () {
        if (Started == false) {
            OutputLabel.innerHTML = Numbers[i].innerHTML;
            Started = true;
        }
        else {
            OutputLabel.innerHTML += Numbers[i].innerHTML;
        }
    }
}



//When the equals button is clicked
EqualsButton.onclick = function () {
    
};

