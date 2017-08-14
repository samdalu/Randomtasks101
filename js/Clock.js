
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setInterval(startTime , 10000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function myFunction() {

    var res = document.getElementById("demo").innerHTML;
    var str = res.toUpperCase();
    document.getElementById("demo").innerHTML = str;
}
