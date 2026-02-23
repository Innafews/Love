// script.js
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
    "你出现时，<br>心动就有了定义。",
    "初见乍欢，<br>久处仍怦然。",
    "这次我们都带着真诚，<br>慢慢来吧。",
    "我会毫不犹豫地奔向你，<br>这次，每次，次次。",
    "你是我熬过黑夜的唯一光点。",
    "喜欢你是我的长期主义。",
    "你往左偏一点，<br>我的世界就刚刚好对齐。",
    "能被你嫌弃，<br>也算一种被偏爱。",
    "你今天可爱吗？<br>（后台答案：爆表）",
    "把想你写进日程表，<br>每天自动提醒。",
    "你是我wifi，<br>我一靠近就满格。",
    "别人是满分出厂，<br>你是直接开挂。",
    "爱你这件事，<br>我连后悔的念头都没有。",
    "你不说话的样子，<br>比电影还好看。",
    "全世界限量一款，<br>我偏偏抽中了你。",
];

// 在文件顶部（poems 数组下面）新增
const bgm = new Audio('陶喆 - 天天.mp3');
bgm.loop = true;           // 想要循环就加这行，不想要就删掉或改成 false

let shuffledPoems = [...poems];
let currentIndex = -1;

const muteBtn = document.getElementById('muteBtn');
const muteContainer = document.getElementById('muteContainer');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function typeWriter(textElement, text, speed = 65) {
    textElement.innerHTML = '';
    textElement.classList.add('typing');

    let i = 0;
    let result = '';

    function type() {
        if (i < text.length) {
            if (text.substr(i, 4) === '<br>') {
                result += '<br>';
                i += 4;
            } else {
                result += text.charAt(i);
                i++;
            }
            textElement.innerHTML = result;
            setTimeout(type, speed);
        }
    }
    type();
}

function showPoem(index) {
    const poemText = document.getElementById('poemText');

    poemText.classList.remove('show');

    setTimeout(() => {
        const content = shuffledPoems[index];
        typeWriter(poemText, content, 65);
        poemText.classList.add('show');
    }, 500);
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

// 进入主页面
enterBtn.addEventListener('click', () => {
    cover.classList.add('hidden');
    // 开始播放（放在 transition 之前或之后都可以）
    bgm.play().catch(err => {
        console.log("播放失败：", err);
        // 大部分现代浏览器第一次必须用户交互才能播放
    });
    setTimeout(() => {
        main.classList.add('show');
        shuffledPoems = shuffle([...poems]);
        currentIndex = -1;
        showNextPoem();
        setTimeout(initShapes, 800);
    }, 1400);
});

nextBtn.addEventListener('click', showNextPoem);
prevBtn.addEventListener('click', showPrevPoem);

// 复制功能
const copyBtn = document.getElementById('copyBtn');
copyBtn.addEventListener('click', () => {
    const text = poemText.innerText;
    navigator.clipboard.writeText(text.replace(/<br>/g, '\n'))
        .then(() => {
            copyBtn.textContent = '已复制～';
            setTimeout(() => { copyBtn.textContent = '复制情话'; }, 1800);
        })
        .catch(() => {
            copyBtn.textContent = '复制失败';
            setTimeout(() => { copyBtn.textContent = '复制情话'; }, 1800);
        });
});

// 随机光晕（保持原样）
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
        const size = 300 + Math.random() * 400;
        shape.style.width = size + 'px';
        shape.style.height = size + 'px';

        const top = -20 + Math.random() * 140;
        const left = -30 + Math.random() * 160;
        shape.style.top = top + '%';
        shape.style.left = left + '%';

        const duration = 40 + Math.random() * 50;
        shape.style.setProperty('--duration', duration + 's');

        const opacity = 0.18 + Math.random() * 0.20;
        shape.style.setProperty('--base-opacity', opacity);

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

        shape.style.animationDelay = (Math.random() * 15) + 's';

        const colorIdx = Math.floor(Math.random() * colors.length);
        shape.style.background = `radial-gradient(circle at ${30 + Math.random() * 40}% ${30 + Math.random() * 40}%, ${colors[colorIdx]}${opacity + 0.15}) 0%, ${colors[colorIdx]}${opacity - 0.05}) 60%, transparent 85%)`;
    });
}

// ─────────────── 新增：实时日期 + 陪伴天数 ───────────────
const startDate = new Date(2025, 8, 28, 0, 0, 0); // 9月28日 → 月份从0开始

function updateLoveTime() {
    const now = new Date();

    // 格式化日期时间
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');

    document.getElementById('loveDate').textContent =
        `现在是 ${year}年${month}月${day}日 ${hour}:${minute}`;

    // 计算陪伴天数（从第1天开始算）
    const diffMs = now - startDate;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;

    document.getElementById('loveDays').textContent = days;
}

// 立即执行一次 + 每秒更新
updateLoveTime();
setInterval(updateLoveTime, 1000);

// 进入主页面时显示按钮 + 初始化事件
enterBtn.addEventListener('click', () => {
    cover.classList.add('hidden');

    bgm.play().catch(err => {
        console.log("播放失败：", err);
    });

    setTimeout(() => {
        main.classList.add('show');
        shuffledPoems = shuffle([...poems]);
        currentIndex = -1;
        showNextPoem();
        setTimeout(initShapes, 800);

        // ─── 新增：显示静音按钮 ───
        muteContainer.classList.add('visible');

        // 绑定点击事件（只绑定一次）
        muteBtn.addEventListener('click', () => {
            bgm.muted = !bgm.muted;
            muteBtn.textContent = bgm.muted ? '🔇' : '🔊';
        });

    }, 1400);
    // 修改部分（initShapes 内）
    shape.style.animationDelay = (Math.random() * 15) + 's';

    const colorIdx = Math.floor(Math.random() * colors.length);
    const x = Math.floor(30 + Math.random() * 40);
    const y = Math.floor(30 + Math.random() * 40);
    shape.style.background = `radial-gradient(circle at ${x}% ${y}%, ${colors[colorIdx]}${(opacity + 0.15)} 0%, ${colors[colorIdx]}${(opacity - 0.05)} 60%, transparent 85%)`;
});