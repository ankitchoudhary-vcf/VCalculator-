document.getElementById("submit").addEventListener("click", calculate)
document.getElementById("7b").addEventListener("click", () => (des(7)))
document.getElementById("8b").addEventListener("click", () => (des(8)))
document.getElementById("9b").addEventListener("click", () => (des(9)))
document.getElementById("4b").addEventListener("click", () => (des(4)))
document.getElementById("5b").addEventListener("click", () => (des(5)))
document.getElementById("6b").addEventListener("click", () => (des(6)))
document.getElementById("1b").addEventListener("click", () => (des(1)))
document.getElementById("2b").addEventListener("click", () => (des(2)))
document.getElementById("3b").addEventListener("click", () => (des(3)))
document.getElementById("0b").addEventListener("click", () => (des(0)))
document.getElementById("+b").addEventListener("click", () => (des("+")))
document.getElementById("/b").addEventListener("click", () => (des("/")))
document.getElementById("-b").addEventListener("click", () => (des("-")))
document.getElementById("*b").addEventListener("click", () => (des("*")))
document.getElementById("%b").addEventListener("click", () => (des("%")))
document.getElementById("00b").addEventListener("click", () => (des("00")))
document.getElementById(".b").addEventListener("click", () => (des(".")))
document.getElementById("Cb").addEventListener("click", () => (rem("C")))
document.getElementById("ACb").addEventListener("click", () => (rem("AC")))



function calculate(){
    var input = document.getElementById("textField").value;
    var value = "";
    try {
    value = eval(input);

    }
    catch(err)
    {
        value = "Error";
    }
    document.getElementById("textField").value=value;
}

function des(val){

    document.getElementById("textField").value+=val;
}

function rem(val){
    if(val == "C")
    {
        document.getElementById("textField").value = "";
    }
    else{
        document.getElementById("textField").value = document.getElementById("textField").value.slice(0,-1);
    }
}