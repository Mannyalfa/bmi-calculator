function BMICalc() {
    var weight = parseFloat(document.querySelector("#weight").value);
    var height = parseFloat(document.querySelector("#height").value);
    var bmi = weight / (height * height) * 703;
    bmi = parseFloat(bmi).toFixed(2);
    if (bmi < 18.5) {
        document.getElementById("bmibox").innerHTML = bmi;
        document.getElementById("msgbox").innerHTML =
            "Your BMI is " + bmi + ": Underweight";
        document.getElementById("msgbox").style.color = "gray";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        document.getElementById("bmibox").innerHTML = bmi;
        document.getElementById("msgbox").innerHTML =
            "Your BMI is " + bmi + ": Normal range";
        document.getElementById("msgbox").style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
        document.getElementById("bmibox").innerHTML = bmi;
        document.getElementById("msgbox").innerHTML =
            "Your BMI is " + bmi + ": Overweight";
        document.getElementById("msgbox").style.color = "brown";
    } else if (bmi >= 29.9 && bmi < 39.9) {
        document.getElementById("bmibox").innerHTML = bmi;
        document.getElementById("msgbox").innerHTML =
            "Your BMI is " + bmi + ": Obese";
        document.getElementById("msgbox").style.color = "maroon";
    } else {
        document.getElementById("bmibox").innerHTML = bmi;
        document.getElementById("msgbox").innerHTML =
            "Your BMI is " + bmi + ": Extremely Obese";
        document.getElementById("msgbox").style.color = "red";
    }
}
