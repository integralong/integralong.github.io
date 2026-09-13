const items = document.querySelectorAll('.project-item');
const list  = document.querySelector('.projects-list');

let currentItem = null;
let closeTimer  = null;
let rafId       = null;
let mouseRatio  = 0;

document.addEventListener('mousemove', e => {
  if (!currentItem) return;

  const preview = currentItem.querySelector('.inline-preview');
  if (!preview) return;

  const rect = preview.getBoundingClientRect();

  // 미리보기 영역 기준: 왼쪽 0, 오른쪽 1
  mouseRatio = (e.clientX - rect.left) / rect.width;
  mouseRatio = Math.max(0, Math.min(1, mouseRatio));

  tickScroll();
});

function tickScroll() {
  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(() => {
    if (!currentItem) return;
    const inner   = currentItem.querySelector('.preview-inner');
    const preview = currentItem.querySelector('.inline-preview');
    if (!inner || !preview) return;
    const overflow = inner.scrollWidth - preview.clientWidth;
    if (overflow > 0) inner.style.transform = `translateX(${-mouseRatio * overflow}px)`;
  });
}
function openPreview(item) {
  clearTimeout(closeTimer);
  if (currentItem === item) return;
  if (currentItem) forceClose(currentItem);

  const srcs = (item.dataset.images || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);

  if (!srcs.length) return;

  const preview = item.querySelector('.inline-preview');

  preview.innerHTML = '';

  const inner = document.createElement('div');
  inner.className = 'preview-inner';

  // ↓ 여기만 이미지 + 영상 지원 코드로 변경
  srcs.forEach(src => {
    const isVideo = /\.(mp4|webm|mov)$/i.test(src);

    const media = document.createElement(
      isVideo ? 'video' : 'img'
    );

    media.src = src;

    if (isVideo) {
      media.autoplay = true;
      media.loop = true;
      media.muted = true;
      media.playsInline = true;
    } else {
      media.alt = '';
    }

    media.onerror = () => media.style.display = 'none';

    inner.appendChild(media);
  });

  preview.appendChild(inner);

  item.classList.add('is-hovered');
  preview.classList.add('open');
  list.classList.add('has-hover');
  currentItem = item;

  tickScroll();
}

function forceClose(item) {
  if (!item) return;
  item.classList.remove('is-hovered');
  const preview = item.querySelector('.inline-preview');
  preview.classList.remove('open');
  preview.innerHTML = '';
  if (currentItem === item) currentItem = null;
}

items.forEach(item => {
  const row = item.querySelector('a');
  const title = item.querySelector('.project-title')?.textContent.trim();

  if (title) {
    const url = new URL(row.href);
    url.searchParams.set('title', title);
    row.href = url.href;
  }

  row.addEventListener('mouseenter', () => {
    clearTimeout(closeTimer);
    openPreview(item);
  });

  item.addEventListener('mouseleave', e => {
    if (item.contains(e.relatedTarget)) return;
    closeTimer = setTimeout(() => {
      forceClose(item);
      list.classList.remove('has-hover');
    }, 60);
  });

  item.addEventListener('mouseenter', () => clearTimeout(closeTimer));
});