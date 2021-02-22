//document.getElemtById("intro").style.backgroundColor = "red";
//document.getElementById("customer1").setAttribute("style", "font-weight:bold");
//var e = document.getElementById("intro");



/*let switchReverseMode = document.getElementById("random");
let header = document.querySelector("header");
let h2 = document.getElementsByTagName("h2");
let p = document.getElementsByTagName("p");
let nav = document.getElementsByTagName("a");
let reverseModeLabel = document.querySelector("label");

const reverseMode = () => {
    if (document.getElementById("random").checked === true) {  //this if statement changes page to reversemode
        document.body.style.backgroundColor = "#1f1f1f";
        header.style.backgroundColor = "black";
        reverseModeLabel.style.color = "#FFF";

        for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = "#FFF";
            h2[i].style.opacity = "0.87";
        }

        for (let i = 0; i < p.length; i++) {
            p[i].style.color = "#FFF";
            p[i].style.opacity = "0.87";
        }

        for (let i = 0; i < nav.length; i++) {
            nav[i].style.color = "#FFF";
            nav[i].style.opacity = "0.87";
        }
        return;
    } else {                                                            //this else statement changes page to lightmode
        document.body.style.backgroundColor = "#f0f2f5";
        header.style.backgroundColor = "white";
        reverseModeLabel.style.color = "#222";

        for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = "#222";
        }

        for (let i = 0; i < p.length; i++) {
            p[i].style.color = "#222";
        }

        for (let i = 0; i < nav.length; i++) {
            nav[i].style.color = "#222";
        }
        return;
    }
};
function displayDate() {
    document.getElementById("random").innerHTML = Date();
}
switchReverseMode.onclick = displayDate ;*/
let header = document.querySelector("header");
let footer = document.querySelector("footer");
let body = document.querySelector("body");
let box = document.querySelector("#form-switch");
let main = document.querySelectorAll(".main");
let color;
function changeColor(div, color) {
    div.style.background = color;
    
}
box.addEventListener("change", function () {
    if (box.checked === true) {
        body.style.background = "linear-gradient(90deg, #ddd, #eee, #ddd)";
        body.style.transitionDelay = "1s";
        header.style.background = "linear-gradient(180deg,#fafafa,#777,#fafafa)";
        footer.style.background = "linear-gradient(180deg,#fafafa,#777,#fafafa)";
        color = "linear-gradient(to right,#fafafa,#777)";
        
        for (i = 0; i < main.length; i++) {
            main[i].style.background = color;
        }

        
    }
    else {

        body.style.background = "linear-gradient(90deg, #eee, #ddd, #eee)";
        body.style.transitionDelay = "1s";  
        header.style.background = "linear-gradient(180deg,#777,#fafafa,#777)";
        footer.style.background = "linear-gradient(180deg,#777,#fafafa,#777)";
        color = "linear-gradient(to right,#777,#fafafa)";
       
        for (i = 0; i < main.length; i++) {
            main[i].style.background = color;
        }
    }

});