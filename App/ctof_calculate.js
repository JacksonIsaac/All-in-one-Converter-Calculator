var cel = document.getElementById('cel')
var button = document.getElementById('myButton');



button.addEventListener('click', function(){

    var fahr = cel.value * (9/5) + 32;

    alert('Fahreneit = '+fahr.toFixed(3)+'°F');
    
})

