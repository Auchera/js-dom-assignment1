//! HEADER AREA

document.querySelector("header").style.backgroundColor = "#28282B";
document.querySelector("header").style.color = "white";
document.querySelector("header").style.padding = "1rem";

document.querySelector("#title").style.textAlign = "center";
document.querySelector("#title").textContent = "JavaScript Dom Assignment 1";

document.querySelector(".nav-item").style.listStyleType = "none";

document.querySelector(".nav-item").style.display = "flex";
document.querySelector(".nav-item").style.justifyContent = "center";
document.querySelector("#home").style.marginRight = "2rem";

//! INPUT AREA

document.getElementById("username").value = "Auchera";
document.getElementById("password").setAttribute("type", "text");
document.getElementById("password").value = "1907!!+?_Q@598dDDf";

document.querySelector(".btn").style.backgroundColor = "#353935";
document.querySelector(".btn").style.color = "white";
document.querySelector(".btn").style.padding = "10px";
document.querySelector(".btn").style.width = "75px";
document.querySelector(".btn").style.borderRadius = "10px";
document.querySelector(".btn").style.borderColor = "darkorange"
document.querySelector(".btn").textContent = "Log-in"

//! PROJECT AREA

// const listItem1 = document.createElement("li");
// const listItem2 = document.createElement("li");
// const listItem3 = document.createElement("li");
// const listItem4 = document.createElement("li");
// const listItem5 = document.createElement("li");

// listItem1.textContent = "Hello World!";
// listItem2.textContent = "Guess Number";
// listItem3.textContent = "Checkout Page";
// listItem4.textContent = "Wallet Project";
// listItem5.textContent = "Api Project";

// const ul = document.querySelector("#projects ul");

// ul.appendChild(listItem1);
// ul.appendChild(listItem2);
// ul.appendChild(listItem3);
// ul.appendChild(listItem4);
// ul.appendChild(listItem5);


const projeAdlari = ["Hello World!", "Guess Number", "Checkout Page", "Wallet Project", "Api Project"];

for (let i = 0; i < projeAdlari.length; i++) {
    const listItem = document.createElement("li");

    listItem.textContent = projeAdlari[i];
    listItem.setAttribute("id", "proje" + (i + 1));

    const ul = document.querySelector("#projects ul");
    ul.appendChild(listItem);
}
