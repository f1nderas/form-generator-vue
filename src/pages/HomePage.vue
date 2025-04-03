<template>
    <div class="home-page">
        <h1>Главная страница</h1>
        <p>Здесь отображаются сохраненные данные из формы:</p>
        <pre v-if="formData && Object.keys(formData).length">{{ JSON.stringify(formData, null, 2) }}</pre>
        <p v-else>Данные еще не сохранены</p>
    </div>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const formData = computed(() => store.state.formData)
</script>

<style lang="scss" scoped>
.home-page {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;

    h1 {
        margin-bottom: 1rem;
    }

    pre {
        background-color: #f5f5f5;
        padding: 1rem;
        border-radius: 4px;
        white-space: pre-wrap;
    }
}
</style>