<script setup>

</script>

<template>
  <div>
    <div>
      <router-link :to="{name: 'about'}">About</router-link>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link to="/session">Session</router-link>
      <router-link to="/chats">chats</router-link>
    </div>
  </div>
  <router-view />
</template>

<style scoped>
</style>
