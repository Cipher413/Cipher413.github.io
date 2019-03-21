<!DOCTYPE html>
<html>
	<head>
		<title>Page Title</title>
		<script src="https://cdn.jsdelivr.net/gh/Cipher413/cipher413.github.io/library.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	</head>
	<body onload="UI(); load()">
	    <style>body {font-family: "Poor rd", Courier, monospace; background-color:#beb}
h1 {text-align: center;}
button {background-color:#ded; padding:2px; margin:1px;}
#intro {text-align: center; font-weight:bold;}
.popup {display:none;}</style>
		<h1>Chem Clicker</h1>
		<p id="intro">Make a star (1E55 H)</p>
		<p id="stats"></p>
		<button onclick="cH()">Create Hydrogen</button> 
		<button onclick="bHc()">Buy Hydrogen creator (5$)</button><br><br>
		<button onclick="mHe()">Fuse Hydrogen into Helium (4->1)</button>
		<button onclick="bHef()">Buy Hydrogen foundry (5$)</button><br><br>
		<button onclick="sHe()">Sell Helium</button>
		<button onclick="bHes()">Buy Helium seller</button><br><br>
		<button class="popup" id="Hcbo1" onclick="bHcbo(1)">Buy 4x H Creator bonus (20H, 5He, 5$)</button>
		<button class="popup" id="Hcbo2" onclick="bHcbo(2)">Buy 25x H Creator bonus (200H, 50He, 50$)</button>
		<br><br>
		<button onclick="reset()"><b>RESET</b></button><button onclick="test()"><b>TEST</b></button>
		<p>placeholder</p>
		<script>function setCookie(key, value) {
            var expires = new Date();
            expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
            document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
        }

        function getCookie(key) {
            var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
            return keyValue ? keyValue[2] : null;
        }
function reset(){H=0}
function test(){console.log(H)}
    //c==>create m==>make s==>sell b=>buy *m==>maker *c==>creator bo==>bonus
var H=0; var Hc=0; var Hm=1;
var He=0; var Hef=0; var Hes=0;
var money=0; var i=1;
var b="<br>";var s=" ";
var Hcbo1=false; var Hcbo2=false;
setInterval(timer, 1000);

function load(){
    loadH=getCookie("Hydrogen")
    loadH=parseInt(loadH)
    if(loadH!=undefined){H=loadH}
    UI()
}

function save(){
    H.toString()
    setCookie("Hydrogen", H)
}

function timer(){
    H+=Hc*Hm;
    i=1;
    while(H>=4&i<=Hef){if(H/4>=1){H-=4;He++} i++}
    i=1;
    while(He>=1&i<=Hes){if(He>=1){money++;He--} i++}
    UI();
    if(chance(100)){save();}
}
function cH(){H++;UI()}
function mHe(){if(H>=4){H-=4;He++}UI()}
function sHe(){if(He>=1){He--; money++}UI()}
function bHef(){if(money>=5){money-=5;Hef++}UI()}
function bHc(){if (money>=5){money-=5;Hc++;UI()}}
function bHes(){if (money>=5){money-=5;Hes++;UI()}}

function bHcbo(tier){switch(tier){
    case 1:
        if(H>=20&&He>=5&&money>=5){H-=20; He-=5; money-=5;Hm*=4;$("#Hcbo1" ).remove();UI()}
        break;
    case 2:
        if(H>=200&&He>=50&&money>=50){H-=200; He-=50; money-=50;Hm*=25;$("#Hcbo2" ).remove();UI()}
        break;
}}

function UI(){
    check();
    write("stats",  "H :"+H+s+`Hc:${Hc} Hm:${Hm} <br> He:${He} Hef:${Hef} Hes:${Hes}<br> $:${money}`);
}

function check(){
    if(H>=15&&Hcbo1===false){document.getElementById("Hcbo1").style.display = "block"; Hcbo1=true}
    if(H>=50&&Hcbo2===false){document.getElementById("Hcbo2").style.display = "block"; Hcbo2=true}
}</script>
	</body>
</html>
