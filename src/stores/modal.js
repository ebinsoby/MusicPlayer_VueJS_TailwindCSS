import { defineStore } from "pinia";

export default defineStore("modal", {
  state: () => ({
    isOpen: true,
  }),
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? "hidden" : "";
    },
  },
});
