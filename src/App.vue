<script setup>
const isProduction = import.meta.env.VITE_STAGE === "dev";
</script>

<template>
  <div>
    <div>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link to="/session">Session</router-link>
      <router-link to="/chats">chats</router-link>
      <router-link v-if="isProduction" to="/profile">Profile</router-link>
    </div>
  </div>
  <router-view />
</template>

<style scoped></style>
