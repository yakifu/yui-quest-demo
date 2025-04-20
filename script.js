
const chatLog = document.getElementById("chat-log");
const avatar = document.getElementById("nono-avatar");

function getEmotionFromText(text) {
  if (text.match(/(眠|眠い|ぼんやり|うとうと|疲)/)) return "nono_sleepy.png";
  if (text.match(/(嬉|楽しい|ハッピー|幸せ|笑)/)) return "nono_smile.png";
  if (text.match(/(泣|悲|つら|寂|孤独)/)) return "nono_cry.png";
  if (text.match(/(悩|考|迷|もや)/)) return "nono_thinking.png";
  if (text.match(/(びっくり|驚|えっ|まじ)/)) return "nono_surprised.png";
  if (text.match(/(元気|いいね|快調|やる気)/)) return "nono_happy.png";
  if (text.match(/(寄り添|優し|思いやり)/)) return "nono_empathy.png";
  if (text.match(/(モヤモヤ|イライラ)/)) return "nono_sad.png";
  return "nono.png";
}

function getResponseFromText(text) {
  if (text.match(/(疲|眠)/)) return "それは休みたい気分だね。無理しないでね。";
  if (text.match(/(嬉|楽)/)) return "わあ、素敵なことがあったのかな？";
  if (text.match(/(泣|悲)/)) return "ここでは、泣いても大丈夫だよ。";
  if (text.match(/(悩|迷|考)/)) return "一緒に考えてみようか。ゆっくりでいいよ。";
  if (text.match(/(驚|びっくり)/)) return "えっ！？ほんとに？";
  return "そうなんだね。聞かせてくれてありがとう。";
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

  const emotionImage = getEmotionFromText(text);
  avatar.src = emotionImage;

  input.value = "";
}
