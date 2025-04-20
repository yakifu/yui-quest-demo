
const chatLog = document.getElementById("chat-log");
const avatar = document.getElementById("nono-avatar");

window.onload = () => {
  const welcome = document.createElement("div");
  welcome.className = "nono-bubble";
  welcome.textContent = "こんにちは。今日はどんな気分？なんでもいいから、聞かせてね。";
  chatLog.appendChild(welcome);
  avatar.src = "nono.png";
};

function getEmotionFromText(text) {
  if (text.match(/(眠|眠い|ぼんやり|うとうと|疲|だる)/)) return "nono_sleepy.png";
  if (text.match(/(嬉|楽しい|ハッピー|幸せ|笑|わくわく)/)) return "nono_smile.png";
  if (text.match(/(泣|悲|つら|寂|孤独|苦しい)/)) return "nono_cry.png";
  if (text.match(/(悩|考|迷|もや|どうしよう|混乱)/)) return "nono_thinking.png";
  if (text.match(/(びっくり|驚|えっ|まじ|予想外)/)) return "nono_surprised.png";
  if (text.match(/(元気|いいね|快調|やる気|前向き)/)) return "nono_happy.png";
  if (text.match(/(寄り添|優し|思いやり|気づき|共感)/)) return "nono_empathy.png";
  if (text.match(/(モヤモヤ|イライラ|不安|落ち着かない)/)) return "nono_sad.png";
  return "nono.png";
}

function getResponseFromText(text) {
  if (text.match(/(疲|眠|だる)/)) {
    return randomChoice([
      "うん、それはちょっと休みたい感じだね。",
      "気づけただけで、すごいことだよ。",
      "リラックスする時間、取れてる？"
    ]);
  }
  if (text.match(/(嬉|楽|幸せ|わくわく)/)) {
    return randomChoice([
      "いいね！その気持ちを誰かと分け合ってみるのも素敵だよ。",
      "きっと、そんな日がずっと続くといいね。",
      "その気持ち、私まで明るくなったよ！"
    ]);
  }
  if (text.match(/(泣|悲|つら|苦しい|寂)/)) {
    return randomChoice([
      "ここにいてくれてありがとう。ひとりじゃないよ。",
      "つらかったね…ちゃんと感じてるあなたがすごい。",
      "私もそっと寄り添ってるからね。"
    ]);
  }
  if (text.match(/(悩|迷|考|混乱)/)) {
    return randomChoice([
      "一緒にゆっくり考えてみようか。",
      "言葉にするだけで、少し見えてくることってあるよ。",
      "迷うってことは、前に進もうとしてるってことだよ。"
    ]);
  }
  if (text.match(/(驚|びっくり|えっ|まじ)/)) {
    return randomChoice([
      "それはびっくりしたね！",
      "ふふ、思わず『えっ？』って言っちゃいそう。",
      "そんなことが…！驚きだね。"
    ]);
  }

  return getNeutralResponse(text);
}

function getNeutralResponse(text) {
  if (text.match(/(学校|仕事|授業|面接|バイト|会社)/)) {
    return "おつかれさま。がんばってるんだね。どんな一日だった？";
  }
  if (text.match(/(友達|親|先生|同僚|彼氏|彼女|家族)/)) {
    return "その人との関係、大事にしてるんだね。どんな話だったの？";
  }
  if (text.match(/(考え|わかった|気づいた|学んだ|発見)/)) {
    return "それって、大事な気づきかもしれないね。もっと聞かせて？";
  }
  if (text.match(/(明日|予定|旅行|用事|計画|準備)/)) {
    return "楽しそう！どんな風に過ごす予定？";
  }
  if (text.match(/(なぜ|どうして|って思|どうしよう|不安)/)) {
    return "気になることがあったんだね。一緒に整理してみようか？";
  }
  return randomChoice([
    "うん、その話も大事だね。ノノは聞いてるよ。",
    "その言葉の奥に、何か感じてることがあるのかな？",
    "なるほどね。もうちょっと詳しく聞かせてもらえる？"
  ]);
}

function getAdviceFromText(text) {
  if (text.match(/(疲|眠|だる)/)) return "🌱 学びポイント：心と体の声に気づくことは、回復の第一歩だよ。";
  if (text.match(/(嬉|楽|幸せ|わくわく)/)) return "🌱 学びポイント：ポジティブな気持ちを言葉にすること、それ自体が力になるよ。";
  if (text.match(/(泣|悲|つら|苦しい|寂)/)) return "🌱 学びポイント：感情を表に出すことは、自分を守る力になるんだ。";
  if (text.match(/(悩|迷|考|混乱)/)) return "🌱 学びポイント：言葉にできる迷いは、すでに一歩目を踏み出してる証拠だよ。";
  if (text.match(/(不安|モヤモヤ|イライラ)/)) return "🌱 学びポイント：混ざった気持ちも、ここで少しずつほどいていけるよ。";
  return "🌱 学びポイント：言葉にすることが、心の整理につながる第一歩だよ。";
}

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function handleFreeInput() {
  const input = document.getElementById("user-input");
  const text = input.value.trim();
  if (!text) return;

  const userBubble = document.createElement("div");
  userBubble.className = "user-bubble";
  userBubble.textContent = text;
  chatLog.appendChild(userBubble);

  const replyText = getResponseFromText(text);
  const replyBubble = document.createElement("div");
  replyBubble.className = "nono-bubble";
  replyBubble.textContent = replyText;
  chatLog.appendChild(replyBubble);

  const adviceText = getAdviceFromText(text);
  const adviceBubble = document.createElement("div");
  adviceBubble.className = "nono-bubble";
  adviceBubble.textContent = adviceText;
  chatLog.appendChild(adviceBubble);

  const emotionImage = getEmotionFromText(text);
  avatar.src = emotionImage;

  input.value = "";
}
