<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

function submitHandler(){
    console.log('submit')
}

</script>
<template>
    <form 
        class="min-w-[320px] max-w-[400px] w-full m-auto p-4"
        @submit.prevent="submitHandler"
    >
        <div class="mb-2">
            <input 
                type="text" 
                v-model="username"
                placeholder="username"
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
            <button class="button">
                로그인
            </button>
        </div>
        <div class="mb-2">
            <router-link 
                :to="{ name: 'sign-up' }"
                class="button"
            >
                회원가입
            </router-link>
        </div>
    </form>
</template>
<style scoped>
    
</style>