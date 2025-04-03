import { createStore } from "vuex";

const LOCAL_STORAGE_KEY = "formData";

const loadFormDataFromStorage = (): Record<string, any> => {
  const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : {};
};

export const store = createStore({
  state: loadFormDataFromStorage(),
  mutations: {
    setFormData(state, payload: Record<string, any>) {
      state.formData = { ...state.formData, ...payload };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.formData));
    },
    resetFormData(state) {
      state.formData = {};
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    },
  },
  actions: {
    saveForm({ commit }, formValues: Record<string, any>) {
      commit("setFormData", formValues);
    },
    cancelForm({ commit }) {
      commit("resetFormData");
    },
  },
});
