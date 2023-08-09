<template>
    <div class="section">
        <div class="title">
          {{ label }}
          <div class="subtitle">
            {{ sublabel }}
            <div class="body">
              <slot></slot>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  sublabel?:string
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