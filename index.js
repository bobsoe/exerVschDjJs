

var color = [, "yellow", "blue",
"orange", "red", "green"];

document.querySelector("div").addEventListener(
        "mouseover", function () {

    document.querySelector("div").style.backgroundColor = "blue";
})

document.querySelector("div").addEventListener(
    "mousedown", function () {

document.querySelector("div").style.backgroundColor = "red";
})

document.querySelector("div").addEventListener(
    "mouseup", function () {

document.querySelector("div").style.backgroundColor = "yellow";
})

document.querySelector("div").addEventListener(
    "dblclick", function () {

document.querySelector("div").style.backgroundColor = "green";
})

document.querySelector("div").addEventListener(
    "scroll", function () {

document.querySelector("div").style.backgroundColor = "orange";
})