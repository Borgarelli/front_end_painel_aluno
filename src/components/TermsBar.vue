<template>
    <div class="terms">
        <el-tabs v-model="activeTerm" class="tabs" @tab-click="handleClick">
            <el-tab-pane :label="term.term" :name="term.order" class="customTabClass" v-for="term in terms">
                <div class="latest-news">
                    Últimas Atualizações
                </div>
                <div class="">
                    <PainelSectionVue label="História">
                        {{ term.term }}
                    </PainelSectionVue>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">

import type { TabsPaneContext } from 'element-plus'
import PainelSectionVue from './PainelSection.vue';
import { ref } from 'vue';

const props = defineProps<{
    terms:{
        term: string,
        order: string
    }[],
}>()

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const activeTerm = ref("1")
</script>

<style>

.--el-tabs {
    background-color: red !important;

}

.el-tabs__nav{
    gap: 8px !important;
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

.latest-news {
    display: flex;
    justify-content: left;
    padding: 16px 0 24px 16px;

    color: var(--selected);
    font-size: 16px;
    font-weight: 700;
    line-height: 120%;
}

</style>