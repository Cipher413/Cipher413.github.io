function rpt(fnct, times){for (i=0; i<times; i++)fnct()}
function dwr(text){document.write(text)}
function pR(array){return array[Math.round(Math.random()*(array.length-1))];}   
function chance(prob){n=Math.round(Math.random()*100);if (prob>n){return true}}
function write(id, doc){document.getElementById(id).innerHTML=(doc)}
function writeadd(id, doc){document.getElementById(id).innerHTML+=(doc)}
function getRandomInt(max) {return Math.floor(Math.random() * Math.floor(max));}
function factorial(n){if(n===0){return 1}else m=n;while(m>1){m--;n*=m;}return n}
function divisors(n){var i=1;while (i<=n){if(n%i===0){document.writeln(i)};i++}}
function setCookie(key, value) {var expires = new Date();expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();}
function getCookie(key) {var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');return keyValue ? keyValue[2] : null;}
