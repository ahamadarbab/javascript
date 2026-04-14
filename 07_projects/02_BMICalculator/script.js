const form = document.querySelector("form")

// this usecase will give you empty value
// const height = parseInt(document.querySelector("#height").value)

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if(height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = "Please give a valid height";
    }
    else if(weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please give a valid weight";
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(1)
        // result.innerHTML = `${bmi}`;

        if(bmi < 18.5) {
            result.innerHTML = `${bmi}: Underweight`;  
        }
        else if(bmi >= 18.5 && bmi <= 25) {
            result.innerHTML = `${bmi}: Normal`;
        }
        else {
            result.innerHTML = `${bmi}: Overweight`;
        }
    }
})