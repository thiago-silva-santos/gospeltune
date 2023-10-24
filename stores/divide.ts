import { defineStore } from "pinia"
export const useDivideStore = defineStore('divide', () => {


  const divide = ref<boolean>(false);
  const divideButton = ref<boolean>(false);

  function updateDivide() {
    divide.value = !divide.value
  }
  function showDivideButton() {
    divideButton.value = true
  }
  function hideDivideButton() {
    divideButton.value = false
  }

  return {
    divide,
    divideButton,
    updateDivide,
    showDivideButton,
    hideDivideButton
  }
})