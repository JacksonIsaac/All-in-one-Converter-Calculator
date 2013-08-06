var a = document.getElementById('a');
var b = document.getElementById('b');
var add = document.getElementById('add');
var sub = document.getElementById('sub');
var div = document.getElementById('div');
var mul = document.getElementById('mul');
var output = document.getElementById('output');

add.addEventListener('click', function(){

    var out = (+a.value) + (+b.value);
    output.innerHTML = a.value+" + "+b.value+' = ' + out;
    
})

sub.addEventListener('click', function(){

    var out = (+a.value) - (+b.value);
    output.innerHTML = a.value+" - "+b.value+' = ' + out;
})

mul.addEventListener('click', function(){

    var out = (+a.value) * (+b.value);
    output.innerHTML = a.value+" * "+b.value+' = ' + out;
})

div.addEventListener('click', function(){

    var out = (+a.value) / (+b.value);
    output.innerHTML = a.value+" / "+b.value+' = ' + out;
})