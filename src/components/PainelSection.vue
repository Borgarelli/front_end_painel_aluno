<template>
    <div class="section">
        <div class="title">
          <div v-if="img_path">
            <img :src="img_path"/>
          </div>
           {{ label }}
          <div class="subtitle">
            {{ sublabel }}
          </div>
        </div>
        <div class="body">
          <slot></slot>
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

<style>
.section {
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  border-radius: .5em;
  padding: 1em;
  margin: 1em 15vw 1em 15vw;
}

.title {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1.1em;
  font-weight: 600;
  color: var(--label);
  margin-bottom: 1em;
}

.subtitle {
  display: flex;
  flex-direction: column;
  font-size: .7em;
  color: var(--sublabel)
}

.body {
  text-align: center;
  justify-content: center;
}
</style>