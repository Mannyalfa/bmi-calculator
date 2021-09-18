function BMICalc() {
    var weight = parseFloat(document.querySelector("#weight").value);
    var height = parseFloat(document.querySelector("#height").value);
    var bmi = weight / (height * height) * 703;
    bmi = parseFloat(bmi).toFixed(2);
    if (bmi < 18.5) {
        document.getElementById("bmibox").innerHTML = bmi;
        document.getElementById("msgbox").innerHTML =
            "Your BMI is " + bmi + ". Category: Underweight";
        document.getElementById("msgbox").style.color = "gold";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        document.getElementById("bmibox").innerHTML = bmi;
        document.getElementById("msgbox").innerHTML =
            "Your BMI is " + bmi + ". Category: Normal range";
        document.getElementById("msgbox").style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
        document.getElementById("bmibox").innerHTML = bmi;
        document.getElementById("msgbox").innerHTML =
            "Your BMI is " + bmi + ". Category: Overweight";
        document.getElementById("msgbox").style.color = "brown";
    } else {
        document.getElementById("bmibox").innerHTML = bmi;
        document.getElementById("msgbox").innerHTML =
            "Your BMI is " + bmi + ". Category: Obese";
        document.getElementById("msgbox").style.color = "red";
    }
}
