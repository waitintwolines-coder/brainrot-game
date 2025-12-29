const characters = [
  { name: "とぅんとぅんとぅんとぅんさふーる", image: "images/tuntunsaful.png" },
  { name: "とらられろ・とららら", image: "images/torara.png" },
  { name: "ばれりーな・かぷちーな", image: "images/barerina.png" },
  { name: "ぼんばるでぃーろ・くろこでぃろ", image: "images/bombardiro.png" },
  { name: "ぶるぶる・ぱたぴん", image: "images/buruburu.png" },
  { name: "ちんぱんじーに・ばなにーに", image: "images/timpanjini.png" },
  { name: "かぷちーの・あさしーの", image: "images/captino.png" },
  { name: "りりり・らりら", image: "images/riririrarira.png" },
  { name: "とりっぴ・とろっぴ", image: "images/trippitroppi.png" },
  { name: "ぼねか・あんばらぶ", image: "images/bonekaanbarabu.png" },
  { name: "まてーお", image: "images/mateo.png" },
  { name: "ふりご・かめろ", image: "images/frigokamero.png" },
  { name: "らいの・とーすてりーの", image: "images/raino.png" },
  { name: "ら・ヴぁか・さとぅるの・さとぅるにーた", image: "images/ravaka.png" },
  { name: "ぴっちょーね・まっきーな", image: "images/pichone.png" },
  { name: "じらっふぁ・ちぇれすて・ヴぃあっじょ・あぐれすと", image: "images/jiraffa.png" },
  { name: "おらんぎゅてぃーに・あななしーに", image: "images/oragutini.png" },
  { name: "ぶるびっと・たらくとりーと", image: "images/bulbitto.png" },
  { name: "ぽっと・ほっとすぽっと", image: "images/pothotspot.png" },
  { name: "とらられろ・ここちーに", image: "images/torararerokotini.png" },
  { name: "じぶら・ずぶら・じぶらりーに", image: "images/zibrazubra.png" },
  { name: "ぴぴ・ぽてと", image: "images/pipipoteto.png" },
  { name: "しぐま・ぼーい", image: "images/zigmaboy.png" },
  { name: "ぶるばろに・るりろり", image: "images/burbaroni.png" },
  { name: "とととさふーる", image: "images/totototosaful.png" },
  { name: "ぶるーべりーに・おくとぱしーに", image: "images/buruberini.png" },
  { name: "ふるり・ふるら", image: "images/furiruhurira.png" },
  { name: "ぐろるぼ・ふるっとどりろ", image: "images/gurorubo.png" },
  { name: "ぼんぼんびーに・ぐしーに", image: "images/bonbonbinigusini.png" },
  { name: "ぼぶりと・ばんでぃーと", image: "images/boburito.png" },
  { name: "おるかれーろ・おるから", image: "images/orukarero.png" },
  { name: "べるげろ・べるが", image: "images/berugero.png" },
  { name: "らヴぃとぅり・ちぇるり", image: "images/rabituri.png" },
  { name: "ろす・とらられりとす", image: "images/rosu.png" },
  { name: "う・でぃん・でぃん・でぃん・だん", image: "images/udindin.png" }
];

// ===== ゲーム状態 =====
const TOTAL_QUESTIONS = 10;
let quizList = [];
let currentIndex = 0;
let answer = null;

// ===== 配列シャッフル =====
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// ===== ゲーム開始 =====
function startGame() {
  quizList = shuffle([...characters]).slice(0, TOTAL_QUESTIONS);
  currentIndex = 0;
  nextQuestion();
}

// ===== 次の問題 =====
function nextQuestion() {
  // 10問終了
  if (currentIndex >= TOTAL_QUESTIONS) {
    showResult();
    return;
  }

  answer = quizList[currentIndex];
  currentIndex++;

  document.getElementById("character").src = answer.image;

  const choices = [answer];
  while (choices.length < 3) {
    const c = characters[Math.floor(Math.random() * characters.length)];
    if (!choices.includes(c)) choices.push(c);
  }

  shuffle(choices);

  const area = document.getElementById("choices");
  area.innerHTML = "";

  choices.forEach(c => {
    const btn = document.createElement("button");
    btn.textContent = c.name;
    btn.onclick = () => {
      if (c === answer) {
        alert("せいかい！");
        nextQuestion();
      } else {
        alert("ちがうよ");
      }
    };
    area.appendChild(btn);
  });
}

// ===== 結果画面 =====
function showResult() {
  document.getElementById("character").src = "";
  const area = document.getElementById("choices");
  area.innerHTML = "";

  const msg = document.createElement("h2");
  msg.textContent = "おしまい！";

  const retry = document.createElement("button");
  retry.textContent = "もういちど ちょうせん";
  retry.onclick = startGame;

  area.appendChild(msg);
  area.appendChild(retry);
}

// ===== 起動 =====
startGame();
