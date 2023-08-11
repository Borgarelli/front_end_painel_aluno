<template>
        <nav @click="clicked()">
            <div class="menu-item" v-show="!isOpen">
                <a href="#">{{ currentLabel }}</a>
                <img alt="sandwich-menu" src="@/assets/sanduiche.svg">
            </div>
            <!-- <Transition name="slide"> -->
                <div class="sub-items" v-show="isOpen">
                    <div class="menu-item">
                        <!-- <Transition name="fade" appear> -->
                        <RouterLink to="/"> Visão Geral </RouterLink>
                        <img alt="sandwich-menu" src="@/assets/sanduiche.svg">
                    </div>
                    <div class="menu-item" v-for="member in members">
                        <!-- <RouterLink :to="{name: 'studentpainel', params: {'id': member._id}}"> {{ member.name }} </RouterLink> -->
                        <a @click="setMember(member)"> {{ member.name }}</a>
                        <!-- <img alt="sandwich-menu" src="@/assets/sanduiche.png"> -->
                    </div>
                </div>
            <!-- </Transition> -->
    </nav>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { router } from "../router"

interface Member {
    _id: string,
    name: string,
    img_path: string,
    group: string
}

const route = useRoute()

let currentLabel: string
const currentMember = JSON.parse(localStorage.getItem('currentMember') as string)
const members = JSON.parse(localStorage.getItem('members') as string)

if (route.name == "home") {
    currentLabel = "Visão Geral"
} else {
    currentLabel = currentMember.name
    console.log(currentLabel)
}


let isOpen = ref(false)

let clicked = () => {
    isOpen.value = !isOpen.value
}

function setMember(member: Member) {
    localStorage.setItem('currentMember', JSON.stringify(member))
    router.push({name: 'studentpainel', params: {'id': member._id}})
    currentLabel = member.name
}

</script>

<style scoped>

nav {
    display: flex;
    flex-direction: row;
    background-color: white;
    justify-content: space-between;
    width: 100vw;
}

a {
    cursor: pointer;
}

.menu-item {
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--gray-80);
    padding: 10px;
    position: relative;
    transition: 0.4s;

    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
}

.sub-items {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: space-between;
    color: var(--gray-80);
    transition: 0.4s;
}

.sub-items .menu-item {
    padding: 0px
}

nav .menu-item.active,
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}

img {
    color: var(--secondary-lead, #434E5B);
    margin: 12px;
    font-size: 26px;
}

/* .slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
} */

</style>