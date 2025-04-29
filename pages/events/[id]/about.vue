<template>
    <div>
        Hello Events at @about page uder @id param: {{ $route.params.id }}
    </div>
</template>
<script setup>
const route = useRoute();
console.log('Route params:', route.params);
const nuxt = useNuxtApp();
console.log('Nuxt app:', nuxt);
</script>
