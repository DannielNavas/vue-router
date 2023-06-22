<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref('');

const iniciar = () => {
    // TODO: de esta forma no deja registro en el historial
    // router.replace('/chats');

    //TODO: esto devuelve a la posicion indicada sea positivo o negativo si es negativo va hacia atras si es positivo va hacia adelante como en las flechas del navegador, si el numero no existe no hace nada

    // router.go(-1);

    router.push({
        path: '/chats',
        // query: {
        //     username: username.value,
        // },
        // params: {
        //     chatId: username.value,
        // },
        // TODO: de esta forma no deja registro en el historial
        replace: true,
    });
};
</script>

<template>
  <main>
    <h3>Introduce tu nombre de usuario {{ username }}</h3>
    <input type="text" placeholder="username" v-model="username">
    <button @click="iniciar">Iniciar sesion</button>
  </main>
</template>
