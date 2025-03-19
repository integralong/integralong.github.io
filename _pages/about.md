---
title: "About me"
date: "2025-01-02"
permalink: /about/
layout: single
#author_profile: true
---

<div class="animation-container">
  <span class="integral">integral</span>
  <span class="s">s</span>
  <span class="song">송</span>
</div>

<style>
.animation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh; /* 높이 살짝 늘림 */
}

.integral {
  font-size: 2.5rem; /* 살짝 키움 */
  opacity: 1;
  animation: fadeOut 1.5s forwards;
}

.s {
  font-size: 2.5rem; /* 크기 통일 */
  transform: scale(0);
  opacity: 0;
  animation: growAndTransform 2s 1.5s forwards;
}

.song {
  font-size: 2.5rem;
  opacity: 0;
  transform: scale(0);
  animation: fadeIn 1.5s 3s forwards;
}

@keyframes fadeOut {
  0% { opacity: 1; }
  100% { opacity: 0; }
}

@keyframes growAndTransform {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.5) rotate(360deg);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>

## [integralong.github.io](https://integralong.github.io)

🎉 **Happy New Year!**  

### Lauren A Hyeon Song  
Lauren is a rising junior at the **University of Florida** studying **Mathematics** with a strong interest in **Bioinformatics** and **Artificial Intelligence**. She is eager to explore the ever-changing fields of medical AI and bioinformatics. Always open to new opportunities and experiences!  

Outside of work, you can find her traveling, reading books, or enjoying winter sports in the snow.  

---


