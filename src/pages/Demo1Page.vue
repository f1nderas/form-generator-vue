<template>
    <div class="demo-page">
        <h1>Демо-форма 1</h1>
        <FormGenerator :form-config="formConfig" :form-values="formValues" @save="onSave" @cancel="onCancel">
            <template #name="{ field }">
                <input :id="field.name" v-model="formValues[field.name]" placeholder="Кастомный ввод имени"
                    style='border: 2px solid blue' />
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
const formConfig: IFormField[] = [
    { name: 'name', label: 'Имя', type: 'input', attributes: { required: true } },
    { name: 'role', label: 'Роль', type: 'select', options: [{ value: 'admin', label: 'Админ' }, { value: 'user', label: 'Пользователь' }] },
    { name: 'agree', label: 'Согласен', type: 'checkbox' },
    { name: 'comment', label: 'Комментраий', type: 'textarea' }
]

const formValues = reactive<Record<string, string | boolean>>({
    name: '',
    role: 'user',
    agree: false,
    comment: ''
})

const onSave = (values: Record<string, any>) => {
    store.dispatch('saveForm', values)
    alert('Форм сохранена: ' + JSON.stringify(values))
}

const onCancel = () => {
    store.dispatch('cancelForm')
    alert('Форма сброшена')
}
</script>

<style lang="scss" scoped>
.demo-page {
    padding: 2rem;
}
</style>