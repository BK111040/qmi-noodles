
const audio = {
  kitchen: new Audio('kitchen.mp3'),
  hint: new Audio('ding.mp3'),
  eat: new Audio('eat.mp3')
};
audio.kitchen.volume = 0.3; // 背景音小聲點
audio.hint.volume = 0.4;   // 提示音適中
audio.eat.volume = 0.3;   // 吃泡麵聲正常

function showText(msg) {
  const text = document.getElementById('scene-text');
  text.innerText = msg;
  text.classList.remove('hidden');
  setTimeout(() => {
    text.classList.add('hidden');
  }, 3000);
}

// 封面進入按鈕
document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("cover").classList.add("hidden");
  document.getElementById("kitchen").classList.remove("hidden");
  audio.kitchen.play();
  showText('你來到了廚房，準備煮一碗熱騰騰的Q米麵');
});

// 廚房主按鈕
document.getElementById("enter-btn").addEventListener("click", () => {
  document.getElementById("scene-bg").style.filter = "brightness(0.8)";
  document.getElementById("enter-img").style.opacity = "0.0";
  document.getElementById("enter-btn").style.pointerEvents = "none";
  document.getElementById("table-area").classList.remove("hidden");
  audio.kitchen.pause();
  audio.kitchen.currentTime = 0;
  audio.hint.play();
  showText('選擇一款你想吃的口味吧～');
});
// 泡麵選擇
function selectFlavor(flavor) {
  const config = {
    kimchi: {
      bg: "bg-kimchi.jpg",
      img: "eat-kimchi.jpg",
      text: "韓式泡菜風味，酸辣開胃！"
    },
    herb: {
      bg: "bg-herb.jpg",
      img: "eat-herb.jpg",
      text: "當歸雞風味，滋補養生！"
    },
    sate: {
      bg: "bg-sate.jpg",
      img: "eat-sate.jpg",
      text: "南洋沙嗲風味，香濃濃郁！"
    }
  };
 
  document.getElementById("scene-bg").src = config[flavor].bg;
  document.getElementById("eating-img").src = config[flavor].img;
  document.getElementById("slogan").innerText = config[flavor].text;
  document.getElementById("eating").classList.remove("hidden");
  audio.hint.pause();
  audio.hint.currentTime = 0;
  audio.eat.sor
  audio.eat.play();
  document.getElementById("table-area").classList.add("hidden"); // 桌子與泡麵圖案隱藏
  document.getElementById("back-btn").classList.remove("hidden"); // 顯示回首頁按鈕
}
document.getElementById("back-btn").addEventListener("click", () => {
  document.getElementById("kitchen").classList.add("hidden");
  document.getElementById("cover").classList.remove("hidden");
  document.getElementById("scene-bg").src = "kitchen.jpg";
  document.getElementById("eating").classList.add("hidden");
  document.getElementById("back-btn").classList.add("hidden");
  document.getElementById("enter-btn").classList.remove("hidden");
  document.getElementById("table-area").classList.add("hidden");
  document.getElementById("enter-btn").style.pointerEvents = "";
  document.getElementById("enter-img").style.opacity = "1.0";
  document.getElementById("scene-bg").style.filter = "brightness(1.0)";
});
document.getElementById("enter-btn").addEventListener("click", () => {
  document.getElementById("scene-bg").style.filter = "brightness(0.8)";
  document.getElementById("enter-img").style.opacity = "0.0";
  document.getElementById("enter-btn").style.pointerEvents = "none";
  document.getElementById("table-area").classList.remove("hidden");
  audio.hint.play();
  showText('選擇一款你想吃的口味吧～');
});
