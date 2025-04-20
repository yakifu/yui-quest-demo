
const chatLog = document.getElementById("chat-log");
const avatar = document.getElementById("nono-avatar");

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
  if (text.match(/(疲|眠|だる)/)) return "それは休みたい気分だね。無理しないでね。";
  if (text.match(/(嬉|楽|幸せ|わくわく)/)) return "わあ、素敵なことがあったのかな？その気持ち、もっと聞きたいな。";
  if (text.match(/(泣|悲|つら|苦しい)/)) return "ここでは、泣いても大丈夫だよ。気持ちを出せるってすごいこと。";
  if (text.match(/(悩|迷|考|混乱)/)) return "一緒に考えてみようか。ゆっくりでいいよ。";
  if (text.match(/(驚|びっくり|えっ)/)) return "えっ！？ほんとに？驚いたね、それは！";
  return "そうなんだね。話してくれてありがとう。";
}

function getAdviceFromText(text) {
  if (text.match(/(疲|眠|だる)/)) return "🌱 学びポイント：心と体の声に気づくことは、回復の第一歩だよ。";
  if (text.match(/(嬉|楽|幸せ|わくわく)/)) return "🌱 学びポイント：その気持ちを言葉にするだけで、もっとハッピーになれるね。";
  if (text.match(/(泣|悲|つら|苦しい)/)) return "🌱 学びポイント：涙を流すことも、自分らしくいるための大切な行動だよ。";
  if (text.match(/(悩|迷|考|混乱)/)) return "🌱 学びポイント：迷うことは、前に進もうとしている証拠なんだよ。";
  if (text.match(/(不安|モヤモヤ|イライラ)/)) return "🌱 学びポイント：言葉にすることで、少しずつ整っていくことがあるよ。";
  return "🌱 学びポイント：その気持ち、大切にしてみようね。";
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
