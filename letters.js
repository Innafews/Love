// letters.js
// 统一管理「写给妍卿」的三个板块：诗、长信、网站想说的话

// ─────────────── 实时日期 + 陪伴天数 ───────────────
const startDate = new Date(2025, 8, 28, 0, 0, 0); // 2025年9月28日

function updateLoveTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');

    document.getElementById('loveDate').textContent =
        `现在是 ${year}年${month}月${day}日 ${hour}:${minute}`;

    const diffMs = now - startDate;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
    document.getElementById('loveDays').textContent = days;
}

// ─────────────── 打字机效果（复用首页的风格） ───────────────
function typeWriter(element, text, speed = 60) {
    element.innerHTML = '';
    element.classList.add('typing');

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
            element.innerHTML = result;
            setTimeout(type, speed);
        } else {
            element.classList.remove('typing');
        }
    }
    type();
}

// ─────────────── 诗的部分 ───────────────
const poems = [
    "你叫妍卿，<br>像从宋代笺纸上洇开的那一滴胭脂，<br>落在我的空白里，再也擦不掉。",
    "我把想你的次数藏在每一次呼吸之间，<br>结果还是被你听见了心跳的秘密。",
    "如果有一天我变得很沉默，<br>不是不爱你了，<br>只是把所有力气都用来在心里喊你的名字。",
    "你今天穿的那件毛衣，<br>颜色叫做“让我想把全世界的好天气都偷来给你”。",
    "喜欢你是件需要勇气的事，<br>但爱上你之后，<br>我连害怕都觉得甜。",
    "你笑起来的时候，<br>我世界里的像素全部自动升级成4K。",
    "我这辈子最想收藏的，<br>不是限量款球鞋，<br>而是你每一次看向我时的眼神。",
    "如果心动会留下指纹，<br>那我的心脏早就被你按满手印了。",
    "你往我生命里走了一步，<br>我直接把整座城墙都拆了迎接你。",
    "全世界都在降温，<br>只有你在我身边是恒定的37度。",
    // 你可以在这里继续添加很多首
];

let poemIndex = -1;
let shuffledPoems = [...poems].sort(() => Math.random() - 0.5);

function showPoem(direction = 'next') {
    const poemEl = document.getElementById('poemText');
    poemEl.classList.remove('show');

    setTimeout(() => {
        if (direction === 'next') {
            poemIndex = (poemIndex + 1) % shuffledPoems.length;
        } else {
            poemIndex = (poemIndex - 1 + shuffledPoems.length) % shuffledPoems.length;
        }
        typeWriter(poemEl, shuffledPoems[poemIndex]);
        poemEl.classList.add('show');
    }, 400);
}

// ─────────────── 长信 / 文章部分 ───────────────
const letters = [
    {
        title: "写给妍卿的一封信",
        date: "未知",
        content: `妍卿，

那天晚上我又失眠了，不是因为焦虑，而是因为突然很想跟你说说话。

其实我有很多话想讲，但每次真正面对你，又变得笨拙得像个刚学会写字的小学生。
我怕说得太直白会吓到你，又怕说得太含蓄你听不懂。

所以我写下来了。

我喜欢你早上起来迷迷糊糊叫我名字的样子；
喜欢你吃到好吃的东西会眯起眼睛的那一秒；
喜欢你生气时明明很凶但声音还是软软的；
喜欢你每次跟我道晚安之前都会多说一句「明天也要开心哦」。

我以前一直觉得自己不配被这么温柔地对待，
直到遇见你，我才明白：原来爱本来就应该是这样的——
不讲道理，却让人心甘情愿。

谢谢你愿意让我一点点靠近你。
我会在接下来的每一天，都努力让自己变得更好一点，
只为了某一天，你可以更安心地把未来交给我。

晚安，我的妍卿。
（其实我想说：快来我梦里吧）

—— 永远在学着爱你的笨蛋
${new Date().toLocaleDateString('zh-CN')}`
    },

    {
        title: "下雨天想对你说的话",
        date: "未知",
        content:`今天又下雨了。

每次下雨我都会想起你第一次在我伞下面躲雨的样子。
你头发上有水珠，睫毛也湿湿的，却还在笑，说「还好有你」。

那一刻我突然很怕——怕有一天你会遇到比我更好的人，
怕你有一天会发现其实我也没那么特别。

但后来我想明白了：
就算有更好的人出现，我也不会放手。
因为我不是在跟你竞争谁更好，
我只是在用尽全力，让你每一天都比昨天更确定：选择我是值得的。

所以妍卿，
如果哪天下雨了你又想起我，
请记得：我永远是你最笨拙但最固执的那把伞。

爱你，
雨天也在想你的我`
    },

    // 你可以继续在这里增加更多封信
];

// 长信当前索引
let letterIndex = 0;

