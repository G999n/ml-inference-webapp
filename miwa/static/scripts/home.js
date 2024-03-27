document.addEventListener('DOMContentLoaded', function() {
    console.log('Working');
    var x = document.getElementById("para");
    console.log(x);
    if(x) {
        x.innerHTML = "Wow, the script is working!";
    }
});