var div = document.createElement("div");
div.style.textAlign = "center";

var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button = document.createElement("button");
button.setAttribute("type","button");
button.style.color = "white";
button.style.marginLeft = "10px"
button.style.backgroundColor = "blue"
button.innerHTML = "Search"
button.addEventListener("click",foo);

var active = document.createElement("div");
active.setAttribute("id","active");

var recover = document.createElement("div");
recover.setAttribute("id","recover");

var death = document.createElement("div");
death.setAttribute("id","death");

div.append(input,button,active,recover,death);
document.body.append(div)

async function foo(){
    var countryname = document.getElementById("country").value
    var url = `https://api.covid19api.com/dayone/country/${countryname}`
    var res = await fetch(url);
    var result = await res.json();
    var index = result.length - 1;
    active.innerHTML = `Total Active Cases:${result[index].Active}`;
    recover.innerHTML = `Total Recovered Cases:${result[index].Recovered}`;
    death.innerHTML = `Total Deaths Cases:${result[index].Deaths}`;
}