<template>
    <div class="terms">
        <el-tabs v-model="activeTerm" class="tabs" @tab-click="handleClick">
            <el-tab-pane :label="term" :name="term" class="customTabClass" v-for="term in terms">
                <div class="panel">
                    <div class="latest-news">
                        Últimas Atualizações
                    </div>
                    <div class="" v-for="subject in currentBimestreData">

                        <CompButtons></CompButtons>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">

import type { TabsPaneContext } from 'element-plus'
import { getStatusPerSubject } from '../services/studentPanel.ts'
import CompButtons from './CompButtons.vue'
import { ref, computed } from 'vue';

defineProps<{
    terms: string[],
}>()

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const activeTerm = ref("3º Bimestre")
const bimestresData = getStatusPerSubject()

const currentBimestreData = computed( () => {
    const foundBimestre = bimestresData.find((bimestre) => Object.keys(bimestre)[0] === activeTerm.value)
    const subjects = foundBimestre[activeTerm.value]
    return subjects
})




</script>

<style>

.el-tabs__nav{
    gap: 8px !important;
    width: 100% !important;
    margin: 0px 10px 5px 10px !important;
    overflow-x: scroll !important;
}

.el-tabs__nav::-webkit-scrollbar{
    display: none;
  }

.el-tabs__nav-wrap {
    display: flex !important;
    background-color: white !important;
    justify-content: center !important;
    padding-bottom: 14px;
}

.el-tabs__item{
    color: var(--selected) !important;
    padding: 6.183px 8.372px 5.319px 10.6px !important;
    justify-content: center !important;
    align-items: center !important;

    border-radius: 17.668px !important;
    border: 1px solid var(--gray-30) !important;
}

.el-tabs__item.is-active {
    color: white !important;
    background-color: var(--selected) !important;
}

.el-tabs__active-bar , .el-tabs__nav-prev, .el-tabs__nav-next {
    display: none !important;
}

.panel {
    display: flex;
    flex-direction: column;
    justify-content: center ;
}

.latest-news {
    display: flex;
    text-align: left;
    padding: 16px 0 24px 16px;

    color: var(--selected);
    font-size: 16px;
    font-weight: 700;
    line-height: 120%;
}

</style>