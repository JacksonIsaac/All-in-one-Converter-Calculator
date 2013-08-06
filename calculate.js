var height = document.getElementById('Height');
var weight = document.getElementById('Weight');
var button = document.getElementById('myButton');



button.addEventListener('click', function(){

    var bmi = (+weight.value)/(((+height.value)/100)*(((+height.value)/100)));
    // Show alert box with this text
    if (bmi < 18.5) { 
    	alert(bmi + '\n' + "Underweight. Eat Mess FOOD :)");
    }
    else alert(bmi + '\n' + "Healthy");
    
})

