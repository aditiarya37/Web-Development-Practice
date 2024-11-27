const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML = 'Please enter a valid height'
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML = 'Please enter a valid weight'
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        if(bmi<=18.5){
            results.innerHTML = `<span>Your BMI is ${bmi} and you are in underweight category.</span>`
        }
        else if(bmi>18.5 && bmi<=24.9){
            results.innerHTML = `<span>Your BMI is ${bmi} and you are in normal category.</span>`
        }
        else{
            results.innerHTML = `<span>Your BMI is ${bmi} and you are in overweight category.</span>`
        }
    }
});