---
title: "About me"
date: "2025-01-02"
permalink: /about/
layout: single
#author_profile: true
---

<div class="animation-container">
  <span class="integral">integral</span>
  <span class="symbol">∫</span>
  <span class="ong">ong</span>
  <span class="s">s</span>
  <span class="song">ong</span>
  <span class="lauren">Lauren Song</span>
</div>

<style>
.animation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  overflow: hidden;
  font-size: 2.5rem;
  font-weight: bold;
}

.integral {
  opacity: 1;
  animation: fadeOut 1.5s forwards;
}

.symbol {
  opacity: 0;
  transform: translateX(30px);
  animation: symbolFadeIn 1.5s 1.5s forwards;
}

.ong {
  opacity: 0;
  animation: ongFadeIn 1.5s 2.5s forwards;
}

.s {
  opacity: 0;
  position: absolute;
  animation: sTransform 1.5s 4s forwards;
}

.song {
  opacity: 0;
  position: absolute;
  animation: songFadeIn 1.5s 4s forwards;
}

.lauren {
  opacity: 0;
  transform: translateY(20px);
  animation: laurenFadeIn 1.5s 5.5s forwards;
}

/* 애니메이션 정의 */
@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-30px);
  }
}

@keyframes symbolFadeIn {
  0% {
    opacity: 0;
    transform: translateX(30px) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes ongFadeIn {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes sTransform {
  0% {
    opacity: 0;
    transform: scale(0) translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateX(-30px);
  }
}

@keyframes songFadeIn {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes laurenFadeIn {
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



