<template>
    <div class="slider-container">
      <div class="slider-track" ref="track" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
        <button class="slider-item" v-for="(item, index) in items" :key="index" :style="sliderItemStyle(index)">
          <span class="slider-content">{{ item }}</span>
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const items = ref(['Português', 'Matemática', 'História', 'Artes', 'Geografia']);
  const track = ref<HTMLDivElement | null>(null);
  const touchStartX = ref(0);
  const touchDeltaX = ref(0);
  const slideWidth = 100; // Largura de cada slide
  const slideMargin = 2; // Espaçamento entre slides (ajuste conforme necessário)
  let startPos = 0;
  
  const onTouchStart = (event: TouchEvent) => {
    touchStartX.value = event.touches[0].clientX;
    touchDeltaX.value = 0;
    startPos = track.value?.getBoundingClientRect().left || 0;
  };
  
  const onTouchMove = (event: TouchEvent) => {
    touchDeltaX.value = event.touches[0].clientX - touchStartX.value;
    const translateX = startPos + touchDeltaX.value;
    if (track.value) {
      track.value.style.transform = `translateX(${translateX}px)`;
    }
  };
  
  const onTouchEnd = () => {
    startPos += touchDeltaX.value;
    touchDeltaX.value = 0;
  };
  
  const sliderItemStyle = (index: number) => {
    const offset = index * (slideWidth + slideMargin);
    return {
      width: `${slideWidth}px`,
      marginLeft: `${slideMargin}px`,
      transform: `translateX(${offset}px)`,
    };
  };
  </script>
  
  <style scoped>
   .slider-container {
    overflow: hidden;
    width: 100%;
  }
  
  .slider-track {
    display: flex;
    margin: 0;
    transition: transform 0.3s ease-in-out;
  }
  
  .slider-item {
    display: flex;
    height: 44px;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    background: white;
  }

  .slider-content {
    padding: 0px;
    color: #405261;
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
  }

  .slider-content:focus-visible {
    border-radius: 8px;
    border: 5px solid #40CAC2;
    background: #fff;
  }
  </style>
  