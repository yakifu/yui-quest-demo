
const chatLog = document.getElementById("chat-log");
const choices = document.getElementById("choices");
const avatar = document.getElementById("nono-avatar");

let currentStage = 0;

const dialogue = [
  {
    question: "",
    options: [
      {
        text: "ちょっとモヤモヤしてる",
        reply: "そっか、気持ちがモヤモヤするときって、体も疲れてるのかもね。",
        hint: "🌱学びポイント：自分の感情に名前をつけてみると、少し楽になることがあるよ。"
      },
      {
        text: "まあまあ元気",
        reply: "いいね、元気なときって、誰かにその気持ちを分けてあげたくなるね。",
        hint: "🌱学びポイント：調子が良いときほど、ちょっとした支援が自然にできたりするんだ。"
      },
      {
        text: "話す気分じゃないかも",
        reply: "無理に話さなくて大丈夫だよ。ここは、ただ寄り添う場所だから。",
        hint: "🌱学びポイント：話さないという選択も、立派な自己決定のひとつなんだよ。"
      }
    ]
  },
  {
    question: "最近、自分のことで「ちょっと気になってること」ってある？",
    options: [
      {
        text: "うまく言えないけど、ある",
        reply: "うまく言えないことも、まずは心にあるって気づけることが大事だよ。",
        hint: "🌱学びポイント：言葉にできない気持ちも、大切にしてみてね。"
      },
      {
        text: "とくにはないかな",
        reply: "それもいいね。今をそのまま感じているのも、健やかなことだよ。",
        hint: "🌱学びポイント：無理に探さなくてもいい、自分の今に耳をすませてみよう。"
      },
      {
        text: "自分のことより他の人のことが気になる",
        reply: "優しいね。でも自分のことを後回しにしすぎないようにね。",
        hint: "🌱学びポイント：誰かを大切にするには、まず自分を大切にしていいんだよ。"
      }
    ]
  },
  {
    question: "「大切にしたい」って思う気持ちは、今どこにある？",
    options: [
      {
        text: "家族との時間かな",
        reply: "うん、きっとその時間は、あとから思い出しても心をあたためてくれるよ。",
        hint: "🌱学びポイント：大切な時間は、日常のなかにあるかもしれないね。"
      },
      {
        text: "自分の心の安定かな",
        reply: "それはすごく大事なことだよ。どんなときも、心は一緒に生きていくからね。",
        hint: "🌱学びポイント：心のケアは、自分を守る力になるんだ。"
      },
      {
        text: "正直、まだ見つかってない",
        reply: "それもいいよ。ゆっくり探していけばいいし、ここで考える時間も大切だよ。",
        hint: "🌱学びポイント：見つからないという状態も、学びのはじまりなんだ。"
      }
    ]
  }
];

function getEmotionImage(text) {
  if (text.match(/(眠|眠い|ぼんやり|うとうと)/)) return "nono_sleepy.png";
  if (text.match(/(驚き|びっくり|照れ|予想外)/)) return "nono_surprised.png";
  if (text.match(/(笑|嬉しい|楽しい)/)) return "nono_smile.png";
  if (text.match(/(考え|悩み|わからない)/)) return "nono_thinking.png";
  if (text.match(/(モヤモヤ|疲れ)/)) return "nono_sad.png";
  if (text.match(/(元気|いいね|調子)/)) return "nono_happy.png";
  if (text.match(/(大丈夫|寄り添|気づける|思いやり)/)) return "nono_empathy.png";
  if (text.match(/(泣|見つからない)/)) return "nono_cry.png";
  return "nono.png";
}

function showQuestion(stage) {
  const data = dialogue[stage];
  avatar.src = "nono.png"; // reset 表情

  if (data.question) {
    const questionBubble = document.createElement("div");
    questionBubble.className = "nono-bubble";
    questionBubble.textContent = data.question;
    chatLog.appendChild(questionBubble);
  }

  choices.innerHTML = "";
  data.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.onclick = () => selectOption(i);
    choices.appendChild(btn);
  });
  choices.style.display = "flex";
}

function selectOption(index) {
  const selected = dialogue[currentStage].options[index];

  const userBubble = document.createElement("div");
  userBubble.className = "user-bubble";
  userBubble.textContent = selected.text;
  chatLog.appendChild(userBubble);

  const nonoBubble = document.createElement("div");
  nonoBubble.className = "nono-bubble";
  nonoBubble.textContent = selected.reply;
  chatLog.appendChild(nonoBubble);

  const hint = document.createElement("div");
  hint.className = "nono-bubble";
  hint.textContent = selected.hint;
  chatLog.appendChild(hint);

  const newSrc = getEmotionImage(selected.reply + selected.hint);
  avatar.src = newSrc;

  choices.style.display = "none";
  currentStage++;
  if (currentStage < dialogue.length) {
    setTimeout(() => showQuestion(currentStage), 2000);
  }
}

window.onload = () => {
  showQuestion(currentStage);
};
