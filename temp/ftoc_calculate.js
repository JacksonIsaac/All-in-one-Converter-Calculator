var fahr = document.getElementById('fahr')
var button = document.getElementById('myButton');



button.addEventListener('click', function(){

    var cel = ((fahr.value)-32) * (5/9);
    alert('Celcius = '+cel.toFixed(3)+'°C');
    
    
})

