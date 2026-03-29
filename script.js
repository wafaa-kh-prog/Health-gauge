function calculateCalories() {
    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let gender = document.getElementById("gender").value;
    let activity = parseFloat(document.getElementById("activity").value);
    
    let resultDiv = document.getElementById("result");

    if (weight <= 0 || height <= 0) {
    showResult("Enter valid positive numbers for weight and height", "#ffebee", "#c62828");
    return;
}


    if (!age || !weight || !height) {
        showResult(" Please fill all fields", "#ffebee", "#c62828");
        return;
    }

    if (age < 10 || age > 120) {
        showResult(" Please enter a realistic age (10-120 years)", "#ffebee", "#c62828");
        return;
    }
    if (weight < 20 || weight > 300) {
        showResult(" Please enter a realistic weight (20-300 kg)", "#ffebee", "#c62828");
        return;
    }
    if (height < 100 || height > 250) {
        showResult(" Please enter a realistic height (100-250 cm)", "#ffebee", "#c62828");
        return;
    }

    let bmr;
    if (gender === "female") {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    }

    let tdee = bmr * activity;
    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);
    bmi = bmi.toFixed(1);

    let bmiStatus = "";
    if (bmi < 18.5) bmiStatus = "Underweight, Consider a nutritious diet to gain weight";
    else if (bmi < 25) bmiStatus = "Normal weight, Keep up the good work!";
    else if (bmi < 30) bmiStatus = "Overweight, Regular exercise + balanced diet recommended";
    else bmiStatus = "Obese, Consult a professional for a healthy plan";


    showResult(
        "Your body needs about " + Math.round(tdee) + " kcal/day\nYour BMI is " + bmi + " (" + bmiStatus + ")",
        "#e8f5e9",
        "#2e7d32"
    );
}

function showResult(message, bgColor, textColor) {
    let resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerText = message;
    resultDiv.style.backgroundColor = bgColor;
    resultDiv.style.color = textColor;
    resultDiv.classList.add("show");
}
function clearForm() {
    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("gender").value = "female";
    document.getElementById("activity").value = "1.2";
    deleteResult();
}
function deleteResult() {
    let resultDiv = document.getElementById("result");
    resultDiv.classList.remove("show");
    resultDiv.style.display = "none";
}