const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();// to stop it because we have to add weight and height value

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#height').value)
    const results = document.querySelector('#results');

    if(height == ' ' || height < 0 || isNaN(height))
    {
        results.innerHTML =  `Please give a valid height ${height}`;
    }
    else if(weight == '' || weight < 0 || isNaN(weight))
    {
        results.innerHTML = `Please give a valid Weight ${weight}`;
    }
    else
    {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`
    }
   

})
