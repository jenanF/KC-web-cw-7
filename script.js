
function BMI(weight = 70, height = 1.8){

    let result = weight / (height * height);
    return result;
}
console.log(BMI(61, 163))
console.log(BMI())

function Status(BodyMass){

    let res = document.getElementById("result")

    if(BodyMass < 18.5){
        res.style.color="orange"
        return"you are underweight"
       
    }
    else if(BodyMass >= 18.5 && BodyMass < 25){
        res.style.color="green"
        return "you weight is healthy"
        
    }
    else if(BodyMass >= 25){
        res.style.color="red"
        return "you are overweight"
        
    }
}

function calculate(){

    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let bmi_value = BMI(weight, height);
    let desc = Status(bmi_value);
    let box = document.getElementById('result');
    box.innerText = bmi_value + " == " + desc;
}

