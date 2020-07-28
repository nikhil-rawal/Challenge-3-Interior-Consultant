var x = window.matchMedia("(max-width: 500px)")
myFunction(x)
x.addListener(myFunction)

function myFunction(x) {
    if (x.matches) {
        document.getElementById("show-menu").style.display = "block";
    } else {
        document.getElementById("show-menu").style.display = "none";
        document.getElementById("hide-menu").style.display = "none";
        document.getElementById("temp").style.display = "none";
        document.getElementById("wrapup").style.display = "block";
    }
}

function show() {
    document.getElementById("show-menu").style.display = "none";
    document.getElementById("hide-menu").style.display = "block";
    document.getElementById("temp").style.display = "block";
    document.getElementById("wrapup").style.display = "none";
}

function hide() {
    document.getElementById("hide-menu").style.display = "none";
    document.getElementById("show-menu").style.display = "block";
    document.getElementById("temp").style.display = "none";
    document.getElementById("wrapup").style.display = "block";
}