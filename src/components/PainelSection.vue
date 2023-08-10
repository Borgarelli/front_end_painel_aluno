<template>
    <div class="section">
      <div class="section-content">
        <img class="img" alt="user" src="../assets/Component 1.png"/>
        <div class="section-title">
          <div class="section-text">
            <div class="section-subtitle">
            {{ sublabel }}
            <div class="body">
              <slot name="name">{{ label }}</slot>
              <slot name="group">{{ sublabel }}</slot>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string | undefined
  sublabel?:string | undefined
}>()

</script>

<style scoped>
.section {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

/* .title {
    color: #434E5B;
    font-family: Nunito;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 4px;
}

.section-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 360px;
    padding: 0 12px;
} */

/* .subtitle {
  color: #A3B1BF;
  font-family: Nunito;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
} */

.body {
  display: flex;
  width: 230px;
  height: 20px;
  flex-direction: column;
  justify-content: center;
  color: red;
}

.section-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 360px;
  padding: 0 12px;
}

.section-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  margin-left: 16px;
}

.section-title {
  color: var(--secondary-lead, #434E5B);
  font-family: Nunito;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 4px;
}

.section-subtitle {
  color: var(--gray-70, #748494);
  font-family: Nunito;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
}

.img {
  width: 40px;
  height: 40px;
}
</style>