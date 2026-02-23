// timeline.js - 专用于恋爱时间轴页面

// ─────────────── 实时日期 + 陪伴天数 ───────────────
const startDate = new Date(2025, 8, 28, 0, 0, 0); // 2025年9月28日 00:00

function updateLoveTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');

    document.getElementById('loveDate').textContent =
        `现在是 ${year}年${month}月${day}日 ${hour}:${minute}`;

    // 从第1天开始算
    const diffMs = now - startDate;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
    document.getElementById('loveDays').textContent = days;
}

updateLoveTime();
setInterval(updateLoveTime, 1000);

// ─────────────── 背景漂浮光晕随机初始化 ───────────────
function initShapes() {
    const shapes = document.querySelectorAll('.shape');
    if (shapes.length === 0) return;

    const colors = [
        'rgba(220,180,255,',
        'rgba(180,140,255,',
        'rgba(200,160,240,',
        'rgba(160,120,220,',
        'rgba(210,170,255,'
    ];

    shapes.forEach((shape, i) => {
        const size = 280 + Math.random() * 420;
        shape.style.width = size + 'px';
        shape.style.height = size + 'px';

        const top = -10 + Math.random() * 120;
        const left = -20 + Math.random() * 140;
        shape.style.top = top + '%';
        shape.style.left = left + '%';

        const duration = 35 + Math.random() * 55;
        shape.style.setProperty('--duration', duration + 's');

        const opacity = 0.16 + Math.random() * 0.22;
        shape.style.setProperty('--base-opacity', opacity);

        // 随机位移（范围稍大一些更梦幻）
        shape.style.setProperty('--rand-x', (Math.random() * 240 - 120) + 'px');
        shape.style.setProperty('--rand-y', (Math.random() * 240 - 120) + 'px');
        shape.style.setProperty('--rand-x2', (Math.random() * 360 - 180) + 'px');
        shape.style.setProperty('--rand-y2', (Math.random() * 360 - 180) + 'px');
        shape.style.setProperty('--rand-x3', (Math.random() * 240 - 120) + 'px');
        shape.style.setProperty('--rand-y3', (Math.random() * 240 - 120) + 'px');

        shape.style.setProperty('--rand-scale', (Math.random() * 0.45).toFixed(2));
        shape.style.setProperty('--rand-scale2', (Math.random() * 0.55 - 0.1).toFixed(2));
        shape.style.setProperty('--rand-scale3', (Math.random() * 0.35 - 0.05).toFixed(2));

        shape.style.setProperty('--rand-rotate', (Math.random() * 70 - 35) + 'deg');
        shape.style.setProperty('--rand-rotate2', (Math.random() * 90 - 45) + 'deg');
        shape.style.setProperty('--rand-rotate3', (Math.random() * 110 - 55) + 'deg');

        shape.style.animationDelay = (Math.random() * 12) + 's';

        const colorIdx = Math.floor(Math.random() * colors.length);
        const col = colors[colorIdx];
        shape.style.background = `radial-gradient(circle at ${30 + Math.random() * 40}% ${30 + Math.random() * 40}%, ${col}${opacity + 0.18}) 0%, ${col}${opacity - 0.03}) 55%, transparent 90%)`;
    });
}

// ─────────────── 卡片逐个淡入动画 ───────────────
function showTimelineItems() {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, 300 + index * 220); // 每张卡片间隔220ms出现
    });
}

// ─────────────── 页面加载完成后执行 ───────────────
window.addEventListener('DOMContentLoaded', () => {
    // 立即更新一次时间
    updateLoveTime();

    // 初始化背景光晕
    setTimeout(initShapes, 300);

    // 卡片动画（稍微延迟，让背景先出来）
    setTimeout(showTimelineItems, 600);
});