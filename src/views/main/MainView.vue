<script setup>
import AppHeader from '../common/AppHeader.vue'
import AppFooter from '../common/AppFooter.vue'



</script>
<template>
    <div class="custom-layout">
        <AppHeader />
        <router-view></router-view>
        <AppFooter />
    </div>
</template>
<style scoped>

</style>