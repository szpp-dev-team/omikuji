const data = ["大吉", "中吉", "小吉", "末吉", "吉", "凶", "大凶"];

function omikuji() {
  document.getElementById("result").innerHTML =
    data[Math.floor(Math.random() * data.length)];
}
