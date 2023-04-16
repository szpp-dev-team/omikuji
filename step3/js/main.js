const data = [
  {
    name: "大吉",
    rate: 0.01,
  },
  {
    name: "中吉",
    rate: 0.14,
  },
  {
    name: "小吉",
    rate: 0.15,
  },
  {
    name: "末吉",
    rate: 0.25,
  },
  {
    name: "吉",
    rate: 0.2,
  },
  {
    name: "凶",
    rate: 0.15,
  },
  {
    name: "大凶",
    rate: 0.1,
  },
];

function omikuji() {
  const number = Math.random();
  let temp = 0.0;
  let result;
  for (let i = 0; i < data.length; i++) {
    temp += data[i].rate;
    if (temp >= number) {
      result = i;
      break;
    }
  }
  document.getElementById("result").innerHTML = data[result].name;
}

function shareTwitter() {
  const result = document.getElementById("result").innerHTML;
  const url =
    "https://twitter.com/intent/tweet?hashtags=SZPPおみくじ&text=結果は「" +
    result +
    "」でした。";
  window.open(url, "_blank", "width=600,height=300");
}
