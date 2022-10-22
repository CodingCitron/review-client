<script setup>
import { ref } from 'vue'

const username = ref('')
const userEmail = ref('')
const password = ref('')
const confirmPassword = ref('')

function submitHandler(){
    console.log('submit')
}

</script>
<template>
    <section class="min-w-[320px] max-w-[400px] w-full m-auto p-4">
        <h2 class="mb-2">
            회원가입
        </h2>
        <form 
            @submit.prevent="submitHandler"
            >
            <div class="mb-2">
                <input 
                    type="text" 
                    v-model="username"
                    placeholder="name"
                    autocomplete="on"
                    class="input"
                />
            </div>
            <div class="mb-2">
                <input 
                    type="password" 
                    v-model="password"
                    placeholder="password"
                    autocomplete="on"
                    class="input"
                />
            </div>
            <div class="mb-2">
                <input 
                    type="password" 
                    v-model="confirmPassword"
                    placeholder="confirmPassword"
                    autocomplete="on"
                    class="input"
                />
            </div>
            <div class="mb-2">
                <input 
                    type="email" 
                    v-model="userEmail"
                    placeholder="email"
                    autocomplete="on"
                    class="input"
                />
            </div>
            <div class="mb-2">
                <button class="button">회원가입</button>
            </div>
            <div class="mb-2">
                <router-link :to="{ name: 'home' }" class="button">취소</router-link>
            </div>
        </form>
    </section>
</template>
<style scoped>
    
</style>