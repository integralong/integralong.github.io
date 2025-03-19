---
title: "About"
date: "2025-01-02"
permalink: /about/
layout: single
#author_profile: true
---

<div class="animation-container">
  <span class="integralong">integralong</span>
  <span class="integral">integral</span>
  <span class="symbol">∫</span>
  <span class="song">song</span>
</div>

<style>
.animation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  font-size: 2.5rem;
  font-weight: bold;
  overflow: hidden;
  position: relative;
}

.integralong {
  opacity: 1;
  animation: fadeOut 1.5s 1s forwards;
}

.integral {
  position: absolute;
  left: 0;
  opacity: 1;
  animation: erase 1.5s 2s forwards;
}

.symbol {
  position: absolute;
  left: 0;
  opacity: 0;
  transform: scale(0.5);
  animation: fillSymbol 1.5s 3.5s forwards, morphToS 1.5s 5s forwards;
}

.song {
  position: absolute;
  left: 0;
  opacity: 0;
  animation: fadeIn 1.5s 6.5s forwards;
}

/* ----- 애니메이션 정의 ----- */

/* 'integralong' → 사라지기 */
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* 'integral' → 지워지기 (칠판 지우듯이) */
@keyframes erase {
  0% {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
  100% {
    opacity: 0;
    clip-path: inset(0 0 0 100%);
  }
}

/* ∫ 채워지기 */
@keyframes fillSymbol {
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* ∫ → s로 변형 (꿈틀거리듯이) */
@keyframes morphToS {
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: scale(1.2) rotate(20deg);
  }
  75% {
    transform: scale(0.8) rotate(-20deg);
  }
  100% {
    content: 's';
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

/* song 등장 */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

## [integralong.github.io](https://integralong.github.io)

🎉 **Happy New Year!**  

### Lauren A Hyeon Song  
Lauren is a rising junior at the University of Florida studying Mathematics with a strong interest in Bioinformatics and Medical AI.  
She is eager to explore the ever-changing fields of medical AI and bioinformatics. Always open to new opportunities and experiences!  

Outside of work, you can find her traveling, reading books, or enjoying winter sports in the snow.  

---



