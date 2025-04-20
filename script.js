const chatLog = document.getElementById("chat-log");
const choices = document.getElementById("choices");

const responses = [
  {
    reply: "そっか、気持ちがモヤモヤするときって、体も疲れてるのかもね。",
    hint: "🌱学びポイント：自分の感情に名前をつけてみると、少し楽になることがあるよ。"
  },
  {
    reply: "いいね、元気なときって、誰かにその気持ちを分けてあげたくなるね。",
    hint: "🌱学びポイント：調子が良いときほど、ちょっとした支援が自然にできたりするんだ。"
  },
  {
    reply: "無理に話さなくて大丈夫だよ。ここは、ただ寄り添う場所だから。",
    hint: "🌱学びポイント：話さないという選択も、立派な自己決定のひとつなんだよ。"
  }
];

function selectOption(index) {
  const userBubble = document.createElement("div");
  userBubble.className = "user-bubble";
  userBubble.textContent = choices.children[index].textContent;
  chatLog.appendChild(userBubble);

  const nonoBubble = document.createElement("div");
  nonoBubble.className = "nono-bubble";
  nonoBubble.textContent = responses[index].reply;
  chatLog.appendChild(nonoBubble);

  const hint = document.createElement("div");
  hint.className = "nono-bubble";
  hint.textContent = responses[index].hint;
  chatLog.appendChild(hint);

  choices.style.display = "none";
}
