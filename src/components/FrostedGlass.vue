<template>
  <div class="scratch-box" ref="shell">
    <div class="base-content">
      <slot>这里是清晰的内容</slot>
    </div>
    
    <canvas 
      ref="mainCanvas" 
      @mousedown="start" 
      @mousemove="move" 
      @mouseup="end"
      @touchstart.prevent="start"
      @touchmove.prevent="move"
      @touchend="end"
    ></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const mainCanvas = ref(null);
const shell = ref(null);
let isDrawing = false;

// 准备两个内存中的图片对象
const clearImg = new Image();
const blurryImg = new Image();

// 你的资源（建议直接用博客的背景图和一张经过高斯模糊处理的同尺寸图）
const CLEAR_SRC = '清晰背景图地址';
const BLUR_SRC = '模糊背景图地址'; // 预先模糊好的图片，效果最稳

onMounted(async () => {
  const canvas = mainCanvas.value;
  const ctx = canvas.getContext('2d');
  const rect = shell.value.getBoundingClientRect();
  
  canvas.width = rect.width;
  canvas.height = rect.height;

  // 加载图片
  await Promise.all([
    new Promise(res => { clearImg.src = CLEAR_SRC; clearImg.onload = res }),
    new Promise(res => { blurryImg.src = BLUR_SRC; blurryImg.onload = res })
  ]);

  // 初始化：先画一层模糊图
  ctx.drawImage(blurryImg, 0, 0, canvas.width, canvas.height);
});

// 离屏遮罩（关键：记录哪里被擦了）
const maskCanvas = document.createElement('canvas');
const mctx = maskCanvas.getContext('2d');

const start = (e) => {
  isDrawing = true;
  if (maskCanvas.width === 0) {
    maskCanvas.width = mainCanvas.value.width;
    maskCanvas.height = mainCanvas.value.height;
    mctx.fillStyle = 'black';
    mctx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);
  }
  move(e);
};

const move = (e) => {
  if (!isDrawing) return;
  const rect = mainCanvas.value.getBoundingClientRect();
  const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
  const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

  // 1. 在遮罩上画出“透明洞”
  mctx.globalCompositeOperation = 'destination-out';
  mctx.beginPath();
  mctx.arc(x, y, 30, 0, Math.PI * 2);
  mctx.fill();

  // 2. 渲染主画布
  const ctx = mainCanvas.value.getContext('2d');
  const { width, height } = mainCanvas.value;

  ctx.clearRect(0, 0, width, height);
  
  // 先画清晰底图
  ctx.drawImage(clearImg, 0, 0, width, height);

  // 再画模糊图，但只画遮罩剩下的部分
  ctx.save();
  // 这种混合模式会让模糊图只出现在遮罩黑色区域
  ctx.globalCompositeOperation = 'source-over'; 
  // 将遮罩作为绘图依据（这里需要一点技巧，实际最快是直接用遮罩反向剪裁）
  // 简便起见，我们直接在主画布用遮罩
  ctx.drawImage(maskCanvas, 0, 0); 
  ctx.globalCompositeOperation = 'source-in'; // 只保留重叠部分
  ctx.drawImage(blurryImg, 0, 0, width, height);
  ctx.restore();
};

const end = () => isDrawing = false;
</script>

<style scoped>
.scratch-box {
  position: relative;
  width: 100%;
  height: 400px;
}
.base-content {
  position: absolute;
  inset: 0;
  z-index: 1;
}
canvas {
  position: absolute;
  inset: 0;
  z-index: 2;
  cursor: pointer;
}
</style>