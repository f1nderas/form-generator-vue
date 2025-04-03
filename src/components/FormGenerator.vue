<template>
    <form @submit.prevent="handleSave" class="form-generator">
        <div v-for="(field, index) in formConfig" :key="index" class="form-field">
            <label :for="field.name">{{ field.label }}</label>

            <input v-if="field.type === 'input'" v-model="props.formValues[field.name]" :id="field.name"
                v-bind="field.attributes" />

            <select v-if="field.type === 'select'" v-model="props.formValues[field.name]" :id="field.name"
                v-bind="field.attributes">
                <option v-for="option in field.options" :value="option.value" :key="option.value">{{ option.label }}
                </option>
            </select>

            <input v-if="field.type === 'checkbox'" type="checkbox" v-model="props.formValues[field.name]"
                :id="field.name" v-bind="field.attributes" />

            <textarea v-if="field.type === 'textarea'" v-model="props.formValues[field.name]" :id="field.name"
                v-bind="field.attributes" />

            <slot :name="field.name" :field="field" :value="props.formValues[field.name]"></slot>
        </div>

        <div class="form-actions">
            <button type="submit">Сохранить</button>
            <button type="button" @click="handleCancel">Отмена</button>
        </div>
    </form>
</template>

<script setup lang="ts">
import type { IFormField } from '@/interfaces/interfaces';
import type { PropType } from 'vue';

const props = defineProps({ formConfig: { type: Array as PropType<IFormField[]>, required: true }, formValues: { type: Object as PropType<Record<string, any>>, required: true } })
const emit = defineEmits(['save', 'cancel'])

const handleSave = () => {
    emit('save', props.formValues)
}

const handleCancel = () => {
    emit('cancel')
}
</script>

<style lang="scss" scoped>
.form-generator {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    .form-field {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        label {
            font-weight: bold;
        }

        input,
        select,
        textarea {
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
    }

    .form-actions {
        display: flex;
        gap: 1rem;

        button {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;

            &:first-child {
                background-color: #4caf50;
                color: white;
            }

            &:last-child {
                background-color: #f44336;
                color: white;
            }
        }
    }

}
</style>