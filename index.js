var progress = document.getElementById('progress');

document.getElementById('accept').addEventListener('click', function() {
    if(progress.value < 100) progress.value += 10;
}, false);

document.getElementById('reject').addEventListener('click', function() {
    progress.value -= 10;
}, false);
