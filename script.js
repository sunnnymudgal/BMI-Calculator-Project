const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const range = document.querySelector('#range')

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please provide a valid height`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please provide a valid weight`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
        
        if (bmi < 18.5) {
            range.innerHTML = 'Underweight';
        } else if (bmi > 25.0) {
            range.innerHTML = 'Overweight';
        } else {
            range.innerHTML = 'Normal weight';
        }
    }
});
