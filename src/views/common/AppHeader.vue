<script setup>
    
</script>
<template>
    <header class="flex justify-between items-center border h-[50px] p-2">
        <div>
            <h1>
                <router-link :to="{ name: 'home' }">
                    로고
                </router-link>
            </h1>
        </div>
        <div class="flex gap-2">
            <router-link :to="{ name: 'sign-in' }">로그인</router-link>
            <router-link :to="{ name: 'sign-up' }">회원가입</router-link>
        </div>
    </header>
</template>
<style scoped>

</style>