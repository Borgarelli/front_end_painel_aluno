<template>
    <div class="full-page-carousel">
      <el-carousel :height="viewportHeight" indicator-position="none">
        <el-carousel-item v-for="(item, index) in items" :key="index">
          <div class="carousel-item-content">
            <div v-show="(item) === 1">
                <img src="@/assets/Onboarding - 1.svg">
            </div>
            <div v-show="(item) === 2">
                <img src="@/assets/Onboarding - 2.svg">
            </div>
            <div v-show="(item) === 3">
                <img src="@/assets/Onboarding - 3.svg">
            </div>
            <div v-show="(item) === 4">
                <img src="@/assets/Onboarding - 4.svg">
            </div>
            <div v-show="(item) === 5">
                <img src="@/assets/Onboarding - 5.svg">
            </div>
            <div v-show="(item) === 6">
                <img src="@/assets/Onboarding - 6.svg">
            </div>
            <div v-show="(item) === 7">
                <img src="@/assets/Onboarding - 7.svg">
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </template>

  <script setup lang="ts">
  import { ref, onMounted } from 'vue';

  const viewportHeight = ref(0);
  const items = [1, 2, 3, 4, 5, 6, 7];

  const updateViewportHeight = () => {
    viewportHeight.value = `${window.innerHeight}px`;
  };

//   const pathImg(index) {
//     return `@/assets`
//   }

  onMounted(() => {
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
  });
  </script>

  <style scoped>
  .full-page-carousel {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .carousel-item-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/Onboarding - 1.svg');
    background-size: cover;
    background-position: center;
    opacity: 0.8;
  }

  .el-carousel__arrow{
    display: none !important;
  }

  </style>
