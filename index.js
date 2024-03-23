let progress = document.getElementById('progress');

document.getElementById('accept').addEventListener('click', function() {
    if(progress.value < 500) progress.value += 100;
}, false);

document.getElementById('reject').addEventListener('click', function() {
    progress.value -= 10;
}, true);
