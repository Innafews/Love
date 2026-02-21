const poems = [
    "从遇见你的那一刻起，<br>我的世界就只剩一种颜色——你。",
    "如果可以，<br>我想把余生的每一句晚安都亲手交给你。",
    "我偷偷把喜欢藏在每一次看你的眼神里，<br>却忘了你从来都看得见。",
    "全世界都下雨了，<br>只有你站在我身边是晴天。",
    "如果心动有形状，<br>那一定是你今天穿的那件白色毛衣。",
    "我这辈子最勇敢的事，<br>就是喜欢你这件事我从没想过放弃。",
    "你笑起来真好看，<br>像夏天的星星掉进了我的眼睛里。",
    "我想写一首很长的诗，<br>第一句是你的名字，最后一句还是你。",
    "遇见你之后，<br>我才知道原来心跳也可以这么甜。",
    "你是我的第六感，<br>其余五感都用来想你。",
    "你往我心里走了一步，<br>我直接把整条路都拆了。",
    "所有没说出口的爱，<br>都在深夜偷偷涨潮。",
    "你是我的北极星，<br>我却是个路痴。",
    "想和你一起看日出，<br>然后赖床赖到日落。",
    "你声音里的电流，<br>至今还在我脊椎里跑。",
    "你是我的软肋，<br>也是我唯一的铠甲。",
    "每一次想你，<br>都像把心脏拿出来晒太阳。",
    "你不说话的时候，<br>比宇宙还安静还致命。",
    "你回头看我一眼，<br>我就能再勇敢十年。",
    "想把你揉进骨头里，<br>连疼都觉得甜。",
    "你是我的限定款，<br>我是你的过期不候。",
    "我的每一句晚安，<br>其实都想改成：快来我怀里。",
    "你是我的劫，<br>也是我唯一的救赎。",
    "我的世界崩坏得刚刚好，<br>塌成了你的形状。",
    "你今天没出现，<br>我的整个世界就卡帧了。",
    "心动是你的形状，<br>失控是你的味道。",
    "你笑得太好看，<br>害我余生都想当小偷。",
    // 以下为2025-2026流行/新风格补充（可继续增删）
    "你出现时，心动就有了定义。",
    "初见乍欢，久处仍怦然。",
    "这次我们都带着真诚，慢慢来吧。",
    "我会毫不犹豫地奔向你，这次，每次，次次。",
    "你是我熬过黑夜的唯一光点。",
    "喜欢你是我的长期主义。",
    "你往左偏一点，我的世界就刚刚好对齐。",
    "能被你嫌弃，也算一种被偏爱。",
    "你今天可爱吗？（后台答案：爆表）",
    "把想你写进日程表，每天自动提醒。",
    "你是我wifi，我一靠近就满格。",
    "别人是满分出厂，你是直接开挂。",
    "爱你这件事，我连后悔的念头都没有。",
    "你不说话的样子，比电影还好看。",
    "全世界限量一款，我偏偏抽中了你。",
];

let shuffledPoems = [...poems];
let currentIndex = -1;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showPoem(index) {
    poemText.classList.remove('show');
    setTimeout(() => {
        poemText.innerHTML = shuffledPoems[index];
        poemText.classList.add('show');
    }, 420);
}

function showNextPoem() {
    currentIndex++;
    if (currentIndex >= shuffledPoems.length) {
        shuffledPoems = shuffle([...poems]);
        currentIndex = 0;
    }
    showPoem(currentIndex);
}

function showPrevPoem() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = shuffledPoems.length - 1;
    }
    showPoem(currentIndex);
}

// 进入
enterBtn.addEventListener('click', () => {
    cover.classList.add('hidden');
    setTimeout(() => {
        main.classList.add('show');
        shuffledPoems = shuffle([...poems]);
        currentIndex = -1;
        showNextPoem();
    }, 1400);
});

nextBtn.addEventListener('click', showNextPoem);
prevBtn.addEventListener('click', showPrevPoem);

// ... 原有的 poems 数组、shuffle 函数、showPoem 等保持不变 ...

// 进入主页面后随机生成光晕
function initShapes() {
    const shapes = document.querySelectorAll('.shape');
    const colors = [
        'rgba(220,180,255,',
        'rgba(180,140,255,',
        'rgba(200,160,240,',
        'rgba(160,120,220,',
        'rgba(210,170,255,'
    ];

    shapes.forEach((shape, i) => {
        // 随机大小 300~700px
        const size = 300 + Math.random() * 400;
        shape.style.width = size + 'px';
        shape.style.height = size + 'px';

        // 随机初始位置（偏离屏幕边缘）
        const top = -20 + Math.random() * 140;   // -20% ~ 120%
        const left = -30 + Math.random() * 160;
        shape.style.top = top + '%';
        shape.style.left = left + '%';

        // 随机动画时长 40~90秒
        const duration = 40 + Math.random() * 50;
        shape.style.setProperty('--duration', duration + 's');

        // 随机基础透明度 0.18~0.38
        const opacity = 0.18 + Math.random() * 0.20;
        shape.style.setProperty('--base-opacity', opacity);

        // 为动画提供随机偏移量（让每个光晕轨迹不同）
        shape.style.setProperty('--rand-x', (Math.random() * 200 - 100) + 'px');
        shape.style.setProperty('--rand-y', (Math.random() * 200 - 100) + 'px');
        shape.style.setProperty('--rand-x2', (Math.random() * 300 - 150) + 'px');
        shape.style.setProperty('--rand-y2', (Math.random() * 300 - 150) + 'px');
        shape.style.setProperty('--rand-x3', (Math.random() * 200 - 100) + 'px');
        shape.style.setProperty('--rand-y3', (Math.random() * 200 - 100) + 'px');

        shape.style.setProperty('--rand-scale', (Math.random() * 0.4).toFixed(2));
        shape.style.setProperty('--rand-scale2', (Math.random() * 0.5 - 0.1).toFixed(2));
        shape.style.setProperty('--rand-scale3', (Math.random() * 0.3 - 0.05).toFixed(2));

        shape.style.setProperty('--rand-rotate', (Math.random() * 60 - 30) + 'deg');
        shape.style.setProperty('--rand-rotate2', (Math.random() * 80 - 40) + 'deg');
        shape.style.setProperty('--rand-rotate3', (Math.random() * 100 - 50) + 'deg');

        // 随机延迟
        shape.style.animationDelay = (Math.random() * 15) + 's';

        // 随机颜色（轻微区别）
        const colorIdx = Math.floor(Math.random() * colors.length);
        shape.style.background = `radial-gradient(circle at ${30 + Math.random() * 40}% ${30 + Math.random() * 40}%, ${colors[colorIdx]}${opacity + 0.15}) 0%, ${colors[colorIdx]}${opacity - 0.05}) 60%, transparent 85%)`;
    });
}

// 修改进入事件
enterBtn.addEventListener('click', () => {
    cover.classList.add('hidden');
    setTimeout(() => {
        main.classList.add('show');
        shuffledPoems = shuffle([...poems]);
        currentIndex = -1;
        showNextPoem();

        // 等主页面出现后再初始化随机光晕
        setTimeout(initShapes, 800);
    }, 1400);
});

// ... 其余代码不变 ...