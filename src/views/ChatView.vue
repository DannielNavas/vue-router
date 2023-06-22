<template>
    <div>
        <div v-for="msg in messagesFiltered" :key="msg.id" >
            {{ msg.text  }}
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const message = ref([
    { id: 1, text: 'Hola 1', author: 1 },
    { id: 2, text: 'Hola 2', author: 2 },
    { id: 3, text: 'Hola 3', author: 3 },
    { id: 4, text: 'Hola 4', author: 4 },
    { id: 5, text: 'Hola 5', author: 5 },
    { id: 6, text: 'Hola 6', author: 6 },
    { id: 7, text: 'Hola 7', author: 7 },
    { id: 8, text: 'Hola 8', author: 8 },
]);

const messagesFiltered = computed(() => {
    return message.value.filter((msg) => msg.author.toString() === route.params.chatId);
});
</script>
