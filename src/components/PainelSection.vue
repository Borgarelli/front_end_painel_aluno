<template>
    <div class="section">
      <div class="section-content">
           <img v-if="img_path" class="img" :src="img_path"/>
        <div class="section-parameters">
          <div class="title">
            {{ label }}
          </div>
          <div class="subtitle">
            {{ sublabel }}
          </div>
          <div class="body">
          <slot></slot>
          </div>  
        </div>

      </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string | undefined
  sublabel?:string | undefined
  img_path?: string
}>()

</script>

<style scoped>
.section {
  width: 358px;
  height: 100px;
  flex-shrink: 0;
}

.section-content {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 360px;
  justify-content: space-between;
}

.section-parameters {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.title {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1.1em;
  font-weight: 600;
  color: var(--label);
}

.subtitle {
  color: #A3B1BF;
  font-family: Nunito;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 12px */

}

.img {
  width: 32px;
  height: 32px;
}

.body {
  display: flex;
  width: 269px;
  height: 23px;
  padding: 6px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
</style>