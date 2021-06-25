var money = 0;
var scribbles = 0;
setInterval(update, 500);
function scribble() { 
  scribbles++;
}
function sellArt() {
  money += 5 * scribbles;
}
function update() {
  get("money").innerHTML = `${money}$`;
}
function get(id) {
  return document.getElementById(id);
}