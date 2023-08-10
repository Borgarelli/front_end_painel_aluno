<template>
    <div class="appbar-menu" @click="clicked()">
        <nav>
            <div class="menu-item" v-if="!isOpen">
                <a href="#">{{ currentLabel }}</a>

                <img alt="sandwich-menu" src="../assets/menu.png">
            </div>
            <div class="sub-items"  v-else>
                <Transition name="slide-fade">
                    <div>
                        <div class="menu-item">
                            <!-- <Transition name="fade" appear> -->
                            <RouterLink to="/"> Visão Geral </RouterLink>
                            <img alt="sandwich-menu" src="../assets/menu.png">
                        </div>
                        <div class="menu-item" v-for="member in members">
                            <!-- <RouterLink :to="{name: 'studentpainel', params: {'id': member._id}}"> {{ member.name }} </RouterLink> -->
                            <a @click="setMember(member)"> {{ member.name }}</a>
                            <img alt="sandwich-menu" src="../assets/menu.png">
                        </div>
                    </div>
                </Transition>


            <!-- </Transition> -->
        </div>
    </nav>
</div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { router } from "../router"

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

function setMember(member) {
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
    align-items: center;
    width: 100vw;
}

nav .menu-item {
    width: 90%;
    display: flex;
    align-items: left;
    justify-content: left;
    color: var(--gray-80);
    padding: 25px 40px;
    position: relative;
    border-bottom: 5px solid transparent;
    transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}

img {
    width: 18px;
    height: 18px;
    justify-content: center;
    align-items: center;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>../services/member