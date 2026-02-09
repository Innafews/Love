const poems = [
  "从遇见你的那一刻起，<br>我的世界就只剩一种颜色——你。",
  "如果可以，<br>我想把余生的每一句晚安都亲手交给你。",
  "我偷偷把喜欢藏在每一次看你的眼神里，<br>却忘了你从来都看得见。",
  "全世界都下雨了，<br>只有你站在我身边是晴天。",
  "如果心动有形状，<br>那一定是你今天穿的那件白色毛衣。",
  "我这辈子最勇敢的事，<br>就是喜欢你这件事我从没想过放弃。",
  "你笑起来真好看，<br>像夏天的星星掉进了我的眼睛里。",
  "我把风都给了你，<br>所以你一转身我就起鸡皮疙瘩。",
  "如果有下辈子，<br>我还想在人群里一眼就找到你。",
  "不是因为你有多好，<br>而是因为你让我变得更好。",
  "我想写一首很长的诗，<br>第一句是你的名字，最后一句还是你。",
  "遇见你之后，<br>我才知道原来心跳也可以这么甜。",
  "我偷偷许愿，<br>下次流星雨的时候你也在我身边。",
  "你是我最想藏起来的秘密，<br>也是我最想炫耀的骄傲。",
  "如果可以，<br>我想把我的余生都用来爱你。",
  "你今天有没有很可爱？<br>（我已经替你回答了：超级无敌可爱！）"
];

let currentIndex = -1; // -1 表示还没开始

const cover = document.getElementById('cover');
const main = document.getElementById('main');
const poemText = document.getElementById('poemText');
const enterBtn = document.getElementById('enterBtn');
const nextBtn = document.getElementById('nextBtn');

function showNextPoem() {
  currentIndex = (currentIndex + 1) % poems.length;
  
  poemText.classList.remove('show');
  
  setTimeout(() => {
    poemText.innerHTML = poems[currentIndex];
    poemText.classList.add('show');
  }, 400);
}

// 点击进入
enterBtn.addEventListener('click', () => {
  cover.classList.add('hidden');
  
  setTimeout(() => {
    main.classList.add('show');
    // 显示第一句
    showNextPoem();
  }, 1200);
});

// 点击换一句
nextBtn.addEventListener('click', showNextPoem);

// 页面加载时可以选择：立即显示第一句还是等待点击
// 如果想一进来就显示第一句，把下面这行取消注释
// showNextPoem();