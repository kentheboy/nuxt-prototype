<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <NuxtPage />
    <AppAlert>
      This is an auto-imported component.
    </AppAlert>
    <NuxtWelcome />
  </div>
</template>
<script setup>
const count = ref(1) // ref is auto-imported
console.log('count', count.value);
console.log("hello world");
</script>
