---
#title: "About"
date: "2025-01-02"
permalink: /about/
layout: single
#author_profile: true
---

<div class="animation-container">
  <span class="integralong">integralong</span>
  <span class="integral">∫ong</span>
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
  position: relative;
  overflow: hidden;
}

/* ----- 1. integralong 물결처럼 흐릿해지며 사라짐 ----- */
.integralong {
  position: absolute;
  opacity: 1;
  animation: waveFadeOut 2s ease-out forwards;
}

/* ----- 2. ∫ong이 자연스럽게 나타남 ----- */
.integral {
  position: absolute;
  opacity: 0;
  animation: waveIn 2s 2s ease-out forwards;
}

/* ----- 3. ∫이 꿈틀거리면서 s로 변형 ----- */
.integral::before {
  content: '∫';
  display: inline-block;
  animation: morphToS 2s 4s ease-out forwards;
}

/* ----- 4. song이 출렁거리며 강조 ----- */
.song {
  position: absolute;
  opacity: 0;
  animation: fadeIn 2s 6s ease-out forwards, waveBounce 1.5s 8s infinite ease-in-out;
}

/* ----- 애니메이션 정의 ----- */

/* waveFadeOut: 물결처럼 흐릿해지면서 사라짐 */
@keyframes waveFadeOut {
  0% {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(-10px) translateY(5px) rotate(-3deg);
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: translateX(-20px) translateY(10px) rotate(-5deg);
  }
}

/* waveIn: 물결처럼 등장 */
@keyframes waveIn {
  0% {
    opacity: 0;
    transform: translateX(20px) translateY(-10px);
  }
  50% {
    opacity: 0.5;
    transform: translateX(-10px) translateY(5px);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
}

/* morphToS: ∫ → s로 부드럽게 변형 */
@keyframes morphToS {
  0% {
    content: '∫';
    transform: rotate(0deg);
  }
  50% {
    content: '∫';
    transform: rotate(180deg);
  }
  100% {
    content: 's';
    transform: rotate(360deg);
  }
}

/* fadeIn: song이 자연스럽게 등장 */
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

/* waveBounce: song이 물결처럼 출렁출렁 강조 */
@keyframes waveBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
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



