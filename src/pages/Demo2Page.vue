<template>
    <div class="demo-page">
        <h1>Демо-форма 2</h1>
        <FormGenerator :form-config="formConfig" :form-values="formValues" @save="onSave" @cancel="onCancel">

            <template #email="{ field }">
                <input :id="field.name" v-model="formValues[field.name]" placeholder="Кастомный email"
                    style="border: 2px solid green" />
            </template>
        </FormGenerator>
    </div>

</template>

<script setup lang="ts">
import FormGenerator from '@/components/FormGenerator.vue';
import type { IFormField } from '@/interfaces/interfaces';
import { reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const formConfig: IFormField[] = reactive([
    { name: 'email', label: 'Email', type: 'input', attributes: { type: 'email', required: true } },
    {
        name: 'status',
        label: 'Статус',
        type: 'select',
        options: [
            { value: 'active', label: 'Активен' },
            { value: 'inactive', label: 'Неактивен' },
        ]
    },
    { name: 'notes', label: 'Заметки', type: 'textarea' }
])

const formValues = reactive<Record<string, string | boolean>>({
    email: '',
    status: 'active',
    notes: ''
})

const onSave = (values: Record<string, any>) => {
    store.dispatch('saveForm', values)
    alert('Форма сохранена: ' + JSON.stringify(values))
}

const onCancel = () => {
    store.dispatch('cancelForm')
    alert('Форма сброшена')
}

</script>

<style lang="scss" scoped></style>