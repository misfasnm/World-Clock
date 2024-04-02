let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
londonDateElement.innerHTML = moment().format("dddd MMMM Do YYYY");
londonTimeElement.innerHTML = moment().format("h:mm:ss a");