function showLetter(direction = 'next') {
    if (direction === 'next') {
        letterIndex = (letterIndex + 1) % letters.length;
    } else {
        letterIndex = (letterIndex - 1 + letters.length) % letters.length;
    }

    const letter = letters[letterIndex];
    const html = `
        <h2 style="margin-bottom:1.2rem; color:#d8bfff; text-shadow:0 4px 16px rgba(0,0,0,0.6);">
            ${letter.title}
        </h2>
        <div style="font-size:0.92rem; opacity:0.85; margin-bottom:1.8rem;">
            ${letter.date}
        </div>
        <div style="white-space: pre-wrap; line-height:1.9;">
            ${letter.content.replace(/\n/g, '<br>')}
        </div>
    `;

    const container = document.getElementById('articleText');
    container.innerHTML = '';
    container.style.opacity = '0';

    setTimeout(() => {
        container.innerHTML = html;
        container.style.opacity = '1';
    }, 300);
}

// ─────────────── 网站想对你说的话 ───────────────
const siteLetter = `
妍卿，

这个网站是我用很多个深夜一点点敲出来的。
它也许代码很烂，也许配色土土，也许加载慢得像老式拨号上网，

但它是我目前能给你的、最笨拙也最认真的礼物。

我把想说的话藏在三个地方：

诗里是心跳加速的瞬间，<br>
长信里是柴米油盐的日常，<br>
而这个页面本身，是我最想对你说却最不敢大声说出口的那句——

我真的真的很想一直陪着你。

陪你熬夜赶due，陪你emo时发呆，陪你吃撑了骂自己，陪你变成更好的人，<br>
也陪着我自己一点点变成能站在你身边不会自卑的那个人。

如果有一天你累了、难过了、想逃避了，<br>
请记得回来这里。

这里永远为你开着灯，<br>
有一个很爱你、有点笨、但绝对不会跑掉的人在等你。

永远爱你的，  
寒露
`.replace(/\n/g, '<br>');

// ─────────────── Tab 切换逻辑 ───────────────
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    document.querySelector(`.tab-btn[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`tab-${tabName}`).classList.add('active');

    // 切换时触发动画 / 内容加载
    if (tabName === 'poem') {
        if (poemIndex === -1) showPoem('next');
    } else if (tabName === 'article') {
        if (!document.getElementById('articleText').innerHTML) {
            showLetter('next');
        }
    } else if (tabName === 'site') {
        const el = document.getElementById('siteLetter');
        // 移除 !el.innerHTML 检查，每次切换都填充内容，确保显示
        el.innerHTML = siteLetter;
        el.style.opacity = '0';
        setTimeout(() => el.style.opacity = '1', 200);
    }
}

// ─────────────── 页面初始化 ───────────────
document.addEventListener('DOMContentLoaded', () => {
    // 时间更新
    updateLoveTime();
    setInterval(updateLoveTime, 1000);

    // 背景光晕（复用首页的 initShapes 函数）
    if (typeof initShapes === 'function') {
        setTimeout(initShapes, 600);
    }

    // 进入主页面
    const enterBtn = document.getElementById('enterBtn');
    const cover = document.getElementById('cover');
    const main = document.getElementById('main');

    if (enterBtn) {
        enterBtn.addEventListener('click', () => {
            cover.classList.add('hidden');
            setTimeout(() => {
                main.classList.add('show');
                // 默认显示诗
                switchTab('poem');
                // 显示音量按钮（如果有）
                const muteContainer = document.getElementById('muteContainer');
                if (muteContainer) muteContainer.classList.add('visible');
            }, 1200);
        });
    }

    // Tab 按钮绑定
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
        });
    });

    // 诗的上一首 / 下一首
    document.getElementById('prevPoem')?.addEventListener('click', () => showPoem('prev'));
    document.getElementById('nextPoem')?.addEventListener('click', () => showPoem('next'));

    // 长信的上一封 / 下一封
    document.getElementById('prevArticle')?.addEventListener('click', () => showLetter('prev'));
    document.getElementById('nextArticle')?.addEventListener('click', () => showLetter('next'));

    // 复制功能（诗）
    document.getElementById('copyPoem')?.addEventListener('click', () => {
        const text = document.getElementById('poemText').innerText;
        navigator.clipboard.writeText(text).then(() => {
            const btn = document.getElementById('copyPoem');
            btn.textContent = '已复制';
            setTimeout(() => btn.textContent = '复制', 1800);
        });
    });

    // 复制功能（长信）
    document.getElementById('copyArticle')?.addEventListener('click', () => {
        const text = document.getElementById('articleText').innerText;
        navigator.clipboard.writeText(text).then(() => {
            const btn = document.getElementById('copyArticle');
            btn.textContent = '已复制';
            setTimeout(() => btn.textContent = '复制全文', 1800);
        });
    });
});