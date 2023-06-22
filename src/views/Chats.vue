<script setup>
import { ref } from 'vue';

const chats = ref([
    { id: 1, name: 'Ximena' },
    { id: 2, name: 'Jorge' },
    { id: 3, name: 'Luis' },
    { id: 4, name: 'Miguel' },
    { id: 5, name: 'Sofia' },
    { id: 6, name: 'Luisa' },
    { id: 7, name: 'Maria' },
    { id: 8, name: 'Jose' },
]);
</script>

<template>
    <div>
        <aside>
            <div v-for="chat in chats" :key="chat.id">
                <router-link :to="`/chats/${chat.id}`">{{ chat.name }}</router-link>
            </div>
        </aside>
        <article>
            <router-view />
        </article>
    </div>
</template>
