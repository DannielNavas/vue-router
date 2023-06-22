<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref('');

const iniciar = () => {
    router.push(
        '/chats',
    );
};
</script>

<template>
  <main>
    <h3>Introduce tu nombre de usuario {{ username }}</h3>
    <input type="text" placeholder="username" v-model="username">
    <button @click="iniciar">Iniciar sesion</button>
  </main>
</template>
